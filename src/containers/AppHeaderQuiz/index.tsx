import "./headerquiz.scss";

interface AppHeaderQuizProps {
  currentStep?: number;
  totalQuestions: number;
  onBackClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const AppHeaderQuiz: React.FC<AppHeaderQuizProps> = ({
  currentStep,
  totalQuestions,
  onBackClick,
}) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="back" onClick={onBackClick}>
            back
          </div>
          <div className="logo">
            <strong>Max</strong>Beauty
          </div>
          {currentStep ? (
            <div className="counter">
              <span className="current">{currentStep}</span>
              <span className="sep">/</span>
              <span className="total">{totalQuestions}</span>
            </div>
          ) : (
            <div className="counter"></div>
          )}
        </div>
      </header>
    </>
  );
};
