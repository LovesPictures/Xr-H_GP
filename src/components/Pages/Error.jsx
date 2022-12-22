import React from "react";
import { Link } from "react-router-dom";
// import "./Error.css";

export const Error = () => {
  return (
    <section className="Page__section">
      <h2 className="Page-header">404</h2>
      <p>Page not found </p>
      <Link to="/">back home</Link>
    </section>
  );
};
