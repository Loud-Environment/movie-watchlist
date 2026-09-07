import React from "react";
import { getSearchParams } from "../utils/helpers";
import useMovieSearch from "../hooks/useMovieSearch";
import Placeholder from "../Components/Placeholder";
import { MovieList } from "../Components/MovieList";

export default function Home() {
  const [movie, setMovie] = React.useState(null);
  const [filters, setFilters] = React.useState({
    type: "",
    y: "",
  });
  const { movieArray, error, isLoading } = useMovieSearch(movie, filters);
  const [savedMoviesArray, setSavedMoviesArray] = React.useState(
    JSON.parse(localStorage.getItem("watchlist") ?? "[]"),
  );

  return (
    <div className="wrapper placeholder-container">
      <form
        className="search-group"
        action={getSearchParams(setMovie, setFilters)}
      >
        <div className="search-line">
          <input
            aria-label="Search for a movie"
            placeholder="Search for a movie"
            type="text"
            id="search-input"
            name="search-input"
          />
          <button id="search-btn" type="submit" disabled={isLoading}>
            Search
          </button>
        </div>
        <div className="search-filters">
          <label htmlFor="movie-type">Type</label>
          <select id="movie-type" name="movie-type">
            <option value="">--any--</option>
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
            <option value="Episode">Episode</option>
          </select>
          <label htmlFor="movie-year">Year</label>
          <input
            type="number"
            id="movie-year"
            name="movie-year"
            placeholder="1997"
            min="1888"
            max="9999"
          ></input>
        </div>
      </form>
      {movieArray && movieArray.length > 0 ? (
        <MovieList
          movieArray={movieArray}
          savedMoviesArray={savedMoviesArray}
          setSavedMoviesArray={setSavedMoviesArray}
        />
      ) : error ? (
        <h2 className="error-message">{error}</h2>
      ) : isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Placeholder origin="home" />
      )}
    </div>
  );
}
