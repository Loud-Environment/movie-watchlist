import React from "react";
import PlaceHolderImage from "../assets/placeholder-image.png";

export default function MovieSection({ movieObject }) {
  return (
    <section className="movie-section">
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
            <p>{movieObject.Runtime || "N/A"}</p>
            <p>{movieObject.Genre || "N/A"}</p>
          </div>
          <p>{movieObject.Plot || "N/A"}</p>
        </div>
      </div>
      <hr />
    </section>
  );
}
