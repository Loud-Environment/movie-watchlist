import React from "react";

export default function useMovieSearch(movie, filters) {
  const [movieArray, setMovieArray] = React.useState([]);
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  {
    /** 
    
    Что получилось: сделать черновые кнопки с фильтрами и передать их в хук, 
    он их успешно видит и выводит в консоль.

    Что не получилось:
     - Почему-то если Movie не меняется, но меняется filters, например type, 
     новый фетч не срабатывает
     - Не подцепил filters к фетчу, он пока только выводится в консоль
     - Не сделал нормальный дизайн для фильтров

    **/
  }

  React.useEffect(() => {
    async function fetchMovieIDs(movie) {
      const params = new URLSearchParams({ s: movie });
      console.log(filters);

      console.log(`https://www.omdbapi.com/?${params}&apikey=345a7391`);
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

    movie && fetchMovieIDs(movie, filters);
  }, [movie]);

  return { movieArray, error, isLoading };
}
