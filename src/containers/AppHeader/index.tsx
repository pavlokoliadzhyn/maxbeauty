import {useState} from "react";
import {NavLink} from "react-router-dom";
import "./style.scss";

export const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <strong>Max</strong>Beauty
            </NavLink>
          </div>
          <div className="menu">
            <div className="open-menu" onClick={toggleMenu}>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </div>
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
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/money-back-policy">Money Back Policy</NavLink>
            </li>
            <li>
              <NavLink to="/subscription-terms">Subscription Terms</NavLink>
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
