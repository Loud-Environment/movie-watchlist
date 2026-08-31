export function getSearchParams(setMovie, movie) {
  return (formData) => {
    setMovie([]);
    const movieName = formData.get("search-input");
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
  } else if (isAlreadySaved) {
    const updatedMovieArray = saved.filter(
      (movie) => movieObject.imdbID !== movie.imdbID,
    );
    localStorage.setItem("watchlist", JSON.stringify(updatedMovieArray));
    setSavedMoviesArray(updatedMovieArray);
  }
}
