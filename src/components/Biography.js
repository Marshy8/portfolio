import React from "react";
import Section from "./Section.js";
import "./Biography.css";

const Biography = React.forwardRef((props, ref) => {
  return (
    <Section
      ref={ref}
      id="biography"
      title="Biography"
      filePath={process.env.PUBLIC_URL + "/images/background_2.JPG"}
    >
      <label className="text">
        My name is Buck Harris. I was born and raised in Casper, Wyoming, where
        I completed my primary education in the local public school system. I
        earned the Trustees Scholarship, a full-ride award to the University of
        Wyoming. At the University of Wyoming, I pursued a Bachelor of Science
        in Computer Science, along with a minor in Mathematics and a certificate
        in Cybersecurity. I graduated near the top of my class with a 3.935 GPA
        and was honored Cum Laude. I am now 23 years old and eager to continue
        developing my skills and building a professional career in the field of
        computer science. Outside of academics and work, I enjoy fly fishing,
        riding my sport bike, and spending time with loved ones. I am a hard
        worker, a quick learner, and ready to take on any challenge.
      </label>
    </Section>
  );
});

export default Biography;
