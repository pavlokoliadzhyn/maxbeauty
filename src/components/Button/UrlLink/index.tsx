import React from "react";
import {NavLink} from "react-router-dom";

interface UrlLinkProps {
  linkUrl: string;
  linkText: string;
}

const UrlLinkButton: React.FC<UrlLinkProps> = ({linkUrl, linkText}) => {
  return (
    <>
      <NavLink to={linkUrl}>{linkText}</NavLink>
    </>
  );
};

export default UrlLinkButton;
