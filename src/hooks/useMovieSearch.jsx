import React from "react";

export default function useMovieSearch(movie, filters) {
  const [movieArray, setMovieArray] = React.useState([]);
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  React.useEffect(() => {
    async function fetchMovieIDs(movie) {
      const params = new URLSearchParams({ s: movie, ...filters });
      const regex = /^tt\d+$/;
      const newMovieArray = [];

      try {
        setError(null);
        setMovieArray([]);
        setIsLoading(true);

        if (!regex.test(movie)) {
          const firstRes = await fetch(
            `https://www.omdbapi.com/?${params}&apikey=${API_KEY}`,
          );

          if (!firstRes.ok) {
            throw new Error("Something went wrong!");
          }

          const searchData = await firstRes.json();

          if (searchData.Response === "True") {
            for (const movie of searchData.Search) {
              const secondRes = await fetch(
                `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`,
              );
              const secondSearchData = await secondRes.json();
              newMovieArray.push(secondSearchData);
            }

            setMovieArray(newMovieArray);
          } else {
            setMovieArray([]);
            throw {
              response: searchData.Response,
              errorMessage: searchData.Error,
            };
          }
        } else {
          const res = await fetch(
            `https://www.omdbapi.com/?i=${movie}&apikey=${API_KEY}`,
          );

          if (!res.ok) {
            throw new Error("Something went wrong!");
          }

          const searchData = await res.json();

          setMovieArray(searchData);
        }
      } catch (err) {
        setError(
          err.errorMessage ??
            err.message ??
            "Something went wrong. Please try again.",
        );
      } finally {
        setIsLoading(false);
      }
    }

    movie && fetchMovieIDs(movie, filters);
  }, [movie, filters]);

  return { movieArray, error, isLoading };
}
