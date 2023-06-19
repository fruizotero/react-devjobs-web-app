/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import { SwitchTheme } from "./SwitchTheme";
import images from "../assets/images";

export function Header() {
  let { patternDesktop, patternMobile, logo } = images;

  return (
    <header className="header" style={{backgroundColor:"black"}}>
      <div className="header_content">
        <div className="header_logo_container">
          <img
            src={logo}
            alt="Logo of the company devjobs"
            className="header_logo"
          />
        </div>
        <SwitchTheme />
      </div>
      <picture className="header_image">
        <source media="(min-width: 512px)" srcSet={patternDesktop}></source>
        <img src={patternMobile} alt="Background image header" />
      </picture>
    </header>
  );
}
