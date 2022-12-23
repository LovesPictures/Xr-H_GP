import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__section">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion__content">{content}</div>}
    </div>
  );
};

export default Accordion;
