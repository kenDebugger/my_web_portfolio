import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href={"https://www.linkedin.com/in/zhipanchen/"}
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href={"https://github.com/SuperKoalaa"}
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
