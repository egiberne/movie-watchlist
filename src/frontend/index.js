let currentYear = new Date().getFullYear()

// index
const initialState = document.querySelector('.initial-state')
const noDataState = document.getElementById('no-data-state')
const populatedStateSearchPage = document.getElementById('populated-state-search-page')
const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')
let html =``
let titles=``

// watchlist
const emptyWatchlist = document.querySelector('.empty-watchlist')
const populatedWatchlist = document.getElementById('populated-watchlist')

let movieTitle = ""


searchButton.addEventListener('click',()=>{

    console.info(`movie title : ${searchField.value}`)

    // fetch(`http://www.omdbapi.com/?apikey=980f8b6e&t=${searchField.value}&plot=full&type=movie`)
    fetch(`http://www.omdbapi.com/?apikey=980f8b6e&s=${searchField.value}&plot=full&type=movie`)
    .then(response=>response.json())
    .then(data=> {

            if(searchField.value){
                //hide element
                initialState.classList.replace("initial-state","hidden")
                noDataState.classList.add("hidden")

                //display element
                populatedStateSearchPage.classList.remove("hidden")


                // if(data){ // expose object data
                //     html=  `
                //         <div id="data" class="data">
                //             <img id="poster" class="poster" src=${data.Poster}>
                //             <div>
                //                 <p id="film" class="film">${data.Title} ⭐ ${data.imdbRating} </p>
                //             </div>
                //             <div>
                //                 <p>${data.Runtime} ${data.Genre}    
                //                 <input type="image" id="add-button" class="add-button" src="asset/img/add-button.png">
                //                 <label>Watchlist</label>
                //                 </p>
                //             </div>
                //             <p>${data.Plot}</p>
                //         </div>
                //     `
                    
                //     populatedStateSearchPage.innerHTML= html
                // }

              
                    titles = data.Search.map((film)=>film.Title)

                    for(title of titles){
                        
                        fetch(`http://www.omdbapi.com/?apikey=980f8b6e&t=${title}&plot=full&type=movie`)
                                .then(r=>r.json())
                                .then(data=>{

                                    localStorage.setItem("title",data.Title)
                                    // localStorage.setItem("poster",data.Poster)
                                    // localStorage.setItem("rate",data.imdbRating)
                                    // localStorage.setItem("genre",data.Genre)
                                    // localStorage.setItem("time",data.Runtime)
                                    // localStorage.setItem("plot",data.data.Plot)

                                    console.log(localStorage.getItem("title"))

                                                               

                                    html +=  `
                                    <div id="data" class="data">
                                        <img id="poster" class="poster" src=${data.Poster}>
                                        <div>
                                            <p id="film" class="film">${data.Title} ⭐ ${data.imdbRating} </p>
                                        </div>
                                        <div>
                                            <p>${data.Runtime} ${data.Genre}    
                                            <input type="image" id="add-button" class="add-button" src="asset/img/add-button.png">
                                            <label>Watchlist</label>
                                            </p>
                                        </div>
                                        <p>${data.Plot}</p>
                                    </div>
                                `
                                })
                    }
                        

                    populatedStateSearchPage.innerHTML= html
                

                
             
            } else{
                noDataState.classList.remove("hidden")
                initialState.classList.replace("initial-state","hidden")
                populatedStateSearchPage.classList.add("hidden")

                
                console.log(populatedStateSearchPage.outerHTML)

                console.log(noDataState.outerHTML)
                


            }
    })

})


