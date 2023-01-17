import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

// Enter Data ------ This kind of data can be store in DynamoDB later
const abouts = [
  {
    title: "Junior Software Tester",
    description:
      "I am crrently working in JAC as Casual Junior Software Tester",
    imgUrl: images.JAC,
  },
  {
    title: "Web Developer",
    description: "I have done internship in ThincHealth as Web Developer.",
    imgUrl: images.thinchealth,
  },
  {
    title: "Bachelor of Computer Science",
    description:
      "I am graduated from The University of Adelaide, Major is Computer Sicence with Artificial Intelligence.",
    imgUrl: images.UoA,
  },
];
const head_text_data =
  "With a great passion for solving problems, I am dedicated to using coding to simplify complex issues.";

const About = () => {
  return (
    <>
      <h2 className="head-text">{head_text_data}</h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__base-blackbg"
);
