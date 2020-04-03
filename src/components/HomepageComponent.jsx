import React from "react";
import "./homepageComponent.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directoryMenu">
        <div className="menuItem">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
