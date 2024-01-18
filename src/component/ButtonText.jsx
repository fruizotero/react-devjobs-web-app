/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "./ButtonText.css";

export function ButtonText({ handle, text, style }) {
  return (
    <button className={`button-text ${style}`} onClick={handle}>
      {text}
    </button>
  );
}
