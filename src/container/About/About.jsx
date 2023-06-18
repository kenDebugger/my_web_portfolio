import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

// Enter Data ------ This kind of data can be store in DynamoDB later
const abouts = [
  {
    title: "IT Programmer",
    description:
      "Currently employed at Hease Mathematic in the capacity of an IT Programmer.",
    imgUrl: images.HeaseMathematic,
  },
  {
    title: "Junior Software Tester",
    description: "Previously worked at JAC as a Casual Junior Software Tester.",
    imgUrl: images.JAC,
  },
  {
    title: "Web Developer",
    description:
      "Served as a Web Developer during an internship at ThincHealth.",
    imgUrl: images.thinchealth,
  },
  {
    title: "Bachelor of Computer Science",
    description:
      "Graduated from The University of Adelaide, with a major in Computer Science and a focus on Artificial Intelligence.",
    imgUrl: images.UoA,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">Experience</h2>
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
