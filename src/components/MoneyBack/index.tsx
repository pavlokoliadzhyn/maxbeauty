import {NavLink} from "react-router-dom";
import "./moneyback.scss";

export const MoneyBack = () => {
  return (
    <>
      <div className="money-back-box">
        <div className="text">
          <div className="title">Money-Back quarantee</div>
          <p>
            We are confident with our service quality and its result. So, if you
            are ready to reach your goals, it’s risk-free offer. We guarantee
            you’ll see visible results or you’ll receive a full refund within 30
            days after your purchase. You will need to demonstrate that you have
            followed the program.
          </p>
          <p>
            Find more about the{" "}
            <NavLink to="/terms-of-use">Terms of Use</NavLink>.
          </p>
        </div>
      </div>
    </>
  );
};
