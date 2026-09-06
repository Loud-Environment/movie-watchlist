import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const headerText =
    location.pathname === "/" ? "Find your film" : "My Watchlist";
  const linkText = location.pathname === "/" ? "My Watchlist" : "Search films";

  return (
    <header>
      <nav>
        <h1>{headerText}</h1>
        <NavLink to={location.pathname === "/" ? "/watchlist" : "/"}>
          {linkText}
        </NavLink>
      </nav>
    </header>
  );
}
