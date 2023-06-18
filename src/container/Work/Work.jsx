import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const data = [
  {
    title: "Frontend project",
    description: "Tailwind CSS && React.js",
    projectLink: "https://master.d3frfbpn42onla.amplifyapp.com/",
    codeLink: "https://github.com/SuperKoalaa/my_react_web",
    imgUrl: images.SDLC,
    tags: ["Web App", "React JS"],
  },
  {
    title: "Backend project",
    description: "AWS Amplify && React.js",
    projectLink: "https://dev.d2k7agulpj6pr0.amplifyapp.com/",
    codeLink: "https://github.com/SuperKoalaa/orange",
    imgUrl: images.SDLC,
    tags: ["Web App", "React JS", "AWS Amplify"],
  },
  {
    title: "Selenium Testing",
    description: "C#, Nunit, Selenium",
    projectLink: "https://github.com/SuperKoalaa/Selenium_Learn",
    codeLink: "https://github.com/SuperKoalaa/Selenium_Learn",
    imgUrl: images.c_sharp,
    tags: ["C#"],
  },
  // {
  //   title: "Event Master",
  //   description: "Firebase, React.js, Frame-motion, SASS",
  //   projectLink: "https://event-master-web-app.firebaseapp.com/",
  //   codeLink: "https://github.com/SuperKoalaa/event_master_web_app",
  //   imgUrl: images.SDLC,
  //   tags: ["Web App", "React JS"],
  // },
];
const tags = ["Web App", "AWS Amplify", "C#", "React JS", "All"];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(data);
    setFilterWork(data);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span> Section
      </h2>

      <div className="app__work-filter">
        {tags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primary-blackbg"
);
