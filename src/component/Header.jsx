/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { Component} from "react";
import { SwitchTheme } from "./SwitchTheme";
import images from "../assets/images";

import "./Header.css";

export function Header({theme}) {
  let { patternDesktop, patternMobile, logo } = images;
  
  let style = {
   "--pattern-desktop":`url(${patternDesktop})`,
    "--pattern-mobile":`url(${patternMobile})`
  }

  return (
    <header className="header" style={style}>
      <div className="header_content">
        <div className="header_logo_container">
          <img
            src={logo}
            alt="Logo of the company devjobs"
            className="header_logo"
          />
        </div>
        <SwitchTheme theme={theme} />
      </div>
    </header>
  );
}
