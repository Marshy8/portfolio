import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import pages from "./pages";
import "./Page.css";

const Page = ({ pageId, gotoPage }) => {
  const page = pages.find((p) => p.id === pageId);
  if (!page) return null;

  const PageContent = page.component;

  return (
    <div
      className="page"
      style={{ backgroundImage: `url(${page.background})` }}
    >
      <Header activePage={pageId} gotoPage={gotoPage} />
      <Content>
        <PageContent />
      </Content>
      <Footer />
    </div>
  );
};

export default Page;
