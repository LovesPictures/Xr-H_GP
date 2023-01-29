import * as React from "react";

import { HomePageCard } from "./HomePageCard";

import "./Home.css";

export const Home = () => {
  return (
    <div className="cardP">
      <HomePageCard
        ProjectName=<h1>Xr-H</h1>
        Developer="© Jude Ricketts"
        SubTitle="Futuring the city's past"
        City="Greater Brighton"
        ProjectYear="1562 - 2023"
        // Socials="@xx"
      />
    </div>
  );
};
