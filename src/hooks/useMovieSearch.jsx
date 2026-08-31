import React from "react";

export default function useMovieSearch(movie) {
  const [movieArray, setMovieArray] = React.useState([]);
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchMovieIDs(movie) {
      const params = new URLSearchParams({ s: movie, page: 1 });

      try {
        setError(null);
        setMovieArray([]);
        setIsLoading(true);
        const firstRes = await fetch(
          `https://www.omdbapi.com/?${params}&apikey=345a7391`,
        );

        if (!firstRes.ok) {
          throw new Error("Something went wrong!");
        }

        const searchData = await firstRes.json();

        if (searchData.Response === "True") {
          const newMovieArray = [];

          for (const movie of searchData.Search) {
            const secondRes = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=345a7391`,
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
      } catch (err) {
        setError(err.errorMessage);
      } finally {
        setIsLoading(false);
      }
    }

    movie && fetchMovieIDs(movie);
  }, [movie]);

  return { movieArray, error, isLoading };
}
