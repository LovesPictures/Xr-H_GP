import React from "react";
import Accordion from "./Accordion";
import { AccordionData } from "./AccordionData";
import "./About.css";

export const About = () => {
  return (
    <main>
      <header className="main__header">
        <h2>FAQs</h2>
      </header>
      <div className="accordion">
        {AccordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </main>
  );
};

// export default About;
