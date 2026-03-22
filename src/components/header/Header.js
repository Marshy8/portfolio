import "./Header.css";
import pages from "../../pages";

const Header = ({ activePage, gotoPage }) => {
  return (
    <header className="header">
      {pages.map((page) => (
        <button
          key={page.id}
          className={activePage === page.id ? "active" : ""}
          onClick={() => gotoPage(page.id)}
        >
          {page.label}
        </button>
      ))}
    </header>
  );
};

export default Header;
