# Movie Watchlist

A Movie watch list web site.

## Description

Yet another movie watchlist website based on Scrimba Solo Project.
### Requirements

####  Index Page
- index.html as Search page : Call to OMDB API with the title searched for and display search results
- Add-Button : add to watchlist saves that data to `localstorage`

#### Watchlist Page
- watchlist.html 
- Loads and display data from localstorage


## Design
[Figma](https://www.figma.com/design/jhFRdFIdHpRxsDznNXtpXw/Movie-Watchlist?node-id=2-17&t=0j0yurjuPUaqdVMu-0)
![alt text](<docs/Figma_SP_ Watchlist Creator - Light.png>)


## API
[OMDb](https://www.omdbapi.com/)


## HTTP Server

- Without module installation

```powershell
sl frontend\src
npx http-server
```

- Usage

`http://127.0.0.1:8080/`


## Cookbook

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to)

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/How_to)

[JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## Repository
```cmd
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/egiberne/movie-watchlist    
git push -u origin main
```