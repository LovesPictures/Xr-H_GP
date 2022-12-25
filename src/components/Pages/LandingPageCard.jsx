import React from "react";
import Logo from "../img/JohnHawkynsCrest_02.png";

import QR from "../img/QR.png";

export const LandingPageCard = (props) => {
  return (
    <div>
      <div className="Card__text-container">
        <div className="Card__logo">
          <img src={Logo} alt="John Hawkyns Crest" />
        </div>

        <h2 className="Card__text-projectName">{props.ProjectName}</h2>
        <p className="Card__text-city">{props.City}</p>
        <p className="Card__text-city">{props.SubTitle}</p>
        <p className="Card__text-projectYear">{props.ProjectYear}</p>
        <p className="Card__text-Socials">{props.Socials}</p>

        <div className="Card__QR">
          <img src={QR} alt="Project qr code" />
        </div>

        <p className="Card__text-developer">{props.Developer}</p>
      </div>
    </div>
  );
};
