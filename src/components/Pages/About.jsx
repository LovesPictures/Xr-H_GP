import React from "react";
import Accordion from "./Accordion";
import { AccordionData } from "./AccordionData";

import "./About.css";

export const About = () => {
  return (
    <main className="main__body-about">
      <header className="main__about-header">
        <h2>About</h2>
      </header>
      <div className="accordion">
        {AccordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </main>
  );
};
