/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import images from "../assets/images";

export function CheckBox({ handle, text }) {
  let { iconCheck } = images;

  return (
    <div className="checkbox">
      <button className="checkbox_button" onClick={handle}>
        <img
          src={iconCheck}
          alt="Checkbox image"
          className="checkbox_image"
        />
      </button>
      <p className="checkbox_text">{text}</p>
    </div>
  );
}
