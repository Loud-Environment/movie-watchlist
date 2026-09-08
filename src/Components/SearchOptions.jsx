import React from "react";

export default function SearchOptions() {
  return (
    <div className="search-filters">
      <div>
        <label htmlFor="movie-type">Movie type</label>
        <select id="movie-type" name="movie-type">
          <option value="">--any--</option>
          <option value="Movie">Movie</option>
          <option value="Series">Series</option>
          <option value="Episode">Episode</option>
        </select>
      </div>
      <div>
        <label htmlFor="movie-year">Movie year</label>
        <input
          type="number"
          id="movie-year"
          name="movie-year"
          placeholder="e.g. 1997"
          min="1888"
          max="9999"
        ></input>
      </div>
    </div>
  );
}
