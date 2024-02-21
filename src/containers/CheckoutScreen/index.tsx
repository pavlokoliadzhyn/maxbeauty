import {AppHeader} from "../AppHeader";
import {AppFooter} from "../AppFooter";
import {DiscountTimer} from "../../components";
import {PriceList} from "../../components";
import {BenefitBox} from "../../components/BenefitBox";
import {FeaturedBox} from "../../components/FeaturedBox";
import {NumberBox} from "../../components/NumberBox";
import {FaqList} from "../../components/FaqList";
import {ReviewList} from "../../components";
import {MoneyBack} from "../../components";
import imageGraph from "../../assets/checkout/graph.png";
import "./checkoutscreen.scss";

export const CheckoutScreen = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <div className="checkout-box">
        <div className="container">
          <DiscountTimer></DiscountTimer>
          <div className="graph-box">
            <div className="heading-box">
              <div className="title">Young-looking woman by May</div>
            </div>
            <div className="image">
              <img src={imageGraph} alt="" />
            </div>
          </div>

          <PriceList></PriceList>
          <BenefitBox></BenefitBox>
          <FeaturedBox></FeaturedBox>
          <NumberBox></NumberBox>
          <FaqList></FaqList>
          <ReviewList></ReviewList>
          <PriceList></PriceList>
          <MoneyBack></MoneyBack>
        </div>
      </div>
      <AppFooter></AppFooter>
    </>
  );
};
