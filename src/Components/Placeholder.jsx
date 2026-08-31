import React from "react";
import { Link } from "react-router-dom";

export default function Placeholder({ origin }) {
  return origin === "home" ? (
    <section className="placeholder">
      <i className="fa-solid fa-film"></i>{" "}
      {/** Вот это ^ надо поменять на нормальную реактовскую иконку **/}
      <h2>Start exploring</h2>
    </section>
  ) : origin === "watchlist" ? (
    <div className="wrapper placeholder-container">
      <section className="placeholder">
        <h2>Your watchlist is looking a little empty...</h2>
        <Link to="/" className="main-anchor">
          <i className="fa-solid fa-circle-plus"></i>Let’s add some movies!
        </Link>
      </section>
    </div>
  ) : null;
}
