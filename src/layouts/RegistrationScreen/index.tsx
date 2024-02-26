import {AppFooter, AppHeader} from "../../containers";
import "./style.scss";

export const RegistrationScreen = () => {
  const handlerFormSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <AppHeader></AppHeader>
      <div className="email-box">
        <div className="container">
          <div className="heading-box">
            <div className="title">Get Access to Your Plan!</div>
            <div className="text">Enter your data to get started</div>
          </div>
          <div className="form-box">
            <form onSubmit={handlerFormSubmit}>
              <div className="form-group">
                <input type="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Your username" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Your password" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Repeat password" />
              </div>
              <div className="form-group">
                <a
                  href="https://maxbeauty.learnworlds.com/course/look-younger"
                  target="_blank"
                  className="get-button"
                >
                  Continue
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <AppFooter></AppFooter>
    </>
  );
};
