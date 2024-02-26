import React from "react";
import {QuizType} from "../../../types/general";
import "./style.scss";

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
          {questionItemData.data.image && (
            <div className="image">
              <img src={questionItemData.data.image} alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
};
