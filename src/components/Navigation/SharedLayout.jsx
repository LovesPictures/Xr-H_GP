// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// import { Typography } from "@material-ui/core";
import "./Navbar.css";

export const SharedLayout = () => {
  return (
    <>
      {/* An <Outlet> should be used in parent route elements to render their child route elements = shared components cross the layout  */}
      <Outlet />
      {/* position navigation */}
      <Navbar />
    </>
  );
};
