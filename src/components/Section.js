import { forwardRef } from "react";
import "./Section.css";

const Section = forwardRef(({ id, title, filePath, children }, ref) => (
  <section ref={ref} id={id} className="section">
    <div className="wrapper-outer">
      <div className="wrapper-inner">
        <div
          className="background"
          style={{ backgroundImage: `url(${filePath})` }}
        >
          <h1 className="label">{title}</h1>
        </div>
      </div>
      {children}
    </div>
  </section>
));

export default Section;
