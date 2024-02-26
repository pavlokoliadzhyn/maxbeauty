import React from "react";
import {QuizType} from "../../../types/general";

interface TeaserFinalStepProps {
  questionItemData: QuizType;
}

export const TeaserFinalStep: React.FC<TeaserFinalStepProps> = ({
  questionItemData,
}) => {
  return (
    <>
      {questionItemData.data && (
        <div className="teaser-item final-step">
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
          {questionItemData.data.graphTitle && (
            <div className="graph-title">
              {questionItemData.data.graphTitle}
            </div>
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
