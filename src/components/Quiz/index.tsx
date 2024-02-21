import React from "react";
import {QuizType} from "../../types";
import "./QuizItem.scss";

interface QuestionItemProps {
  questionItemData: QuizType;
  onClickItem: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const QuizItem: React.FC<QuestionItemProps> = ({
  questionItemData,
  onClickItem,
}) => {
  return (
    <>
      <div className="quiz-item">
        <div className="question">
          {questionItemData.question && (
            <div
              className="title"
              dangerouslySetInnerHTML={{__html: questionItemData.question}}
            ></div>
          )}
          {questionItemData.description && (
            <div
              className="description"
              dangerouslySetInnerHTML={{__html: questionItemData.description}}
            ></div>
          )}
          {questionItemData.subDescription && (
            <div className="sub-description">
              <span
                dangerouslySetInnerHTML={{
                  __html: questionItemData.subDescription,
                }}
              ></span>
            </div>
          )}
        </div>
        <div className="answers-list">
          {questionItemData.answers &&
            questionItemData.answers.map((item, index) => (
              <div className="item" key={index} onClick={onClickItem}>
                {item.icon && (
                  <span className="icon">
                    {item.imageUrl ? <img src={item.icon} alt="" /> : item.icon}
                  </span>
                )}
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                ></span>
              </div>
            ))}
        </div>
        {questionItemData.info && (
          <div className="quiz-info">
            <span className="icon">
              {questionItemData.info.imageUrl ? (
                <img src={questionItemData.info.icon} alt="" />
              ) : (
                questionItemData.info.icon
              )}
            </span>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: questionItemData.info.text,
              }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
};
