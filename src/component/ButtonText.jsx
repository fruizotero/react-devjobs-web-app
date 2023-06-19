/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//Search
//Load More
//Back

import React, { Component } from "react";

export function ButtonText({ handle, text }) {
  return (
    <button className="button-text" onClick={handle}>
      {text}
    </button>
  );
}
