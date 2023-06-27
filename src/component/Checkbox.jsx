/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import images from "../assets/images";

import "./CheckBox.css";

export function CheckBox({ handle, check, text, style }) {
  let { iconCheck } = images;


  return (
    <div className={`checkbox ${style}`}>
      <button
        className={`checkbox_button ${check && "bg-violet"}`}
        onClick={handle}
      >
        <img
          src={iconCheck}
          alt="Checkbox image"
          className={`checkbox_image ${!check && "checkbox_image-hidden"}`}
        />
      </button>
      <p className="checkbox_text">{text}</p>
    </div>
  );
}
