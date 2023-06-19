/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import images from "../assets/images";

import "./SearchMobile.css";

export function SearchMobile() {
  let { iconFilter, iconSearchMobile } = images;
  let [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    let {value}=e.target;
    setInputValue(value);
  };

  const handleOnClick = () => {
    console.log("click desde serach mobile")
  };

  return (
    <div className="search-mobile">
      <div className="search-mobile_left">
        <input
          type="text"
          className="search-mobile-input"
          value={inputValue}
          onChange={handleOnChange}
          placeholder="Filter by title"
        />
      </div>
      <div className="search-mobile_right">
        <div className="search-mobile_icon_container">
          <img
            src={iconFilter}
            alt="Icon filter"
            className="search-mobile_icon"
          />
        </div>
        <button className="search-mobile_button" onClick={handleOnClick}>
          <div className="search-mobile_icon_container">
            <img
              src={iconSearchMobile}
              alt="Icon search"
              className="search-mobile_icon"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
