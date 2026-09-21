import React from "react";
import { getSearchParams } from "../utils/helpers";
import useMovieSearch from "../hooks/useMovieSearch";
import Placeholder from "../Components/Placeholder";
import { MovieList } from "../Components/MovieList";
import SearchOptions from "../Components/SearchOptions";
import { IoMdOptions } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

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
  const [optionsShown, setOptionsShown] = React.useState(false);

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
            className="search-input"
            id="search-input"
            name="search-input"
          />
          <button className="search-btn" type="submit" disabled={isLoading}>
            <FaSearch className="search-icon" />
          </button>
          <button
            onClick={() => setOptionsShown((prev) => !prev)}
            className="search-param-btn"
            type="button"
          >
            <IoMdOptions />
          </button>
        </div>
      </form>
      {optionsShown ? <SearchOptions /> : null}
      <div className="results">
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
    </div>
  );
}
