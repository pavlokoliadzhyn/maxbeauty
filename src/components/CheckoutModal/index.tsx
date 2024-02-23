import {NavLink, useNavigate} from "react-router-dom";

import imageCard from "../../assets/checkout/card.png";
import imageCardList from "../../assets/checkout/card_list.png";

import {packageList} from "../../_schemes/packageList";

import "./checkoutmodal.scss";
import React from "react";

interface CheckoutModalProps {
  isOpenModal: boolean;
  packageIndex: number;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpenModal,
  packageIndex,
}) => {
  const navigate = useNavigate();
  const onClickPay = () => {
    navigate("/registration", {replace: true});
  };

  return (
    <>
      <div
        className={isOpenModal ? "checkout-modal active" : "checkout - modal"}
      >
        <div className="container">
          <div className="modal-name">Checkout</div>
          <div className="title">
            <span>91% of users</span> stay with us after the initial 30-day
            subscription
          </div>
          <div className="total">
            <div className="label">Total</div>
            <div className="price">
              <span className="old">${packageList[packageIndex].oldprice}</span>
              <span className="current">
                ${packageList[packageIndex].price}
              </span>
            </div>
          </div>
          <div className="payment-box">
            <div className="title-box">Pay fast & secure with</div>
            <div className="payment-type">
              <img src={imageCardList} alt="" />
            </div>
            <div className="payment-form">
              <img src={imageCard} alt="" />
            </div>
            <div className="pay-button">
              <button onClick={onClickPay}>Confirm payment</button>
            </div>
            <div className="secure-text">Pay safe & secure with</div>
          </div>
          <div className="info">
            You agree that ${packageList[packageIndex].price} will be billed
            every month until you cancel according to our{" "}
            <NavLink to="/terms-of-use">Terms of Use</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
