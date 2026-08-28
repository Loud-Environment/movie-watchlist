import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main id="main">
        <Outlet />
      </main>
    </div>
  );
}
