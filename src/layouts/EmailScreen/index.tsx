import React from "react";
import {useNavigate} from "react-router-dom";
import "./style.scss";

export const EmailScreen = () => {
  const navigate = useNavigate();
  const handlerFormSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    navigate("/checkout", {replace: true});
    event.preventDefault();
  };

  return (
    <div className="email-box">
      <div className="container">
        <div className="heading-box">
          <div className="title">Your Anti-Aging Plan is Ready!</div>
          <div className="text">Enter your email to get started</div>
        </div>
        <div className="form-box">
          <form onSubmit={handlerFormSubmit}>
            <div className="form-group">
              <input type="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <button type="submit">See my plan</button>
            </div>
            <div className="form-gropm">
              <div className="info">
                By submitting your email address, you may also receive email
                offers from MaxBeauty about our services. You may unsubscribe at
                any time. Your use of MaxBeauty is bound by the Terms of Use and
                Privacy Policy.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
