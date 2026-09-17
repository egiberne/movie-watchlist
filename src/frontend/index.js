let currentYear = new Date().getFullYear()

// index
const initialState = document.querySelector('.initial-state')
const noDataState = document.getElementById('no-data-state')
const populatedStateSearchPage = document.getElementById('populated-state-search-page')
const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')
const card= document.getElementById('card')


// watchlist
const emptyWatchlist = document.querySelector('.empty-watchlist')
const populatedWatchlist = document.getElementById('populated-watchlist')

let movieTitle = ""

if(searchButton){
    searchButton.addEventListener('click', async ()=>{

    if(searchField.value){
        
        // console.log(`movie searched : ${searchField.value}`)
        //hide element
        initialState.classList.replace("initial-state","hidden")
        noDataState.classList.add("hidden")
        //display element
        populatedStateSearchPage.classList.remove("hidden")

        const response = await fetch(`http://www.omdbapi.com/?apikey=980f8b6e&s=${searchField.value}&plot=full&type=movie`)

        const data = await response.json()

        const searches = data.Search

        const moviesPromise = searches.map(async search => await fetch(`http://www.omdbapi.com/?apikey=980f8b6e&t=${search.Title}&plot=full&type=movie`)

        )

        const responses = await Promise.all(moviesPromise)

        const movies = await Promise.all(responses.map(response => response.json()))


        let html = movies.map(movie => { console.log(movie) 
            return ` 
                        <div class="movie-card">
                                <img id="poster" class="poster" src=${movie.Poster}>
                                ${movie.Title} ⭐ ${movie.imdbRating}                            
                                ${movie.Runtime} ${data.Genre}
                                ${movie.Plot}  
                                <input type="image" id="${movie.imdbID}" class="add-button" src="asset/img/add-button.png">
                                <label>Watchlist</label>
                            
                        </div>
                    `
    }).join('')
        


            populatedStateSearchPage.innerHTML= html

        





        } else {

            noDataState.classList.remove("hidden")
            initialState.classList.replace("initial-state","hidden")
            populatedStateSearchPage.classList.add("hidden")        
            // console.log(populatedStateSearchPage.outerHTML)
            // console.log(noDataState.outerHTML)



        }


    })
    }
if(populatedStateSearchPage){
    populatedStateSearchPage.addEventListener('click', (e)=> {
        localStorage.setItem(`card-${e.target.id}`,document.getElementById(e.target.id).parentElement.outerHTML)

    

    })
}
document.getElementById('watchlist-link').addEventListener('click',()=>{
    let html

       for(let i=0;i<localStorage.length;i++){
        console.log(`storage : ${localStorage.getItem(localStorage.key(i))}`)
        
        html += localStorage.getItem(localStorage.key(i))
    }

    
})