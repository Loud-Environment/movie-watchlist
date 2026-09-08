import React from "react";
import MovieSection from "./MovieSection";

export function MovieList({
  movieArray,
  savedMoviesArray,
  setSavedMoviesArray,
}) {
  const movieSections = movieArray.map((movieObject) => (
    <MovieSection
      movieObject={movieObject}
      key={movieObject.imdbID}
      setSavedMoviesArray={setSavedMoviesArray}
      savedMoviesArray={savedMoviesArray}
    />
  ));

  return <div className="movie-list">{movieSections}</div>;
}
