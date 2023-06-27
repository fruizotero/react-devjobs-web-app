/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useContext, useState } from "react";
import images from "../assets/images";
import { CheckBox } from "./Checkbox";
import { ButtonText } from "./ButtonText";
import { InputIcon } from "./InputIcon";

import "./SearchFilterModal.css";
import DataContext from "../context/DataContext";


export function SearchFilterModal({handleModal, hiddenModal}) {

  let { iconLocation } = images;
  let { filter, handleFilter, handleSearch, handleCheckbox, checked, handleReset } =
    useContext(DataContext);

  const handleOnChange = (e) => {
    handleFilter({ location: e.target.value });
  };

  let data = {
    placeholder: "Filter by location...",
    image: iconLocation,
    alt: "Icon location",
    valueInput: filter.location,
    handleOnChange: handleOnChange,
  };

 
  const handleOnClickFilterContent = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`filter ${!hiddenModal&& "modal-hidden"}`} onClick={handleModal}>
      <div className="filter_content" onClick={handleOnClickFilterContent}>
        <div className="filter_top">
          <InputIcon data={data} />
        </div>
        <div className="filter_bottom">
          <CheckBox handle={handleCheckbox} text={"Full Time"} check={checked} />
          <ButtonText handle={handleSearch} text={"Search"} style={"button-text--filter"} />
        </div>
      </div>
    </div>
  );
}
