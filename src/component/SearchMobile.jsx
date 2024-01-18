/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import DataContext from "../context/DataContext";

import "./SearchMobile.css";

import images from "../assets/images";

export function SearchMobile({ handleModal }) {
  let { iconFilter, iconSearchMobile } = images;

  let { handleSearch, stateFilter, setPosition } = useContext(DataContext);

  let { position } = stateFilter;

  const handleOnChange = (e) => {
    let { value } = e.target;
    setPosition(value);
  };

  return (
    <div className="search-mobile">
      <div className="search-mobile_left">
        <input
          type="text"
          className="search-mobile-input"
          value={position}
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
