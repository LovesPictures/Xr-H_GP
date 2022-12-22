import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Person";

import PersonIcon from "@material-ui/icons/Person";
// import FaceIcon from "@material-ui/icons/Face";
import MapIcon from "@material-ui/icons/Map";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
// import CollectionsIcon from "@material-ui/icons/Collections";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
// import MenuIcon from '@material-ui/icons/icons-material/Menu';

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Primary__navbar">
      <ul>
        <li className="Primary__navbar-link">
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
          {/* <Link to="/posters">
            <CollectionsIcon alt="Digital Posters" />
          </Link> */}
          {/* <Link to="/gallery">Gallery</Link> */}
          <Link to="/contact">
            <AlternateEmailIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
