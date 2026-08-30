import React from "react";

export default function useMovieSearch(movie) {
  const [movieArray, setMovieArray] = React.useState([]);
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchMovieIDs(movie) {
      const params = new URLSearchParams({ s: movie });

      try {
        const firstRes = await fetch(
          `https://www.omdbapi.com/?${params}&apikey=345a7391`,
        );

        if (!firstRes.ok) {
          throw new Error("Something went wrong!");
        }

        const searchData = await firstRes.json();

        console.log(searchData);

        if (searchData.Response === "True") {
          const newMovieArray = [];

          for (movie of searchData.Search) {
            const secondRes = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=345a7391`,
            );
            const secondSearchData = await secondRes.json();
            newMovieArray.push(secondSearchData);
          }

          setMovieArray(newMovieArray);

          // searchData.Search.forEach((movie) => {
          //   console.log(movie);
          //   fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=345a7391`)
          //     .then((res) => res.json())
          //     .then((data) => {
          //       setMovieArray((prev) => [...prev, data]);
          //       console.log(data);
          //     });
          // });
        } else {
          throw {
            response: searchData.Response,
            errorMessage: searchData.Error,
          };
        }
      } catch (err) {
        setError(err.errorMessage);
      } finally {
      }
    }

    movie && fetchMovieIDs(movie);
  }, [movie]);

  return { movieArray, error };
}
