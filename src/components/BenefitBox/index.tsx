import {benefitList} from "../../_schemes/benefit.list";
import "./benefitbox.scss";

export const BenefitBox = () => {
  return (
    <>
      <div className="benefit-box">
        <div className="benefit-list">
          <div className="heading-box">
            <div className="title">What you get with MaxBeauty</div>
          </div>
          {benefitList.map((item, index) => (
            <div className="benefit-item" key={index}>
              <div className="icon">{item.icon}</div>
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
