/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import "./InputIcon.css";

export function InputIcon({ data, style }) {
  let { placeholder, image, alt, valueInput, handleOnChange } = data;

  return (
    <div className={`input-icon ${style}`}>
      <div className="input-icon_image_container">
        <img src={image} alt={alt} className="input-icon_image" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={valueInput}
        onChange={handleOnChange}
        className="input-icon_text"
      />
    </div>
  );
}
