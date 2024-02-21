import React from "react";
import {QuizType} from "../../types";
import "./Teaser.scss";

interface QuestionItemProps {
  questionItemData: QuizType;
}

export const TeaserItem: React.FC<QuestionItemProps> = ({questionItemData}) => {
  return (
    <>
      {questionItemData.data && (
        <div className="teaser-item">
          {questionItemData.data.image && (
            <div className="image">
              <img src={questionItemData.data.image} alt="" />
            </div>
          )}
          {questionItemData.data.title && (
            <div className="title">{questionItemData.data.title}</div>
          )}
          {questionItemData.data.text && (
            <div className="text">{questionItemData.data.text}</div>
          )}
        </div>
      )}
    </>
  );
};
