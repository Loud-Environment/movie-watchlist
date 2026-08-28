import React from "react";
import { getSearchParams } from "../utils/helpers";
import useMovieSearch from "../hooks/useMovieSearch";
import Placeholder from "../Components/Placeholder";
import { MovieList } from "../Components/MovieList";

export default function Home() {
  const [movie, setMovie] = React.useState(null);
  const { movieArray } = useMovieSearch(movie);

  return (
    <div className="wrapper placeholder-container">
      {console.log(movieArray)}
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
        <button id="search-btn" type="submit">
          Search
        </button>
      </form>
      {movieArray && movieArray.length > 0 ? (
        <MovieList movieArray={movieArray} />
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
