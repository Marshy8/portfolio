import { useState, useEffect } from "react";
import "./Projects.css";
import projectsData from "./projectsData.json";

const Projects = () => {
  const [windowAspectRatio, setRatio] = useState(
    window.innerWidth / window.innerHeight,
  );

  useEffect(() => {
    const handleResize = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardRatios = projectsData.map(({ aspectRatio }) => Number(aspectRatio));
  const maxRatio = Math.max(...cardRatios);
  const minRatio = Math.min(...cardRatios);
  const mult = 27.5;

  const getCardDimension = (dimension, aspectRatio) => {
    switch (dimension) {
      case "w": {
        if (windowAspectRatio >= 1) {
          return `${minRatio * mult * aspectRatio}vw`;
        } else {
          return "auto";
        }
      }
      case "h": {
        if (windowAspectRatio < 1) {
          return `${(maxRatio * mult) / aspectRatio}vh`;
        } else {
          return "auto";
        }
      }
      default:
        return 0;
    }
  };

  return (
    <div className="project-content">
      {projectsData.map(({ id, title, link, iframeSrc, aspectRatio }) => (
        <div key={id} className="project-card">
          <a href={link} className="card-header">
            {title}
          </a>
          <iframe
            src={process.env.PUBLIC_URL + iframeSrc}
            title={title + " demo"}
            className="card-iframe"
            style={{
              aspectRatio,
              width: getCardDimension("w", Number(aspectRatio)),
              height: getCardDimension("h", Number(aspectRatio)),
            }}
          />
        </div>
      ))}
      <div className="size-fallback">
        <p>
          Best viewed on a larger screen. Click header to view project source.
        </p>
      </div>
    </div>
  );
};

const projectsModual = {
  id: "projects",
  label: "Projects",
  background: "/images/background_projects.JPG",
  component: Projects,
};

export default projectsModual;
