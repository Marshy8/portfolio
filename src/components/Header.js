import "./Header.css";

const Header = ({ gotoSection, navRef, underlineRef }) => {
  return (
    <header className="header">
      <nav className="leftNav" ref={navRef}>
        <button data-nav onClick={() => gotoSection(0)}>
          Name
        </button>
        <button data-nav onClick={() => gotoSection(1)}>
          Biography
        </button>
        <button data-nav onClick={() => gotoSection(2)}>
          Projects
        </button>
        <button data-nav onClick={() => gotoSection(3)}>
          Contact
        </button>

        <span className="nav-underline" ref={underlineRef} />
      </nav>
    </header>
  );
};

export default Header;
