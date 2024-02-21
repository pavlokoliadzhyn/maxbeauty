import React from "react";
import ageImage1 from "../../assets/quiz/age/age_1.png";
import ageImage2 from "../../assets/quiz/age/age_2.png";
import ageImage3 from "../../assets/quiz/age/age_3.png";
import ageImage4 from "../../assets/quiz/age/age_4.png";
import megaphoneImage from "../../assets/quiz/age/megaphone.png";
import {QuizType} from "../../types";
import "./Age.scss";

interface AgeItemProps {
  questionItemData: QuizType;
  onClickItem: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const AgeItem: React.FC<AgeItemProps> = ({
  questionItemData,
  onClickItem,
}) => {
  return (
    <>
      <div className="age-box">
        {questionItemData.data && (
          <div className="heading-box">
            <div className="action-text">
              <div className="icon">
                <img src={megaphoneImage} alt="" />
              </div>
              <span>Meet the new you in 16 weeks</span>
            </div>
            {questionItemData.data.title && (
              <div className="title">{questionItemData.data.title}</div>
            )}
            {questionItemData.data.text && (
              <div className="text">{questionItemData.data.text}</div>
            )}
          </div>
        )}

        <div className="age-list">
          <div className="age-item" onClick={onClickItem}>
            <div className="image">
              <img src={ageImage1} alt="" />
            </div>
            <div className="label">Age: 18-29 {">>"}</div>
          </div>
          <div className="age-item" onClick={onClickItem}>
            <div className="image">
              <img src={ageImage2} alt="" />
            </div>
            <div className="label">Age: 30-39 {">>"}</div>
          </div>
          <div className="age-item" onClick={onClickItem}>
            <div className="image">
              <img src={ageImage3} alt="" />
            </div>
            <div className="label">Age: 40-49 {">>"}</div>
          </div>
          <div className="age-item" onClick={onClickItem}>
            <div className="image">
              <img src={ageImage4} alt="" />
            </div>
            <div className="label">Age: 50+ {">>"}</div>
          </div>
        </div>
      </div>
    </>
  );
};
