let currentYear = new Date().getFullYear()

// index
const initialState = document.querySelector('.initial-state')
const noDataState = document.getElementById('no-data-state')
const populatedStateSearchPage = document.getElementById('populated-state-search-page')
const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')

// watchlist
const emptyWatchlist = document.querySelector('.empty-watchlist')
const populatedWatchlist = document.getElementById('populated-watchlist')

let movieTitle = ""

console.log(`
    Verify elements :
    initial-state, ${initialState}
    no-data-state,  ${noDataState}
    populated-state-search-page, ${populatedStateSearchPage}
    movie title = ${movieTitle}
    `)




searchButton.addEventListener('click',()=>{

    console.log(`movie title : ${searchField.value}`)


   

    fetch(`http://www.omdbapi.com/?apikey=980f8b6e&s=${searchField.value}`)
    .then(response=>response.json())
    .then(data=> {
        console.log(`before : ${initialState.outerHTML}
            ${populatedStateSearchPage.outerHTML}`)

            if(data){
                initialState.classList.toggle("hidden")

                console.log(initialState.outerHTML)
                
                populatedStateSearchPage.classList.remove("hidden")

                populatedStateSearchPage.textContent=JSON.stringify(data)

                console.log(populatedStateSearchPage.outerHTML)

                console.log(data)
             
            } else{

                noDataState.classList.remove("hidden")
                


            }
    })

})


