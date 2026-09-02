# Roadmap
 

---

## ⭐ WEEK 1 — Core Logic Foundation (Data + Storage Layer)

**Goal:** Build the underlying data structures *before* any UI.

- **Day 1 — OMDB Fetch Review & Schema Normalization**  
  Ensure consistent movie object structure.

- **Day 2 — Implement Add-to-Watchlist Logic**  
  Save normalized movie objects to localStorage.

- **Day 3 — Prevent Duplicates**  
  Check localStorage before adding; disable or modify button state.

- **Day 4 — Implement Remove-from-Watchlist Logic**  
  Filter out movie by ID and update localStorage.

- **Day 5 — Implement Watchlist Rendering Logic**  
  Read localStorage → render cards → handle empty state.

- **Day 6 — Build Internal Storage API**  
  Wrap add/remove/get operations into reusable functions.

- **Day 7 — Logic Polish Pass**  
  Clean functions, remove console.logs, finalize storage layer.

---

## ⭐ WEEK 2 — Search Page UI (CSS + HTML)

**Goal:** Style the search page using *real rendered movie data*.

- **Day 8 — Poster Sizing (Search Page)**  
- **Day 9 — Add Button Styling (Search Page)**  
- **Day 10 — Search Card Layout (Real Data)**  
- **Day 11 — Search Card Typography**  
- **Day 12 — Search Page Spacing & Alignment**  
- **Day 13 — Search Page Responsiveness**  
- **Day 14 — Search Page UI Polish**

---

## ⭐ WEEK 3 — Watchlist Page UI (CSS + HTML)

**Goal:** Style the watchlist page using *real saved movies* from localStorage.

- **Day 15 — Poster Sizing (Watchlist Page)**  
- **Day 16 — Remove Button Styling (Watchlist Page)**  
- **Day 17 — Watchlist Card Layout (Real Data)**  
- **Day 18 — Watchlist Card Typography**  
- **Day 19 — Watchlist Page Spacing & Alignment**  
- **Day 20 — Sync Styling Across Pages**  
  Unify card component, spacing, typography.

- **Day 21 — Navigation Slice**  
  Search ↔ Watchlist links.

---

## ⭐ WEEK 4 — Deployment + Identity Reinforcement

**Goal:** Ship the project and reinforce your builder identity.

- **Day 22 — Folder Structure Cleanup**  
- **Day 23 — Path Fixes**  
- **Day 24 — Netlify Deployment**  
- **Day 25 — README Creation**  
- **Day 26 — Portfolio Update**  
- **Day 27 — Share the Project**  
- **Day 28 — Celebrate + Reset Builder System**

---

## ⭐ Why This Roadmap Is Correct

- UI follows data  
- Watchlist follows storage  
- Search page first (primary flow)  
- Watchlist page second (secondary flow)  
- Deployment last  
- Identity reinforcement after shipping  

This is exactly how senior engineers structure multi‑page apps.
