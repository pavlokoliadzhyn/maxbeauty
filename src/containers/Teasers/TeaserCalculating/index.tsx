import React from "react";
import {QuizType} from "../../../types/general";
import "./style.scss";

interface TeaserCalculatingProps {
  questionItemData: QuizType;
}

export const TeaserCalculating: React.FC<TeaserCalculatingProps> = ({
  questionItemData,
}) => {
  return (
    <>
      {questionItemData.data && (
        <div className="teaser-item calculating">
          <div className="circle-box">
            <div className="percentage">100%</div>
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
          </div>
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
