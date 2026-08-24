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
    Verify elements before:
    initial-state, ${initialState.outerHTML}
    no-data-state,  ${noDataState.outerHTML}
    populated-state-search-page, ${populatedStateSearchPage.outerHTML}
    movie title = ${movieTitle.outerHTML}
    `)




searchButton.addEventListener('click',()=>{

    console.log(`movie title : ${searchField.value}`)


   

    fetch(`http://www.omdbapi.com/?apikey=980f8b6e&s=${searchField.value}`)
    .then(response=>response.json())
    .then(data=> {

            if(searchField.value){
                initialState.classList.replace("initial-state","hidden")
                noDataState.classList.add("hidden")

                populatedStateSearchPage.classList.remove("hidden")
                populatedStateSearchPage.textContent=JSON.stringify(data)

                console.log(populatedStateSearchPage.outerHTML)
        
             
            } else{
                noDataState.classList.remove("hidden")
                initialState.classList.replace("initial-state","hidden")
                populatedStateSearchPage.classList.add("hidden")

                
                console.log(populatedStateSearchPage.outerHTML)

                console.log(noDataState.outerHTML)
                


            }
    })

})


