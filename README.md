# Shopify UX Developer Intern & Web Developer Intern Challenge - Fall 2021

- [My App](https://josephblais.github.io/shopify-internship-challenge/)
- [The Challenge](https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#heading=h.c7xqfkhsqnd4)


## Features
---
Users can

- search for movies by title.
  - a custom useDebounce hook has been used to auto-reload the search results as the user types (with a 500ms delay)
- view a list of movies related to their search (10 max).
- add movies to their nominations (5 max).

When the user has added 5 nominated movies
  - the add buttons are disabled.
  - a banner appears.
  - a thumbs-up (👍) animation plays.

When the banner is in view, users can click the button in the banner, which
  - hides the search results.
  - hides the banner button.

---

## Libraries

- Styled components

---

## Further Developments

  - Mobile view
  - Clear search bar on banner button click
  - Info modal