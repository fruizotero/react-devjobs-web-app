/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import "./InputIcon.css";

export function InputIcon({ data }) {
  let { placeholder, image, alt, valueInput, handleOnChange } = data;

  return (
    <div className="input">
      <div className="input_icon_container">
        <img src={image} alt={alt} className="input_icon" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={valueInput}
        onChange={handleOnChange}
        className="input_text"
      />
    </div>
  );
}
