/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const navigate_tag = ["home", "about", "work", "skills", "contact"];
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {navigate_tag.map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
