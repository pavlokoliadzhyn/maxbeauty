import {useState} from "react";
import {NavLink} from "react-router-dom";
import "./style.scss";

interface AppHeaderQuizProps {
  currentStep?: number;
  totalQuestions: number;
  quizName?: string;
  onBackClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const AppHeaderQuiz: React.FC<AppHeaderQuizProps> = ({
  currentStep,
  totalQuestions,
  quizName,
  onBackClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="back" onClick={onBackClick}>
            <svg
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M11,23c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L6.4,16l5.3,5.3
		c0.4,0.4,0.4,1,0,1.4C11.5,22.9,11.3,23,11,23z"
                />
              </g>
              <g>
                <path d="M27,17H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S27.6,17,27,17z" />
              </g>
            </svg>
          </div>
          <div className="logo">
            <strong>Max</strong>Beauty
          </div>
          {quizName === "Quiz" && currentStep ? (
            <div className="counter">
              <span className="current">{currentStep}</span>
              <span className="sep">/</span>
              <span className="total">{totalQuestions}</span>
            </div>
          ) : (
            <div className="menu">
              <div className="open-menu" onClick={toggleMenu}>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className={menuOpen ? "fixed-menu active" : "fixed-menu"}>
        <div className="overlay" onClick={toggleMenu}></div>
        <div className="menu-box">
          <div className="close-menu" onClick={toggleMenu}>
            <svg
              data-v-a90dbd62=""
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-a90dbd62=""
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
              ></path>
            </svg>
          </div>
          <ul>
            <li>
              <NavLink to="/terms-of-use">Terms of use</NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/money-back-policy">Money Back Policy</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/subscription-terms">Subscription Terms</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/cookie-policy">Cookie policy</NavLink>
            </li>
            <li>
              <a
                href="https://maxbeauty.learnworlds.com/course/look-younger"
                target="_blank"
              >
                Log in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
