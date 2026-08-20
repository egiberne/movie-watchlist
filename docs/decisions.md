# Project Goal
Movie Watchlist to practice real-world front‑end development skills: 
- API via JS
- CSS styling
- HTML structure

## Tech Stack Choices
- HTML
- CSS
- JavaScript

### Reasons
- Pratice of DOM manipulation, event handling, api call
- Pratice of flexbox 
- Pratice of HTML semantic


### Tradeoffs
Use boilerplate for pages


## Versioning Strategy
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).
Semantic versioning (MAJOR.MINOR.PATCH+BUILD)

### Reasons
- Professional documentation
- Differentiate builds for : html, css, js.

### Tradeoffs
Time consuming 


## Changelog Strategy
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

### Reasons
- Clear history of changes
- Easy to track evolution of the project

### Tradeoffs
Time consuming 


## Visibility Management
Changed Display Logic from JavaScript to CSS

### Reasons

 UI visibility should be handled by CSS, not JavaScript. JS should only toggle classes, not define presentation rules.


### Tradeoffs
Requires a new class
 
### Implementation
Added a .hidden CSS class with display: none and updated JavaScript to toggle this class instead of modifying style.display.

## Button Management

Implemented input button instead of image

### Reasons
- Consistent with the rest of the UI
- Full control over styling
- More reliable display across browser

### Tradeoffs
Different from the initial visual design.

### Implementation
Replaced the image-based control with an HTML input button:
```html
<input type="button" value="⭱" id="sort-up" class="sort-up">
```
