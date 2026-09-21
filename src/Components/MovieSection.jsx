import React from "react";
import { Link } from "react-router-dom";
import PlaceHolderImage from "../assets/placeholder-image.png";
import { handleWatchListClick } from "../utils/helpers";

export default function MovieSection({
  movieObject,
  setSavedMoviesArray,
  savedMoviesArray,
}) {
  const isInWatchList = savedMoviesArray.some(
    (movie) => movieObject.imdbID === movie.imdbID,
  );

  return (
    <Link to={`/${movieObject.imdbID}`}>
      <section className="movie-section">
        <hr />
        <div className="wrapper">
          {movieObject.Poster ? (
            <img
              src={movieObject.Poster}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = PlaceHolderImage;
              }}
            />
          ) : null}
          <div className="movie-data">
            <div className="movie-title">
              <h4>{movieObject.Title || "N/A"}</h4>
              <p className="movie-rating">
                <i className="fa-solid fa-star"></i>
                {movieObject.Ratings[0]?.Value ?? "N/A"}
              </p>
            </div>
            <div className="movie-meta">
              <p className="movie-year">{movieObject.Year || "N/A"}</p>
              <p className="movie-genre">{movieObject.Genre || "N/A"}</p>
              <button
                className="add-to-watchlist-btn"
                onClick={() =>
                  handleWatchListClick(movieObject, setSavedMoviesArray)
                }
              >
                {!isInWatchList ? (
                  <>
                    <i className="fa-solid fa-circle-plus"></i> Watchlist
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-circle-minus"></i> Remove
                  </>
                )}
              </button>
            </div>
            <p className="movie-plot">{movieObject.Plot || "N/A"}</p>
          </div>
        </div>
      </section>
    </Link>
  );
}
