let currentYear = new Date().getFullYear()

const initialState = document.querySelector('.initial-state')
const noDataState = document.getElementById('no-data-state')
const populatedStateSearchPage = document.getElementById('populated-state-search-page')
const url = "http://www.omdbapi.com/?s=batman&apikey=980f8b6e"
const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')

let movieTitle = searchField.textContent

console.log(`
    Verify elements :
    initial-state, ${initialState}
    no-data-state,  ${noDataState}
    populated-state-search-page, ${populatedStateSearchPage}
    movie title = ${movieTitle}
    `)


noDataState.style.display = "none"
populatedStateSearchPage.style.display = "none"

searchButton.addEventListener('click',()=>{

    fetch(url)
    .then(response=>response.json())
    .then(data=> console.log(data))

})


