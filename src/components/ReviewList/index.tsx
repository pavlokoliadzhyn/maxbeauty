import {reviewList} from "../../data/review.list";
import {StarIcon} from "../Star";
import "./style.scss";

export const ReviewList = () => {
  return (
    <>
      <div className="review-box">
        <div className="heading-box">
          <div className="title">Users love our plans</div>
        </div>
        <div className="review-list">
          {reviewList.map((item, index) => (
            <div className="review-item" key={index}>
              <div className="review-info">
                <div className="title">{item.title}</div>
                <div className="date">{item.date}</div>
                <div className="stars">
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                </div>
                <div className="author">{item.author}</div>
              </div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
