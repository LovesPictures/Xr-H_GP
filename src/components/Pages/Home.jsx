import * as React from "react";

import { MapContactCard } from "./MapContactCard";

import "./Home.css";

export const Home = () => {
  return (
    <div className="Grid__container-b">
      <div className="cardP">
        <MapContactCard
          ProjectName="Xr-H"
          Developer="© Jude Ricketts"
          SubTitle="Futuring the city's past"
          City="Greater Brighton"
          ProjectYear="2023"
          Socials="@xxx"
        />
      </div>
    </div>
  );
};
