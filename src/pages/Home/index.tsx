import UrlLinkButton from "../../components/Button/UrlLink";
import startImage from "../../assets/home/startImage.png";
import "./home.scss";

export const HomePage = () => {
  return (
    <>
      <div className="main-box">
        <div className="container">
          <div className="image">
            <img src={startImage} alt="" />
          </div>
          <h1>
            Beat aging and feel confident with your
            <br />
            <strong>Personal Beauty Plan</strong>
          </h1>
          <p>To start, please select your goal:</p>
          <div className="button-list">
            <UrlLinkButton
              linkUrl="/quiz"
              linkText="Looking younger"
            ></UrlLinkButton>
            <UrlLinkButton
              linkUrl="/quiz"
              linkText="Glowing skin"
            ></UrlLinkButton>
          </div>
        </div>
      </div>
    </>
  );
};
