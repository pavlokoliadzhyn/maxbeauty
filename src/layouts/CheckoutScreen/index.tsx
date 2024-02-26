import {useState} from "react";
import {AppHeader, AppFooter} from "../../containers/";
import {DiscountTimer} from "../../components";
import {PriceList} from "../../components";
import {BenefitBox} from "../../components/BenefitBox";
import {FeaturedBox} from "../../components/FeaturedBox";
import {NumberBox} from "../../components/NumberBox";
import {FaqList} from "../../components/FaqList";
import {ReviewList} from "../../components";
import {MoneyBack} from "../../components";
import imageGraph from "../../assets/checkout/graph.png";
import {CheckoutModal} from "../../components/CheckoutModal";
import {packageList} from "../../data/packageList";
import "./style.scss";

export const CheckoutScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [packageIndex, setPackageIndex] = useState(1);

  const clickOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onSelectPackage = (index: number) => {
    setPackageIndex(index);
  };

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
          <div id="price"></div>
          <PriceList
            packageList={packageList}
            clickOpenModal={clickOpenModal}
            onSelectPackage={onSelectPackage}
          ></PriceList>
          <BenefitBox></BenefitBox>
          <FeaturedBox></FeaturedBox>
          <NumberBox></NumberBox>
          <FaqList></FaqList>
          <ReviewList></ReviewList>
          <PriceList
            packageList={packageList}
            clickOpenModal={clickOpenModal}
            onSelectPackage={onSelectPackage}
          ></PriceList>
          <MoneyBack></MoneyBack>
        </div>
      </div>

      <CheckoutModal
        isOpenModal={isOpenModal}
        packageIndex={packageIndex}
      ></CheckoutModal>
      <AppFooter></AppFooter>
    </>
  );
};
