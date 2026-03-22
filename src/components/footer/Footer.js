import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>
        © {year} Buck Harris-All design, code, and photography by Buck Harris
      </span>
      <span>{"~"}</span>
      <a className="link" href="https://github.com/Marshy8/portfolio">
        GitHub
      </a>
      <span>|</span>
      <a
        className="link"
        href="https://github.com/Marshy8/portfolio/blob/main/LICENSE"
      >
        MIT License
      </a>
    </footer>
  );
};

export default Footer;
