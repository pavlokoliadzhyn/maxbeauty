import imageLogo1 from "../../assets/checkout/logo/logo1.png";
import imageLogo2 from "../../assets/checkout/logo/logo2.png";
import imageLogo3 from "../../assets/checkout/logo/logo3.png";
import imageLogo4 from "../../assets/checkout/logo/logo4.png";
import imageLogo5 from "../../assets/checkout/logo/logo5.png";
import "./style.scss";

export const FeaturedBox = () => {
  return (
    <>
      <div className="featured-box">
        <div className="logo-box">
          <div className="heading-box">
            <div className="title">We are featured in:</div>
          </div>
          <div className="logo-list">
            <div className="logo-item">
              <img src={imageLogo1} alt="" />
            </div>
            <div className="logo-item">
              <img src={imageLogo2} alt="" />
            </div>
            <div className="logo-item">
              <img src={imageLogo3} alt="" />
            </div>
            <div className="logo-item">
              <img src={imageLogo4} alt="" />
            </div>
            <div className="logo-item">
              <img src={imageLogo5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
