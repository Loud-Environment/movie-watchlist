import React from "react";
import { useParams } from "react-router-dom";
import useMovieSearch from "../hooks/useMovieSearch";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const { movieArray, error, isLoading } = useMovieSearch(id);
  const genres = movieArray.Genre ? movieArray.Genre.split(",") : [];
  const genreList = genres.map((genre) => <span key={genre}>{genre},</span>);

  console.log(genres);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="movie-details-page">
      <div className="wrapper">
        <article className="movie-details">
          <img
            className="movie-details__poster"
            src={movieArray.Poster}
            alt={`Poster for ${movieArray.Title}`}
          />

          <div className="movie-details__title">
            <h1>{movieArray.Title}</h1>
            <div className="movie-details__ratings">
              <span>IMDb</span>
              <strong>{movieArray.imdbRating}</strong>
              <span>({movieArray.imdbVotes} votes)</span>
            </div>

            <div className="movie-details__ratings">
              <span>Metascore</span>
              <strong>{movieArray.Metascore}</strong>
            </div>
          </div>

          <div className="movie-details__meta">
            <span className="movie-details__meta-year">{movieArray.Year},</span>
            <span>Rating: {movieArray.Rated},</span>
            {genreList}
            <span>{movieArray.Runtime}</span>
          </div>

          <p className="movie-details__plot">{movieArray.Plot}</p>

          <div className="movie-details__credits-wrapper">
            <dl className="movie-details__credits">
              <div>
                <dt>Director</dt>
                <dd>{movieArray.Director}</dd>
              </div>

              <div>
                <dt>Writers</dt>
                <dd>{movieArray.Writer}</dd>
              </div>

              <div>
                <dt>Actors</dt>
                <dd>{movieArray.Actors}</dd>
              </div>

              <div>
                <dt>Language</dt>
                <dd>{movieArray.Language}</dd>
              </div>

              <div>
                <dt>Country</dt>
                <dd>{movieArray.Country}</dd>
              </div>
            </dl>
          </div>

          <section className="movie-details__additional">
            <h2>Additional information</h2>

            <dl className="movie-details__additional-list">
              <div>
                <dt>Released</dt>
                <dd>{movieArray.Released}</dd>
              </div>

              <div>
                <dt>Awards</dt>
                <dd>{movieArray.Awards}</dd>
              </div>

              <div>
                <dt>Box Office</dt>
                <dd>{movieArray.BoxOffice}</dd>
              </div>

              <div>
                <dt>Production</dt>
                <dd>{movieArray.Production}</dd>
              </div>

              <div>
                <dt>DVD</dt>
                <dd>{movieArray.DVD}</dd>
              </div>

              <div>
                <dt>Website</dt>
                <dd>{movieArray.Website}</dd>
              </div>
            </dl>
          </section>
        </article>
      </div>
    </div>
  );
}
