# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Render localStorage content in Watchlist page
- Add-Button Styling for Search Page :  padding, colors, icon, hover.


## [0.39.0] - 2026-09-09
### Added
JS control of the watchlist link

## [0.38.0] - 2026-09-08
### Added
- Instruction content
- Requirements content
 
## [0.37.0] - 2026-09-07
### Changed
LocalStorage implementation for Watchlist page

## [0.36.0+txt] - 2026-09-06
### Changed
README about HTTP server decision

## [0.35.0+js] - 2026-09-06
### Fixed
LocalStorage storage‑layer implementation
### Changed
HTML  structure of the listing card

## [0.34.0+js] - 2026-09-06
### Fixed
Refactor of result‑collection flow

### Removed
LocalStorage storage‑layer implementation

## [0.33.0+js] - 2026-09-05
### Added
Event listener for element populatedStateSearchPage

## [0.32.0+js] - 2026-09-03
### Added
Storage‑layer implementation using localStorage

## [0.33.1] - 2026-09-02
### Fixed
Roadmap

## [0.33.0+js] - 2026-09-02

### Added
Search flow for all movies sharing the same keyword title

### Changed
- Search flow structure

### Removed
- Single title search flow


## [0.32.0+js] - 2026-09-01

###
- Icon for the add-button

### Changed
- Roadmap file with checkbox
- API Query parameter for movie type

## [0.31.0] - 2026-08-31
### Added 
- Roadmap file
- Title-based search

## Changed
- `select` element for title only search
- Poster size

## Removed
- Year option in `select` element
- Unnecessary comments

## [0.30.1] - 2026-08-30
### Added 
- Figma design in Readme.md
- Requirements.md document

## [0.30.0] - 2026-08-30
### Added 
- Dash prefix for every single statement
## Removed
- Trailing period for noun-phrase statements
### Changed
CSS height of the `populated-state-search-page` element

## [0.29.0+css] - 2026-08-30
### Changed
- HTML search‑criteria control as `select` element
- HTML sort control as `input` element of type `image`
- CSS rounded‑style on the right side of the search bar

### Added
CSS rules for sorting `select` element

### Removed
- `sort-down` input button
- `sort-up` input button

## [0.28.0+js] - 2026-08-29
### Added 
- HTML structure for the search result element 

## [0.26.0+js] - 2026-08-27
### Added
- JS template‑literal HTML structure for film titles

## [0.25.0+js] - 2026-08-26
### Added
- JS mapping of film titles from search result

## [0.24.0] - 2026-08-26
### Fixed
- HTML implementation of Google icons

## [0.23.0] - 2026-08-24
### Fixed
- JS logic for the element display.

## [0.22.0] - 2026-08-23
### Added
- JS Logic for  `populated-state-search-page` and `no-data-state` elements display
- JS Logic for list visibility in `populated-state-search-page` element 

## [0.21.0] - 2026-08-21
### Removed
`Watchlist.js` script file

### Changed
- CSS selector organization by HTML files


## [0.20.0+html.css] - 2026-08-20
### Added
- HTML input elements for the magnifier, sorting-down, and sorting-up controls
- CSS rules for the new input elements

### Changed
- CSS styling adjustments for `search-field` and `search-bar` elements



## [0.19.0+html.js] - 2026-08-19
### Added
- HTML class `.hidden` for hiding `noDataState` and `populatedStateSearchPage` elements
### Removed
- JS statements for hiding the noDataState and populatedStateSearchPage elements
JS statements to hide the `noDataState` and `populatedStateSearchPage` elements

## [0.19.0+css] - 2026-08-19
### Added
- CSS selectors for hiding `noDataState` and `populatedStateSearchPage` elements

## [0.18.1+js] - 2026-08-18
### Fixed
- JS binding between `search-field` value and OMDB API request

## [0.18.0+js] - 2026-08-18
### Added
- JS reference for `search-button` element
- JS reference for `search-field` element
- JS event listener for `search-button` element
### Removed
- Trailing period for the noun-phrase entries

## [0.18.0+html] - 2026-08-18
### Added
- HTML id and class attributes for `search-button` element
- HTML id and class attributes for `search-field` element

## [0.17.0+js] - 2026-08-17
### Added
- JS API call to OMDB for title search

## [0.16.0+html] - 2026-08-16
### Changed 
- JS link for the cookbook section in the README.md
- Position of the `script` element

### Added
- Link for the API in the README.md

## [0.15.0+html] - 2026-08-15
## Changed
- Comment for the footer section

## [0.15.0+js] - 2026-08-15
### Added
- Watchlist.js file for watchlist.html
- JS references for `populatedWatchlist`
### Removed 
- JS references unused in index.js

## [0.15.0+css] - 2026-08-15
### Changed
- CSS rules for `empty-watchlist` and `initial-state` elements

## [0.14.0+css] - 2026-08-14
### Added
- CSS centering the HTML structure

## [0.13.0] - 2026-08-13
### Changed
- Every entry in the changelog to include a period at the end

## [0.13.0+css] - 2026-08-13
### Changed
- CSS positioning for `search-bar` element

## [0.13.0+html] - 2026-08-13
### Changed
- HTML position for `search-bar` element

## [0.12.0+js] - 2026-08-12
- JS reference for `populated-watchlist` component

## [0.12.0+css] -2026-08-12
- CSS styling for `populated-watchlist` component

## [0.12.0+html] - 2026-08-12 
### Added
- HTML structure for `populated-watchlist` component.
- HTML structure for loading the JS script in watchlist.html

## [0.11.0] - 2026-08-11
### Added
- CSS styling for header element.
- CSS styling for link element. 

## [0.10.0+js] - 2026-08-10
### Added 
- JavaScript font-family reference from element

## [0.10.0+css] - 2026-08-10
### Added 
- CSS font-family definition for Google font Inter

## [0.10.0+html] - 2026-08-10
### Added 
- HTML reference for external Google Font Inter

## [0.9.0] - 2026-08-09
### Added 
- HTML structure for `populated-state-search-page` component
- CSS styling for `populated-state-search-page` component
- JS reference for `populated-state-search-page` component
- Link for change log reference
- Link for versioning reference

### Changed
- Links related to MDN for HTML, CSS and JS cookbook or howto or guide.


## 0.8.2 2026-08-08
### Added
- Control in JS, the component *no-data-state*.

## 0.8.1 2026-08-08
### Added 
- Design in CSS rule the component, *no-data-state*.

## 0.8.0 2026-08-08
### Added 
- Structure in HTML, the component *no-data-state*.
- Structure in HTML, a component for copyrighting in the element, *footer*. 
### Changed
- Update the watchlist *section* elements.

## 0.7.2 2026-08-07
### Added
- Implement JS statement to control the plus-icon.

## 0.7.1 2026-08-07
### Added
- Implement the CSS styling for the plus-icon element.

## 0.7.0 2026-08-07
### Added
Implement the initial state component for the watchlist.
### Changed 
- Modify the heading content to follow the design.
- Modify the *state* `class` and `id` to *initial-state*.

## 0.6.2 2026-08-06
### Added
- Implement the control of the search bar element in JS.

## 0.6.1 2026-08-06
### Added
- Implement the design styling of the search bar in CSS.
### Changed
- Update the search bar structure in HTML.

## 0.6.0 2026-08-06
### Added
- Implement the search bar component in HTML.

## 0.5.0 2026-08-05
### Changed
- Replace div by section in main element for semantic.
- Center the section element in the main element with flex model.
- Center element in section with flex model.
- Control element section with javascript.`document.querySelector`

## 0.4.0 2026-08-04
### Added 
- Implement nav element in watchlist.html.
- Center the hyperlink in the nav element with CSS flex.
- Control the hyperlink background with JS.


## 0.3.0 2026-08-03
### Added
- Implement the header, footer, main elements for the index.html.
- Remove the heading h2 for the index.html and watchlist.html.

## 0.2.0 2026-08-02
### Added
- Create te frontend folder save all the code related to the frontend.
- Design the CSS styling for the background, font.

## 0.1.0 2026-08-01
### Added
- Structure the index.html and the watchlist.html basic.

## 0.0.0 2026-07-31
### Added
- Set up the folders project, files project.