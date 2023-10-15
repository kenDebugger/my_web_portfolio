import React from "react";

import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const Header = () => (
  <>
    <div className="app__header app__flex">
      {/* Introduction */}
      <div className="app__header-badge">
        <div className="badge-cmp">
          <h1>
            <span style={{ marginRight: 12 }}>🐼</span>Ken Chen
          </h1>
          <h3>IT Programmer</h3>
          <p>
            With a great passion for solving problems, I am dedicated to using
            coding to simplify complex issues.
          </p>
          <div className="btn-box">
            <a
              href={"https://www.linkedin.com/in/zhipanchen/"}
              target="_blank"
              rel="noreferrer"
            >
              Hire me
            </a>
            <a href="#contact"> Lets Talk</a>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="img-container">
        <img
          className="app__header-img"
          src={images.profile}
          alt="profile_bg"
        />
      </div>
    </div>
  </>
);

export default AppWrap(Header, "home", "app__primary-blackbg");
