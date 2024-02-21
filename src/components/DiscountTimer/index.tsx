import "./discounttimer.scss";

export const DiscountTimer = () => {
  return (
    <>
      <div className="timer-box">
        <div className="action-text">
          <div className="discount">21% discount reserved for:</div>
          <div className="timer">09:59</div>
        </div>
        <div className="get-plan">
          <button>Continue</button>
        </div>
      </div>
    </>
  );
};
