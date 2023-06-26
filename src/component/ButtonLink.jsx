/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import "./ButtonLink.css";

export function ButtonLink({ website, text, nameClass }) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noreferrer"
      className={`button-link ${nameClass}`}
    >
      {text}
    </a>
  );
}
