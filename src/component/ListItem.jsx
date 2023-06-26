/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import "./ListItem.css";

export function ListItem({ bullet, text, number }) {
  return (
    <li className="list-item">
      <p className={`list-item_bullet ${bullet}`}>{number}</p>
      <p className="list-item_text">{text}</p>
    </li>
  );
}
