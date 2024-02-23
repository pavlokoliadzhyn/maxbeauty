import {useLocation} from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./AppFooter.scss";

export const AppFooter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/quiz" &&
        location.pathname !== "/quiz/" &&
        location.pathname !== "/calculating" &&
        location.pathname !== "/calculating/" &&
        location.pathname !== "/result" &&
        location.pathname !== "/result/" && (
          <footer>
            <div className="container">
              <p className="copyright">
                Georgoiou A, 83, Shop 17, Potamos Germasogeias, Limassol, 4047,
                Cyprus
                <br />
                By continuing you agree to our{" "}
                <NavLink to="/terms-of-use">Terms of use</NavLink> |{" "}
                <NavLink to="/privacy-policy">Privacy Policy</NavLink> |{" "}
                <NavLink to="/money-back-policy">Money Back Policy</NavLink> |{" "}
                <NavLink to="/subscription-terms">Subscription Terms</NavLink> |{" "}
                <NavLink to="/cookie-policy">Cookie policy</NavLink>
              </p>
            </div>
          </footer>
        )}
    </>
  );
};
