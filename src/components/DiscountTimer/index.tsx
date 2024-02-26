import "./style.scss";

export const DiscountTimer = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("price");
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <>
      <div className="timer-box">
        <div className="action-text">
          <div className="discount">21% discount reserved for:</div>
          <div className="timer">09:59</div>
        </div>
        <div className="get-plan">
          <button onClick={handleClickScroll}>Continue</button>
        </div>
      </div>
    </>
  );
};
