import React from "react";
import { getSearchParams } from "../utils/helpers";
import useMovieSearch from "../hooks/useMovieSearch";
import Placeholder from "../Components/Placeholder";
import { MovieList } from "../Components/MovieList";

export default function Home() {
  const [movie, setMovie] = React.useState(null);
  const { movieArray, error, isLoading } = useMovieSearch(movie);

  // console.log(error);

  return (
    <div className="wrapper placeholder-container">
      <form
        action={getSearchParams(setMovie, movie)}
        className="search-group"
        id="search-form"
      >
        <input
          aria-label="Search for a movide"
          placeholder="Search for a movie"
          type="text"
          id="search-input"
          name="search-input"
        />
        <button id="search-btn" type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {movieArray && movieArray.length > 0 ? (
        <MovieList movieArray={movieArray} />
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
