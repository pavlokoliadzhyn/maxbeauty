import "./pricelist.scss";

export const PriceList = () => {
  return (
    <>
      <div className="price-box">
        <div className="heading-box">
          <div className="title">Choose your plan</div>
        </div>
        <div className="price-list">
          <div className="price-item">
            <div className="icon-check"></div>
            <div className="price-info">
              <div className="name">1-WEEK</div>
              <div className="price">
                <span className="old">$13.99</span>$9.99
              </div>
            </div>
            <div className="price-per-day">
              <span className="price">$1.42</span>
              <span className="day">per day</span>
            </div>
          </div>
          <div className="price-item active most-popular">
            <div className="popular-label">Most Popular</div>
            <div className="icon-check"></div>
            <div className="price-info">
              <div className="name">1-MONTH</div>
              <div className="price">
                <span className="old">$33.99</span>$29.99
              </div>
            </div>
            <div className="price-per-day">
              <span className="price">$0.99</span>
              <span className="day">per day</span>
            </div>
          </div>
          <div className="price-item">
            <div className="icon-check"></div>
            <div className="price-info">
              <div className="name">3-MONTH</div>
              <div className="price">
                <span className="old">$79.99</span>$59.99
              </div>
            </div>
            <div className="price-per-day">
              <span className="price">$0.67</span>
              <span className="day">per day</span>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="title">Subscription terms of use</div>
          <div className="text">
            Please be aware that your subscription will be billed monthly at the
            standard rate of $29.99. This recurring charge will continue until
            you opt to cancel. You can manage or cancel your subscription at any
            time by contacting our customer support team via email at
            support@themaxbeauty.com. Subscription Policy.
          </div>
        </div>
        <div className="get-plan">
          <button>Continue</button>
        </div>
      </div>
    </>
  );
};
