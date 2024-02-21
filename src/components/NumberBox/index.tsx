import {numberList} from "../../_schemes/number.list";
import imageNumberBox from "../../assets/checkout/number.png";
import "./numberbox.scss";

export const NumberBox = () => {
  return (
    <>
      <div className="number-box">
        <div className="heading-box">
          <div className="title">
            People just like you achieved great skin, hair & body improvements
            using our <span>Anti-Aging Plan</span>
          </div>
        </div>
        <div className="image">
          <img src={imageNumberBox} alt="" />
        </div>
        <div className="number-list">
          {numberList.map((item, index) => (
            <div className="number-item" key={index}>
              <div className="number">{item.number}</div>
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: item.text,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
