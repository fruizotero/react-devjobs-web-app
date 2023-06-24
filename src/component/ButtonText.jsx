/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//Search
//Load More
//Back

import React, { Component } from "react";

import "./ButtonText.css";

export function ButtonText({ handle, text, style }) {
  return (
    <button className={`button-text ${style}`} onClick={handle}>
      {text}
    </button>
  );
}
