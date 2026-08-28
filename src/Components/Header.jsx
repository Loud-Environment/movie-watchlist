import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="site-logo" to="/">
          Find your film
        </Link>
        <NavLink to="/watchlist">My Watchlist</NavLink>
      </nav>
    </header>
  );
}
