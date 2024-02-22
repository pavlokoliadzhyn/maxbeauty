import {useNavigate} from "react-router-dom";
import {AppHeader} from "../../containers";
import {ContinueButton} from "../../components/Button/ContinueButton";

import "./Result.scss";

export const ResultPage = () => {
  const navigate = useNavigate();
  const onClickNextScreen = () => {
    navigate("/email", {replace: true});
  };

  return (
    <>
      <AppHeader></AppHeader>
      <div className="result-box">
        <div className="container">
          <div className="heading-box">
            <div className="title">Analyzing your answers</div>
          </div>
          <div className="result-lits">
            <div className="result-item">
              <div className="result-label">
                <span>Analyzing Aging Concerns</span>
                <span className="percent">20%</span>
              </div>
              <div className="result-bar">
                <div className="line line-1"></div>
              </div>
            </div>
            <div className="result-item">
              <div className="result-label">
                <span>Beauty Care Habits</span>
                <span className="percent">50%</span>
              </div>
              <div className="result-bar">
                <div className="line line-2"></div>
              </div>
            </div>
            <div className="result-item">
              <div className="result-label">
                Mental & Medical Conditions
                <span className="percent">70%</span>
              </div>
              <div className="result-bar">
                <div className="line line-3"></div>
              </div>
            </div>
            <div className="result-item">
              <div className="result-label">
                <span className="label">
                  Generating Your Personal Beauty Plan
                </span>
                <span className="percent">100%</span>
              </div>
              <div className="result-bar">
                <div className="line line-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContinueButton
        buttonText="Continue"
        onClickItem={onClickNextScreen}
      ></ContinueButton>
    </>
  );
};
