import React from "react";
import "./MenuItemComponent.scss";
import { useHistory, useRouteMatch } from "react-router-dom";

export const MenuItem = ({ ...props }) => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <div
      className={` ${props.size} menu-item`}
      onClick={() => history.push(`${match.url}${props.linkUrl}`)}
    >
      <div
        className={"background-image"}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
