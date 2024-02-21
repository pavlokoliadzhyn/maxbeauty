import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {quizList} from "../../_schemes/quiz.list";
import {QuizItem} from "../../components/Quiz";
import {TeaserItem} from "../../components/Teaser";
import {TeaserStart} from "../../components/";
import {AgeScreen} from "../../containers";
import {ContinueButton} from "../../components/Button/ContinueButton";
import {ProgressBar} from "../../components";
import "./Quiz.scss";
import {TeaserGraph} from "../../components/TeaserGraph";
import {TeaserFacts} from "../../components/TeaserFacts";
import {TeaserFinish} from "../../components/TeaserFinish";
import {TeaserCalculating} from "../../components/TeaserCalculating";
import {AppHeader} from "../../containers/AppHeader";
import {AppFooter} from "../../containers/AppFooter";
import {AppHeaderQuiz} from "../../containers/AppHeaderQuiz";

export const QuizPage = () => {
  const navigate = useNavigate();
  //const totalScreenCount = quizList.length;
  const totalQuizCount = quizList.filter((item) => item.name === "Quiz").length;
  const [stepQuiz, setStepQuiz] = useState<number>(42);
  const [questionStepNumber, setQuestionStepNumber] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(
    (questionStepNumber / totalQuizCount) * 100
  );
  const quizName = quizList[stepQuiz].name;
  const questionItem = quizList[stepQuiz];

  const [currentStep, setCurrentStep] = useState<number>(1);

  console.log(quizName);

  const onClickItem = () => {
    navigate("/calculating", {replace: true});

    setTimeout(() => {
      setStepQuiz(stepQuiz + 1);
      if (quizName === "Quiz") {
        setCurrentStep(currentStep + 1);
      }
    }, 500);

    setQuestionStepNumber(questionStepNumber + 1);
    setProgressBarWidth(((questionStepNumber + 1) / totalQuizCount) * 100);
  };

  const onBackClick = () => {
    if (stepQuiz == 0) return;

    setTimeout(() => {
      setStepQuiz(stepQuiz - 1);
      if (quizName === "Quiz" && currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    }, 500);

    setQuestionStepNumber(questionStepNumber - 1);
    setProgressBarWidth(((questionStepNumber - 1) / totalQuizCount) * 100);
  };

  switch (quizName) {
    case "Quiz":
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
              <QuizItem
                questionItemData={questionItem}
                onClickItem={onClickItem}
              ></QuizItem>
            </div>
          </div>
          {questionItem.isHideBtnNextScreen && (
            <ContinueButton
              buttonText="Next"
              onClickItem={onClickItem}
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
              <TeaserItem questionItemData={questionItem}></TeaserItem>
            </div>
          </div>
          <ContinueButton
            buttonText="Continue"
            onClickItem={onClickItem}
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
              <AgeScreen
                questionItemData={questionItem}
                onClickItem={onClickItem}
              ></AgeScreen>
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
                onClickItem={onClickItem}
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
            onClickItem={onClickItem}
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
            onClickItem={onClickItem}
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
            onClickItem={onClickItem}
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
            onClickItem={onClickItem}
          ></ContinueButton>
        </>
      );
    default:
      break;
  }
};
