import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MapIcon from "@material-ui/icons/Map";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
// import CollectionsIcon from "@material-ui/icons/Gallery";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

// import icons from icons
// import Icons from "../img/Icons";

import "./Navbar.css";
// import { Icon } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav className="Primary__navbar">
      <ul>
        <li className="Primary__navbar-link">
          {/* <img className="Home__Icon" src={Icons.iconHome} alt="Home" /> */}
          <Link to="/">
            <HomeIcon alt="Home" />
          </Link>

          <Link to="/about">
            <PersonIcon alt="About" />
          </Link>

          <Link to="/mapData">
            <MapIcon alt="Map data" />
          </Link>

          <Link to="/posters">
            <BubbleChartIcon alt="Digital Posters" />
          </Link>

          <Link to="/Gallery">
            <CollectionsBookmark alt="Collections" />
          </Link>

          <Link to="/contact">
            <AlternateEmailIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
