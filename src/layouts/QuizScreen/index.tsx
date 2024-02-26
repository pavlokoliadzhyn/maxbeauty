import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {quizList} from "../../data/quiz.list";
import {AppHeader, AppFooter, AppHeaderQuiz} from "../../containers";
import {QuizQuestion} from "../../containers/QuizQuestion";
import {AgeQuestion} from "../../containers";
import {
  TeaserDefault,
  TeaserStart,
  TeaserGraph,
  TeaserFacts,
  TeaserFinish,
  TeaserCalculating,
  TeaserFinalStep,
} from "../../containers/Teasers/";

import {ContinueButton} from "../../components/Button/ContinueButton";
import {ProgressBar} from "../../components";

import "./style.scss";

export const QuizScreen = () => {
  const navigate = useNavigate();

  //const totalScreenCount = quizList.length;
  const totalQuizCount = quizList.filter((item) => item.name === "Quiz").length;
  const [stepQuiz, setStepQuiz] = useState<number>(0);
  const [questionStepNumber, setQuestionStepNumber] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(
    (questionStepNumber / totalQuizCount) * 100
  );
  const quizName = quizList[stepQuiz].name;
  const questionItem = quizList[stepQuiz];

  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextQuizStep = () => {
    setTimeout(() => {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      setStepQuiz(stepQuiz + 1);
      if (quizName === "Quiz") {
        setCurrentStep(currentStep + 1);
      }
      setQuestionStepNumber(questionStepNumber + 1);
      setProgressBarWidth(((questionStepNumber + 1) / totalQuizCount) * 100);
    }, 500);
  };

  const prevQuizStep = () => {
    if (stepQuiz == 0) return;
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    setTimeout(() => {
      setStepQuiz(stepQuiz - 1);
      if (quizName === "Quiz" && currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    }, 500);

    setQuestionStepNumber(questionStepNumber - 1);
    setProgressBarWidth(((questionStepNumber - 1) / totalQuizCount) * 100);
  };

  const onClickAnswer = (
    event: React.MouseEvent<HTMLDivElement>,
    answerType: string
  ) => {
    if (answerType === "radio") {
      const parentElement = event.currentTarget.parentElement;

      if (parentElement) {
        parentElement.querySelectorAll(".item").forEach((item) => {
          item.classList.remove("active");
        });

        event.currentTarget.classList.add("active");
        nextQuizStep();
      }
    } else {
      event.currentTarget.classList.add("active");
    }
  };

  const onClickButton = () => {
    nextQuizStep();
  };

  const onBackClick = () => {
    prevQuizStep();
  };

  const onClickNextScreen = () => {
    navigate("/result", {replace: true});
  };

  switch (quizName) {
    case "Quiz":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            currentStep={currentStep}
            totalQuestions={totalQuizCount}
            quizName={quizName}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <QuizQuestion
                questionItemData={questionItem}
                onClickAnswer={(event) =>
                  onClickAnswer(event, questionItem.type || "radio")
                }
              ></QuizQuestion>
            </div>
          </div>
          {questionItem.isHideBtnNextScreen && (
            <ContinueButton
              buttonText="Next"
              onClickItem={onClickButton}
            ></ContinueButton>
          )}
        </>
      );
    case "Teaser":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            currentStep={currentStep}
            totalQuestions={totalQuizCount}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <TeaserDefault questionItemData={questionItem}></TeaserDefault>
            </div>
          </div>
          <ContinueButton
            buttonText="Continue"
            onClickItem={onClickButton}
          ></ContinueButton>
        </>
      );
    case "Age":
      return (
        <>
          <AppHeader></AppHeader>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <AgeQuestion
                questionItemData={questionItem}
                onClickItem={onClickButton}
              ></AgeQuestion>
            </div>
          </div>
          <AppFooter></AppFooter>
        </>
      );
    case "TeaserStart":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            totalQuestions={totalQuizCount}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <TeaserStart questionItemData={questionItem}></TeaserStart>
              <ContinueButton
                buttonText="Continue"
                onClickItem={onClickButton}
              ></ContinueButton>
            </div>
          </div>
        </>
      );
    case "TeaserGraph":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            totalQuestions={totalQuizCount}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <TeaserGraph questionItemData={questionItem}></TeaserGraph>
            </div>
          </div>
          <ContinueButton
            buttonText="Continue"
            onClickItem={onClickButton}
          ></ContinueButton>
        </>
      );
    case "TeaserFacts":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            totalQuestions={totalQuizCount}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <TeaserFacts questionItemData={questionItem}></TeaserFacts>
            </div>
          </div>
          <ContinueButton
            buttonText="Continue"
            onClickItem={onClickButton}
          ></ContinueButton>
        </>
      );
    case "TeaserCalculating":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            totalQuestions={totalQuizCount}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <TeaserCalculating
                questionItemData={questionItem}
              ></TeaserCalculating>
            </div>
          </div>
          <ContinueButton
            buttonText="Continue"
            onClickItem={onClickButton}
          ></ContinueButton>
        </>
      );
    case "TeaserFinish":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            totalQuestions={totalQuizCount}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <TeaserFinish questionItemData={questionItem}></TeaserFinish>
            </div>
          </div>
          <ContinueButton
            buttonText="Continue"
            onClickItem={onClickButton}
          ></ContinueButton>
        </>
      );
    case "TeaserFinalStep":
      return (
        <>
          <AppHeaderQuiz
            onBackClick={onBackClick}
            totalQuestions={totalQuizCount}
          ></AppHeaderQuiz>
          <div className="quiz-box">
            <ProgressBar width={progressBarWidth}></ProgressBar>
            <div className="container">
              <TeaserFinalStep
                questionItemData={questionItem}
              ></TeaserFinalStep>
            </div>
          </div>
          <ContinueButton
            buttonText="Continue"
            onClickItem={onClickNextScreen}
          ></ContinueButton>
        </>
      );
    default:
      break;
  }
};
