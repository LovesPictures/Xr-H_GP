import React from "react";
import Logo from "../img/JohnHawkynsCrest_02.png";

import QR from "../img/QR.png";
import "./MapContactCard.css";

export const MapContactCard = (props) => {
  return (
    <div>
      <div className="Map"> {props.Map}</div>
      <div className="Card__text-container">
        <div className="Card__logo">
          <img src={Logo} alt="#" />
        </div>

        <h2 className="Card__text-projectName">{props.ProjectName}</h2>
        <p className="Card__text-city">{props.City}</p>
        <p className="Card__text-projectYear">{props.ProjectYear}</p>
        <p className="Card__text-Socials">{props.Socials}</p>

        <div className="Card__QR">
          <img src={QR} alt="#" />
        </div>
        <p className="Card__text-developer">{props.Developer}</p>
      </div>

      {/* <p className="Card__start-button">{props.Developer}</p> */}
    </div>
  );
};
