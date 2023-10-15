import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Feel free to chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:kenzhipan@gmail.com" className="p-text">
            kenzhipan@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+61449580866" className="p-text">
            +61 449-580-866
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primary-blackbg"
);
