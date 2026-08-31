let currentYear = new Date().getFullYear()

// index
const initialState = document.querySelector('.initial-state')
const noDataState = document.getElementById('no-data-state')
const populatedStateSearchPage = document.getElementById('populated-state-search-page')
const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')
let html =``
let array=``

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


   
    // http://www.omdbapi.com/?t=batman&plot=full
    fetch(`http://www.omdbapi.com/?apikey=980f8b6e&t=${searchField.value}&plot=full`)
    .then(response=>response.json())
    .then(data=> {

            if(searchField.value){
                //hide element
                initialState.classList.replace("initial-state","hidden")
                noDataState.classList.add("hidden")

                //display element
                populatedStateSearchPage.classList.remove("hidden")
               

                console.log(JSON.stringify(data))

                if(data){ // expose object data
                    html=  `
                        <div id="data" class="data">
                            <img id="poster" class="poster" src=${data.Poster}>
                            <p id="film" class="film">${data.Title}</p>
                            <p id="year" class="year">${data.Year}</p>
                            <p>${data.Genre} </p>
                            <p>${data.Runtime}</p>
                            <p>${data.Plot}</p>
                            <button id="add-button" class="add-button">add</button>
                        </div>
                    `
                    populatedStateSearchPage.innerHTML= html
                }

                if(data.Search){ // map a array
                    array = data.Search.map((film)=>{
                    html=  `
                        <div id="data" class="data">
                            <img id="poster" class="poster" src=${film.Poster}>
                            <p id="film" class="film">${film.Title}</p>
                            <p id="year" class="year">${film.Year}</p>
                            <p>${film.Genre} </p>
                            <p>${film.Runtime}</p>
                            <p>${film.Plot}</p>
                            <button id="add-button" class="add-button">add</button>
                        </div>
                    `
                    return html
                    })
                    populatedStateSearchPage.innerHTML= array.join('')
                }

                
             
            } else{
                noDataState.classList.remove("hidden")
                initialState.classList.replace("initial-state","hidden")
                populatedStateSearchPage.classList.add("hidden")

                
                console.log(populatedStateSearchPage.outerHTML)

                console.log(noDataState.outerHTML)
                


            }
    })

})


