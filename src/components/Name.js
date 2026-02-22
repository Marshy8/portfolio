import React from "react";
import Section from "./Section";
import "./Name.css";

const Name = React.forwardRef((props, ref) => {
  return (
    <Section
      ref={ref}
      id="name"
      title="Buck Harris"
      filePath={process.env.PUBLIC_URL + "/images/background_1.JPG"}
    >
      <img className="portrait" src="/images/portrait.JPG" alt="Portrait" />
    </Section>
  );
});

export default Name;
