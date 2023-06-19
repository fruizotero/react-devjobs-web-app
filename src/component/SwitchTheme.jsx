/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import images from "../assets/images";

import "./SwitchTheme.css";

export function SwitchTheme() {

    let {iconSun, iconMoon} = images;

  const handleOnChange = (e) => {
    console.log(e);
    console.log(e.target.value);
  };

  return (
    <div className="switch" >
      <div className="switch_icon_container">
        <img src={iconSun} alt="Icon sun" className="switch_icon" />
      </div>
      <div className="switch_checks">
       
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
