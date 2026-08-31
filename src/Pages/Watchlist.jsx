import React from "react";
import { MovieList } from "../Components/MovieList";
import Placeholder from "../Components/Placeholder";

export default function Watchlist() {
  const [savedMoviesArray, setSavedMoviesArray] = React.useState(
    JSON.parse(localStorage.getItem("watchlist") ?? "[]"),
  );

  return savedMoviesArray.length > 0 ? (
    <MovieList
      movieArray={savedMoviesArray}
      setSavedMoviesArray={setSavedMoviesArray}
    />
  ) : (
    <Placeholder origin="watchlist" />
  );
}
