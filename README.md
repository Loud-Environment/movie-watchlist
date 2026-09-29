# Movie Watchlist

A React app for discovering movies and building a personal watchlist, powered by the [OMDb API](https://www.omdbapi.com/). Search by title, filter by type and year, view detailed information for any film, and save titles to a watchlist that persists between visits.

**🔗 Live demo:** [https://ft-movie-watchlist.netlify.app/]

![Home page](./images/movie_watchlist-square.png)
![Movie details](./images/movie_watchlist-square-movie_details.jpg)

## Features

- Search movies by title via the OMDb API
- Filter results by type (Movie / Series / Episode) and by year
- View detailed information for a selected movie (poster, plot, cast, ratings, etc.)
- Save and remove movies from a personal watchlist, persisted in `localStorage`
- Client-side routing between Home, Movie Details, and Watchlist views
- Responsive layout, including mobile

## Tech stack

- [React 19](https://react.dev/) — function components and hooks
- [React Router](https://reactrouter.com/) — client-side routing (`/`, `/watchlist`, `/:id`)
- [Vite](https://vitejs.dev/) — build tool and dev server
- Plain CSS
- [react-icons](https://react-icons.github.io/react-icons/) — UI icons
- [OMDb API](https://www.omdbapi.com/) — movie data

## Getting started

```bash
git clone https://github.com/<your-username>/movie-watchlist.git
cd movie-watchlist
npm install
```

Get a free API key at [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx), then create a `.env` file in the project root based on `.env.example`:

```
VITE_OMDB_API_KEY=your_api_key_here
```

Then start the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or whichever port Vite prints).

## Architecture notes

- `useMovieSearch` — a custom hook that encapsulates all data-fetching logic: loading state, error handling, and resolving search results into full movie details.
- `helpers.js` — shared logic (search params handling, watchlist persistence) kept separate from components, so components stay focused on rendering.
- Layout is handled with a shared `<Layout>` component (header + `<Outlet />`) so every page keeps consistent navigation.

## What I practiced

- Structuring a multi-page app with React Router (nested routes, a shared layout via `Outlet`)
- Extracting data-fetching logic into a reusable custom hook
- Working with `localStorage` to persist state across sessions
- Handling a two-step API flow (search → fetch full details per result)

## Next steps

- Add pagination for search results
- Expand accessibility (ARIA labels on interactive elements, keyboard navigation review)
- Add accounts and save data in Firebase
