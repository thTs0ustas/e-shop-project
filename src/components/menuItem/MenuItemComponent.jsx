import React from "react";
import "./MenuItemComponent.css";

export const MenuItem = ({ title, imgUrl }) => {
  return (
    <div className="menuItem" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subTitle">SHOP NOW</span>
      </div>
    </div>
  );
};
