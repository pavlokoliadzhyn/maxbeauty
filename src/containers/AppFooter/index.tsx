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
                2024 @ All Rights Reserved. By continuing you agree to our{" "}
                <NavLink to="/terms-of-use">Terms of use</NavLink> | Privacy
                Policy | Money Back Policy | Subscription Terms
              </p>
            </div>
          </footer>
        )}
    </>
  );
};
