import React from "react";
import "./style.scss";

interface ContinueButtonProps {
  buttonText: string;
  onClickItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  buttonText,
  onClickItem,
}) => {
  return (
    <>
      <div className="continue-button">
        <button className="" onClick={onClickItem}>
          {buttonText}
        </button>
      </div>
    </>
  );
};
