import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const test_data_skills = [
  {
    name: "CSS",
    bgColor: "white",
    icon: images.css,
  },
  {
    name: "AWS Amplify",
    bgColor: "white",
    icon: images.aws_amplify,
  },
  {
    name: "HTML",
    bgColor: "white",
    icon: images.html,
  },
  {
    name: "Lambda",
    bgColor: "white",
    icon: images.aws_lambda,
  },
  {
    name: "API Gateway",
    bgColor: "white",
    icon: images.api_gateway,
  },
  {
    name: "SASS",
    bgColor: "white",
    icon: images.sass,
  },
  {
    name: "Python",
    bgColor: "white",
    icon: images.python,
  },
  {
    name: "Selenium",
    bgColor: "white",
    icon: images.selenium,
  },
  {
    name: "React.js",
    bgColor: "white",
    icon: images.react,
  },
  {
    name: "C++",
    bgColor: "white",
    icon: images.cpp,
  },
  {
    name: "JavaScript",
    bgColor: "white",
    icon: images.javascript,
  },
];

const test_data_experience = [
  {
    year: "2022",
    works: [
      {
        name: "Software Tester Internship",
        company: "James Anthony Consulting",
        desc: "Used C# & Selenium to write the automatic testing script for specific project.",
      },
      {
        name: "Web Developer Internship",
        company: "ThincHealth",
        desc: "Developing user-facing applications using React.js",
      },
    ],
  },
  {
    year: "2023",
    works: [
      {
        name: "Casual Junior Software Tester",
        company: "James Anthony Consulting",
        desc: "Used C# & Selenium to write the automatic testing script for specific project.",
      },
    ],
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(test_data_experience);
    setSkills(test_data_skills);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__base-blackbg"
);
