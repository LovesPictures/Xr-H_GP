import React from "react";
import { Link } from "react-router-dom";

// import icons from icons
import Icons from "../img/Icons";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Primary__navbar">
      <ul>
        <li className="Primary__navbar-link">
          <Link to="/">
            <img className="Nav__icon" src={Icons.iconHome} alt="Home icon" />
          </Link>

          <Link to="/about">
            <img
              className="Nav__icon"
              src={Icons.iconPerson}
              alt="Person icon"
            />
          </Link>

          <Link to="/mapData">
            <img className="Nav__icon" src={Icons.iconMap} alt="Map icon" />
          </Link>

          {/* <Link to="/locations">
            <img className="Nav__icon" src={Icons.iconEye} alt="Eye icon" />
          </Link> */}

          <Link to="/Gallery">
            <img
              className="Nav__icon"
              src={Icons.iconCircles}
              alt="circles icon"
            />
          </Link>

          <Link to="/contact">
            <img
              className="Nav__icon"
              src={Icons.iconEmail}
              alt="Gallery icon"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
