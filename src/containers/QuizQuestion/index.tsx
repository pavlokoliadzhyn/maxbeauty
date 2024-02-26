import React from "react";
import {QuizType} from "../../types/general";
import "./style.scss";

interface QuizQuestionProps {
  questionItemData: QuizType;
  onClickAnswer: (
    event: React.MouseEvent<HTMLDivElement>,
    answerType: string | undefined
  ) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  questionItemData,
  onClickAnswer,
}) => {
  const questionType = questionItemData.type || "radio";
  const questionIndex = questionItemData.index;

  return (
    <>
      <div className="quiz-item" key={"quiz-" + questionItemData.index}>
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
              <div
                className="item"
                key={questionIndex + "-" + index}
                onClick={(event) => onClickAnswer(event, questionType)}
              >
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
                <span className="check-icon">
                  <svg viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M16.906 6.374a1.193 1.193 0 0 1 1.735 0c.479.499.479 1.307 0 1.806l-8.107 8.446a1.2 1.2 0 0 1-.867.374 1.2 1.2 0 0 1-.868-.374l-3.44-3.557a1.314 1.314 0 0 1 0-1.806 1.193 1.193 0 0 1 1.735 0l2.573 2.654 7.239-7.543Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
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
