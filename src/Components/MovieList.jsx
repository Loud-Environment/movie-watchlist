import React from "react";
import MovieSection from "./MovieSection";

export function MovieList({ movieArray }) {
  const movieSections = movieArray.map((movieObject) => (
    <MovieSection movieObject={movieObject} key={movieObject.imdbID} />
  ));

  return <div>{movieSections}</div>;
}

// <button
//   ${isInWatchList(movieObject.imdbID) ? "disabled" : ""}
//   id="${movieObject.imdbID}"
//   class="add-to-watchlist-btn"
//   data-movie-imdbID="${movieObject.imdbID}"
//   >

//     ${isInWatchList(movieObject.imdbID) ? "In watchlist" : '<i class="fa-solid fa-circle-plus"></i> Watchlist'}
// </button>
