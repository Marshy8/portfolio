import React from "react";
import Section from "./Section";
import "./Projects.css";

const Projects = React.forwardRef((props, ref) => {
  return (
    <Section
      ref={ref}
      id="projects"
      title="Projects"
      filePath={process.env.PUBLIC_URL + "/images/background_3.JPG"}
    >
      <div className="projects-content">
        <div className="project-card project-left">
          <a
            href="https://github.com/SeniorDesign2023/PHaSTphoto.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-header"
          >
            PHaSTphoto
          </a>

          <div className="mobile-fallback">
            <p>Best viewed on a larger screen or computer</p>
            <a
              href="https://github.com/SeniorDesign2023/PHaSTphoto.git"
              target="_blank"
              rel="noopener noreferrer"
              className="fallback-link"
            >
              Open PHaSTphoto on GitHub →
            </a>
          </div>

          <iframe
            src={process.env.PUBLIC_URL + "/phastphoto/index.html"}
            title="PHaSTphoto Demo"
            allowFullScreen
            className="project-iframe"
          />
        </div>

        <div className="project-card project-right">
          <a
            href="https://www.lexaloffle.com/bbs/?tid=149519"
            target="_blank"
            rel="noopener noreferrer"
            className="project-header"
          >
            Cell Seekers
          </a>

          <div className="mobile-fallback">
            <p>Best viewed on a larger screen or computer</p>
            <a
              href="https://www.lexaloffle.com/bbs/?tid=149519"
              target="_blank"
              rel="noopener noreferrer"
              className="fallback-link"
            >
              Play Cell Seekers →
            </a>
          </div>

          <iframe
            src={process.env.PUBLIC_URL + "/game/cellseekers.html"}
            title="Cell Seekers PICO-8 Game"
            allowFullScreen
            className="project-iframe"
          />
        </div>
      </div>
    </Section>
  );
});

export default Projects;
