import {AppHeader} from "../../containers";

import "./Calculating.scss";

export const CalculatingPage = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <div className="calculating-box">
        <div className="container">
          <div className="circle-box">
            <div className="percentage">100%</div>
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray="100, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
          </div>
          <div className="text-box">
            <div className="title">We’re setting up your account...</div>
            <div className="text">
              Please do not click back or refresh the page
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
