/* eslint-disable no-unused-vars */
import React, { Component, useContext } from "react";
import images from "../assets/images";
import { InputIcon } from "./InputIcon";
import { CheckBox } from "./Checkbox";
import { ButtonText } from "./ButtonText";
import DataContext from "../context/dataContext";

export function SearchDesktop() {
  let {filter, handleFilter, handleSearch, handleChechobox, handleReset } = useContext(DataContext);
  let { iconLocation, iconSearchDesktop } = images;

  let dataLocation = {
    placeholder: "Filter by location",
    image: iconLocation,
    alt: "Icon location",
    valueInput: filter.location,
    handleOnChange: (e) => handleFilter({location:e.target.value}),
  };
  let dataTitle = {
    placeholder: "Filter by title",
    image: iconSearchDesktop,
    alt: "Icon title",
    valueInput: filter.position,
    handleOnChange: (e) => handleFilter({position:e.target.value}),
  };



  return (
    <div className="searchDesktop">
      <InputIcon data={dataLocation} />
      <InputIcon data={dataTitle} />
      <CheckBox handle={handleChechobox} text={"Full time"} />
      <ButtonText handle={handleSearch} text={"Search"} />
      <ButtonText handle={handleReset} text={"Reset"} />
    </div>
  );
}
