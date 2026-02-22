import React from "react";
import Section from "./Section";
import "./Projects.css";

const Projects = React.forwardRef((props, ref) => {
  return (
    <Section
      ref={ref}
      id="projects"
      title="Projects"
      filePath="/images/background_3.JPG"
    >
      <div className="projects-content">
        {/* PHASTPHOTO PROJECT */}
        <div className="project-left">
          <a
            href="https://github.com/SeniorDesign2023/PHaSTphoto.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-header"
          >
            PHaSTphoto
          </a>
          <iframe src="/phastphoto/index.html" title="PHASTPHOTO" />
        </div>

        {/* Local PICO-8 Game */}
        <div className="project-right">
          <a
            href="https://www.lexaloffle.com/bbs/?tid=149519"
            target="_blank"
            rel="noopener noreferrer"
            className="project-header"
          >
            Cell Seekers
          </a>
          <iframe
            src="/game/cellseekers.html"
            title="Cell Seekers"
            allowFullScreen
            className="game-frame"
          />
        </div>
      </div>
    </Section>
  );
});

export default Projects;
