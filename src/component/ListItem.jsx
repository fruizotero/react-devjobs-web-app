/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export function ListItem({ bullet, text }) {
  return (
    <li className="list-item">
      <p className="list-item_bullet">{bullet}</p>
      <p className="list-item_text">{text}</p>
    </li>
  );
}
