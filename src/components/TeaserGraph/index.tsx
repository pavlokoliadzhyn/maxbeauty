import React from "react";
import {QuizType} from "../../types";

interface QuestionItemProps {
  questionItemData: QuizType;
}

export const TeaserGraph: React.FC<QuestionItemProps> = ({
  questionItemData,
}) => {
  return (
    <>
      {questionItemData.data && (
        <div className="teaser-item graph">
          {questionItemData.data.title && (
            <div className="title">{questionItemData.data.title}</div>
          )}
          {questionItemData.data.text && (
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: questionItemData.data.text,
              }}
            ></div>
          )}
          {questionItemData.data.image && (
            <div className="image">
              <img src={questionItemData.data.image} alt="" />
            </div>
          )}
          {questionItemData.data.additionText && (
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: questionItemData.data.additionText,
              }}
            ></div>
          )}
        </div>
      )}
    </>
  );
};
