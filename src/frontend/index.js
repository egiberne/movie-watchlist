let currentYear = new Date().getFullYear()

const initialState = document.querySelector('.initial-state')
const noDataState = document.getElementById('no-data-state')
const populatedStateSearchPage = document.getElementById('populated-state-search-page')


console.log(`
    Verify elements :
    initial-state, ${initialState}
    no-data-state,  ${noDataState}
    populated-state-search-page, ${populatedStateSearchPage}
    `)





noDataState.style.display = "none"
populatedStateSearchPage.style.display = "none"