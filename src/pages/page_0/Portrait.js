import "./Portrait.css";

const Portrait = () => {
  return (
    <div className="portrait-content">
      <h1 className="portrait-title">Buck Harris</h1>
      <img className="portrait" src="/images/portrait.JPG" alt="Portrait" />
    </div>
  );
};

const portraitModual = {
  id: "portrait",
  label: "Portrait",
  background: "/images/background_portrait.JPG",
  component: Portrait,
};

export default portraitModual;
