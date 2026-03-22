import { useState } from "react";
import Page from "./Page";
import "./App.css";

const App = () => {
  const [pageId, setPage] = useState("portrait");

  const gotoPage = (id) => {
    setPage(id);
  };

  return (
    <div className="app-container">
      <Page pageId={pageId} gotoPage={gotoPage} />
    </div>
  );
};

export default App;
