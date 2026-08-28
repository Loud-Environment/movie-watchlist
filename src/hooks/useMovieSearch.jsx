import React from "react";

export default function useMovieSearch(movie) {
  const [movieArray, setMovieArray] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovieIDs(movie) {
      const params = new URLSearchParams({ s: movie });
      console.log(`https://www.omdbapi.com/?${params}&apikey=345a7391`);

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
          searchData.Search.forEach((movie) => {
            fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=345a7391`)
              .then((res) => res.json())
              .then((data) => {
                setMovieArray((prev) => [...data]);
                console.log(movieArray);
              });
          });
        }
      } catch {
      } finally {
      }
    }

    movie && fetchMovieIDs(movie);
  }, [movie]);

  return { movieArray };
}
