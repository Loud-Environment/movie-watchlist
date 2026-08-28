export function getSearchParams(setSearchedMovie, movie) {
  return (formData) => {
    const movieName = formData.get("search-input");
    setSearchedMovie(movieName);
  };
}
