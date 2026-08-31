import React from "react";
import MovieSection from "./MovieSection";

export function MovieList({ movieArray, setSavedMoviesArray }) {
  const movieSections = movieArray.map((movieObject) => (
    <MovieSection
      movieObject={movieObject}
      key={movieObject.imdbID}
      setSavedMoviesArray={setSavedMoviesArray}
    />
  ));

  return <div>{movieSections}</div>;
}
