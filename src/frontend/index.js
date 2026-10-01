const WATCHLIST_KEY_PREFIX = 'card-'

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function buildWatchlistMarkup(items = []) {
    if (!Array.isArray(items)) {
        return ''
    }

    return items
        .filter((item) => typeof item === 'string' && item.trim() !== '')
        .join('')
}

function formatMovieCard(movie = {}) {
    const safeMovie = movie && typeof movie === 'object' ? movie : {}
    const poster = typeof safeMovie.Poster === 'string' && safeMovie.Poster.trim() && safeMovie.Poster !== 'N/A'
        ? safeMovie.Poster
        : 'asset/img/placeholder.png'
    const title = typeof safeMovie.Title === 'string' && safeMovie.Title.trim()
        ? safeMovie.Title.trim()
        : 'Untitled'
    const rating = typeof safeMovie.imdbRating === 'string' && safeMovie.imdbRating.trim() && safeMovie.imdbRating !== 'N/A'
        ? safeMovie.imdbRating.trim()
        : 'N/A'
    const runtime = typeof safeMovie.Runtime === 'string' && safeMovie.Runtime.trim() && safeMovie.Runtime !== 'N/A'
        ? safeMovie.Runtime.trim()
        : 'N/A'
    const genre = typeof safeMovie.Genre === 'string' && safeMovie.Genre.trim() && safeMovie.Genre !== 'N/A'
        ? safeMovie.Genre.trim()
        : 'N/A'
    const plot = typeof safeMovie.Plot === 'string' && safeMovie.Plot.trim() && safeMovie.Plot !== 'N/A'
        ? safeMovie.Plot.trim()
        : 'No plot summary available.'

    return `
        <article class="movie-card">
            <img class="poster" src="${escapeHtml(poster)}" alt="Poster for ${escapeHtml(title)}">
            <div class="movie-content">
                <h3>${escapeHtml(title)} <span>⭐ ${escapeHtml(rating)}</span></h3>
                <p>${escapeHtml(runtime)} • ${escapeHtml(genre)}</p>
                <p>${escapeHtml(plot)}</p>
                <button type="button" id="${escapeHtml(safeMovie.imdbID || '')}" class="add-button">Add to Watchlist</button>
            </div>
        </article>
    `
}

if (typeof document !== 'undefined') {
    const initialState = document.getElementById('initial-state')
    const noDataState = document.getElementById('no-data-state')
    const populatedStateSearchPage = document.getElementById('populated-state-search-page')
    const searchButton = document.getElementById('search-button')
    const searchField = document.getElementById('search-field')
    const emptyWatchlist = document.querySelector('.empty-watchlist')
    const populatedWatchlist = document.getElementById('populated-watchlist')

    function renderWatchlist() {
        if (!populatedWatchlist) {
            return
        }

        const items = []

        for (let i = 0; i < localStorage.length; i += 1) {
            const key = localStorage.key(i)
            if (key && key.startsWith(WATCHLIST_KEY_PREFIX)) {
                const value = localStorage.getItem(key)
                if (value) {
                    items.push(value)
                }
            }
        }

        if (items.length === 0) {
            if (emptyWatchlist) {
                emptyWatchlist.classList.remove('hidden')
            }
            populatedWatchlist.classList.add('hidden')
            return
        }

        if (emptyWatchlist) {
            emptyWatchlist.classList.add('hidden')
        }
        populatedWatchlist.classList.remove('hidden')
        populatedWatchlist.innerHTML = buildWatchlistMarkup(items)
    }

    if (searchButton && searchField) {
        searchButton.addEventListener('click', async () => {
            const term = searchField.value.trim()

            if (!term) {
                if (initialState) {
                    initialState.classList.add('hidden')
                }
                if (noDataState) {
                    noDataState.classList.remove('hidden')
                }
                if (populatedStateSearchPage) {
                    populatedStateSearchPage.classList.add('hidden')
                }
                return
            }

            if (initialState) {
                initialState.classList.add('hidden')
            }
            if (noDataState) {
                noDataState.classList.add('hidden')
            }
            if (populatedStateSearchPage) {
                populatedStateSearchPage.classList.remove('hidden')
            }

            const searchUrl = `https://www.omdbapi.com/?apikey=980f8b6e&s=${encodeURIComponent(term)}&plot=full&type=movie`
            const searchResponse = await fetch(searchUrl)
            const searchData = await searchResponse.json()
            const searches = Array.isArray(searchData.Search) ? searchData.Search : []

            if (!searches.length) {
                if (populatedStateSearchPage) {
                    populatedStateSearchPage.classList.add('hidden')
                }
                if (noDataState) {
                    noDataState.classList.remove('hidden')
                }
                return
            }

            const movieResponses = await Promise.all(
                searches.map(async (search) => {
                    const response = await fetch(`https://www.omdbapi.com/?apikey=980f8b6e&t=${encodeURIComponent(search.Title)}&plot=full&type=movie`)
                    return response.json()
                })
            )

            const html = movieResponses
                .filter(Boolean)
                .map((movie) => formatMovieCard(movie))
                .join('')

            if (populatedStateSearchPage) {
                populatedStateSearchPage.innerHTML = html
            }
        })
    }

    if (populatedStateSearchPage) {
        populatedStateSearchPage.addEventListener('click', (event) => {
            const addButton = event.target.closest('.add-button')
            if (!addButton) {
                return
            }

            const movieId = addButton.getAttribute('id')
            const movieCard = addButton.closest('.movie-card')
            if (!movieId || !movieCard) {
                return
            }

            localStorage.setItem(`${WATCHLIST_KEY_PREFIX}${movieId}`, movieCard.outerHTML)
        })
    }

    if (populatedWatchlist) {
        renderWatchlist()
    }
}

if (typeof module !== 'undefined') {
    module.exports = {
        buildWatchlistMarkup,
        formatMovieCard,
    }
}

