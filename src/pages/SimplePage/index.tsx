import {AppFooter, AppHeader} from "../../containers";
import React from "react";
import "./simplepage.scss";

interface SimplePageProps {
  content: {
    title: string;
    text: string;
  };
}

export const SimplePage: React.FC<SimplePageProps> = ({content}) => {
  return (
    <>
      <AppHeader></AppHeader>
      <div className="page-box">
        <div className="container">
          <div className="content">
            <h1 className="page-title">{content.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: content.text,
              }}
            ></div>
          </div>
        </div>
      </div>
      <AppFooter></AppFooter>
    </>
  );
};
