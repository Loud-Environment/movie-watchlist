import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const headerText =
    location.pathname === "/"
      ? "Find your film"
      : location.pathname === "/"
        ? "My Watchlist"
        : "Search films";
  const linkText =
    location.pathname === "/"
      ? "My Watchlist"
      : location.pathname === "/"
        ? "Search films"
        : "My Watchlist";

  return (
    <header>
      <nav>
        <NavLink to={"/"}>
          <h1>{headerText}</h1>
        </NavLink>
        <NavLink to={location.pathname === "/" ? "/watchlist" : "/"}>
          {linkText}
        </NavLink>
      </nav>
    </header>
  );
}
