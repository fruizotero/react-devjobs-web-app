/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useContext, useState } from "react";
import images from "../assets/images";

import "./SearchMobile.css";
import DataContext from "../context/DataContext";
export function SearchMobile({ handleModal }) {
  let { iconFilter, iconSearchMobile } = images;
  let {
    filter,
    handleFilter,
    handleSearch,
  } = useContext(DataContext);

  const handleOnChange = (e) => {
    let { value } = e.target;
    handleFilter({position:value})
  };


  return (
    <div className="search-mobile">
      <div className="search-mobile_left">
        <input
          type="text"
          className="search-mobile-input"
          value={filter.position}
          onChange={handleOnChange}
          placeholder="Filter by title..."
        />
      </div>
      <div className="search-mobile_right">
        <button className="search-mobile_button_filter" onClick={handleModal}>
          <div className="search-mobile_icon_container">
            <img
              src={iconFilter}
              alt="Icon filter"
              className="search-mobile_icon"
            />
          </div>
        </button>
        <button className="search-mobile_button_search" onClick={handleSearch}>
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
