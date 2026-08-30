export function getSearchParams(setMovie, movie) {
  return (formData) => {
    setMovie([]);
    const movieName = formData.get("search-input");
    setMovie(movieName);
  };
}
