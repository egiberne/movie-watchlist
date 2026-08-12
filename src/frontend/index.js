let currentYear = new Date().getFullYear()

const navLink = document.querySelector('nav  > a')
const initialState = document.querySelector('.initial-state')
const searchBar = document.getElementById('search-bar')
const plusIcon = document.getElementById('plus-icon')
const noDataState = document.getElementById('no-data-state')
const populatedStateSearchPage = document.getElementById('populated-state-search-page')
const populatedWatchlist = document.getElementById('populated-watchlist')

console.log(`
    Verify elements :
    nav link, ${navLink}
    search-bar, ${searchBar}
    initial-state, ${initialState}
    search-bar, ${searchBar}
    plus-icon, ${plusIcon}
    no-data-state,  ${noDataState}
    populated-state-search-page, ${populatedStateSearchPage}
    font-family : ${document.getElementById('title').style.fontFamily}
    populated-watchlist : ${populatedWatchlist}
    `)



initialState.style.display="flex"
noDataState.style.display="none"
