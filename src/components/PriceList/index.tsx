import {NavLink} from "react-router-dom";
import "./style.scss";

interface PriceListProps {
  clickOpenModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSelectPackage: (index: number) => void;
  packageList: {
    name: string;
    price: string;
    oldprice: string;
    perDayPrice: string;
    popular: boolean;
  }[];
}

export const PriceList: React.FC<PriceListProps> = ({
  clickOpenModal,
  onSelectPackage,
  packageList,
}) => {
  const onClickPackages = (
    event: React.MouseEvent<HTMLDivElement>,
    i: number
  ) => {
    const parentElement = event.currentTarget.parentElement;
    if (parentElement) {
      parentElement.querySelectorAll(".price-item").forEach((item) => {
        item.classList.remove("active");
      });
      event.currentTarget.classList.add("active");
    }
    onSelectPackage(i);
  };

  return (
    <>
      <div className="price-box">
        <div className="heading-box">
          <div className="title">Choose your plan</div>
        </div>
        <div className="price-list">
          {packageList.map((item, i) => (
            <div
              className={
                item.popular ? "price-item most-popular active" : "price-item"
              }
              onClick={(e) => onClickPackages(e, i)}
              key={"price-" + i}
            >
              {item.popular && (
                <div className="popular-label">Most Popular</div>
              )}
              <div className="icon-check"></div>
              <div className="price-info">
                <div className="name">{item.name}</div>
                <div className="price">
                  <span className="old">${item.oldprice}</span>${item.price}
                </div>
              </div>
              <div className="price-per-day">
                <span className="price">${item.perDayPrice}</span>
                <span className="day">per day</span>
              </div>
            </div>
          ))}
        </div>
        <div className="info">
          <div className="title">Subscription terms of use</div>
          <div className="text">
            Please be aware that your subscription will be billed monthly at the
            standard rate of $29.99. This recurring charge will continue until
            you opt to cancel. You can manage or cancel your subscription at any
            time by contacting our customer support team via email at
            support@themaxbeauty.com.{" "}
            <NavLink to="/subscription-terms">Subscription Policy</NavLink>.
          </div>
        </div>
        <div className="get-plan">
          <button onClick={clickOpenModal}>Continue</button>
        </div>
      </div>
    </>
  );
};
