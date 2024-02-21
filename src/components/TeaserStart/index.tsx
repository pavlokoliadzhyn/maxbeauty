import React from "react";
import {QuizType} from "../../types";
import teaserStartImage from "../../assets/quiz/teaser/teaser_start.png";
import "./TeaserStart.scss";

interface TeaserStartProps {
  questionItemData: QuizType;
}

export const TeaserStart: React.FC<TeaserStartProps> = ({questionItemData}) => {
  return (
    <>
      {questionItemData.data && (
        <div className="teaser-item start">
          {questionItemData.data.title && (
            <div className="title">{questionItemData.data.title}</div>
          )}
          {questionItemData.data.text && (
            <div className="text">{questionItemData.data.text}</div>
          )}
          {teaserStartImage && (
            <div className="image">
              <img src={teaserStartImage} alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
};
