import React from "react";
import {QuizType} from "../../types";

interface QuestionItemProps {
  questionItemData: QuizType;
}

export const TeaserFacts: React.FC<QuestionItemProps> = ({
  questionItemData,
}) => {
  return (
    <>
      {questionItemData.data && (
        <div className="teaser-item facts">
          {questionItemData.data.title && (
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: questionItemData.data.title,
              }}
            ></div>
          )}
          {questionItemData.data.image && (
            <div className="image">
              <img src={questionItemData.data.image} alt="" />
            </div>
          )}
          {questionItemData.data.text && (
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: questionItemData.data.text,
              }}
            ></div>
          )}
        </div>
      )}
    </>
  );
};
