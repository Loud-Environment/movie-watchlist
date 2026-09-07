export function getSearchParams(setMovie, setFilters) {
  return (formData) => {
    setMovie([]);
    const movieYear = formData.get("movie-year");
    const movieType = formData.get("movie-type");
    const movieName = formData.get("search-input");
    setFilters((prev) => {
      return {
        ...prev,
        y: movieYear ? movieYear : "",
        type: movieType ? movieType : "",
      };
    });
    setMovie(movieName);
  };
}

export function handleWatchListClick(movieObject, setSavedMoviesArray) {
  const saved = JSON.parse(localStorage.getItem("watchlist") ?? "[]");
  const isAlreadySaved = saved.some(
    (movie) => movieObject.imdbID === movie.imdbID,
  );
  if (!isAlreadySaved) {
    saved.push(movieObject);
    localStorage.setItem("watchlist", JSON.stringify(saved));
    setSavedMoviesArray(saved);
  } else if (isAlreadySaved) {
    const updatedMovieArray = saved.filter(
      (movie) => movieObject.imdbID !== movie.imdbID,
    );
    localStorage.setItem("watchlist", JSON.stringify(updatedMovieArray));
    setSavedMoviesArray(updatedMovieArray);
  }
}
