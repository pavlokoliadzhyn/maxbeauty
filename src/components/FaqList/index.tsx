import {faqList} from "../../_schemes/faq.list";
import "./faqlist.scss";

export const FaqList = () => {
  return (
    <>
      <div className="faq-box">
        <div className="heading-box">
          <div className="title">We are ready to answer your questions</div>
        </div>
        <div className="faq-list">
          {faqList.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-title">{item.title}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
