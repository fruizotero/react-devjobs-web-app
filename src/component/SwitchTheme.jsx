/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import images from "../assets/images";

import "./SwitchTheme.css";

export function SwitchTheme({theme}) {
  let [selector, setSelector] = useState(false);
  let { iconSun, iconMoon } = images;

  const handleOnChange = (e) => {
    setSelector(!selector);
    theme();
  };

  return (
    <div className="switch">
      <div className="switch_icon_container">
        <img src={iconSun} alt="Icon sun" className="switch_icon" />
      </div>
      <div className="switch_checks">
        <div className={`selector ${selector && "move"}`}></div>

        <input
          type="radio"
          name="theme"
          value="light"
          defaultChecked={true}
          onChange={handleOnChange}
          className="switch_check"
        />
        <input
          type="radio"
          name="theme"
          value="dark"
          onChange={handleOnChange}
          className="switch_check"
        />
      </div>
      <div className="switch_icon_container">
        <img src={iconMoon} alt="Icon sun" className="switch_icon" />
      </div>
    </div>
  );
}
