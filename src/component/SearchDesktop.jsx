/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { InputIcon } from "./InputIcon";
import { CheckBox } from "./Checkbox";
import { ButtonText } from "./ButtonText";
import DataContext from "../context/DataContext";

import "./SearchDesktop.css";

import images from "../assets/images";

export function SearchDesktop() {
  let { handleSearch, handleReset, stateFilter, setPosition, setLocation, setFullTime } =
    useContext(DataContext);
  let { iconLocation, iconSearchDesktop } = images;
  let {position, location, fullTime } = stateFilter;

  let dataLocation = {
    placeholder: "Filter by location",
    image: iconLocation,
    alt: "Icon location",
    valueInput: location,
    handleOnChange: (e) => setLocation(e.target.value),
  };
  let dataTitle = {
    placeholder: "Filter by title",
    image: iconSearchDesktop,
    alt: "Icon title",
    valueInput: position,
    handleOnChange: (e) => setPosition(e.target.value),
  };

  const handleCheckbox = () => setFullTime(!fullTime);

  return (
    <div className="search-desktop">
      <div className="search-desktop_left">
        <InputIcon data={dataTitle} style={"input-icon--style"} />
        <InputIcon data={dataLocation} style={"input-icon--style"} />
      </div>
      <div className="search-desktop_right">
        <CheckBox
          handle={handleCheckbox}
          check={fullTime}
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
