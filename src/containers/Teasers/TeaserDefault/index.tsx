import React from "react";
import {QuizType} from "../../../types/general";
import "./style.scss";

interface TeaserDefaultProps {
  questionItemData: QuizType;
}

export const TeaserDefault: React.FC<TeaserDefaultProps> = ({
  questionItemData,
}) => {
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
