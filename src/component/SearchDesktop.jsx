/* eslint-disable no-unused-vars */
import React, { Component, useContext } from "react";
import images from "../assets/images";
import { InputIcon } from "./InputIcon";
import { CheckBox } from "./Checkbox";
import { ButtonText } from "./ButtonText";
import DataContext from "../context/dataContext";

import "./SearchDesktop.css";

export function SearchDesktop() {
  let { filter,checked, handleFilter, handleSearch, handleCheckbox, handleReset } =
    useContext(DataContext);
  let { iconLocation, iconSearchDesktop } = images;

  let dataLocation = {
    placeholder: "Filter by location",
    image: iconLocation,
    alt: "Icon location",
    valueInput: filter.location,
    handleOnChange: (e) => handleFilter({ location: e.target.value }),
  };
  let dataTitle = {
    placeholder: "Filter by title",
    image: iconSearchDesktop,
    alt: "Icon title",
    valueInput: filter.position,
    handleOnChange: (e) => handleFilter({ position: e.target.value }),
  };

  return (
    <div className="search-desktop">
      <div className="search-desktop_left">
        <InputIcon data={dataTitle} style={"input-icon--style"} />
        <InputIcon data={dataLocation} style={"input-icon--style"} />
      </div>
      <div className="search-desktop_right">
        <CheckBox
          handle={handleCheckbox}
          check={checked}
          text={"Full time"}
          style={"checkbox--style"}
        />
        <ButtonText
          handle={handleSearch}
          text={"Search"}
          style={"button-text--filter-desktop"}
        />
        <ButtonText
          handle={handleReset}
          text={"Reset"}
          style={"button-text--filter-desktop"}
        />
      </div>
    </div>
  );
}
