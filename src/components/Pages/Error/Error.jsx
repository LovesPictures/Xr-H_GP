import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/JohnHawkynsCrest.png";
import "./Error.css";

export const Error = () => {
  return (
    <main className="main__body-error">
      <header className="main__error-header">
        <div className="card__logo-error">
          <img src={Logo} alt="John Hawkins (Hawkyns) Crest" />
        </div>
        <h2 className="main__header-text"> 404</h2>
        <p className="main__body-text">Page not found </p>
      </header>

      <Link className="main__error-link" to="/">
        back home
      </Link>
    </main>
  );
};
