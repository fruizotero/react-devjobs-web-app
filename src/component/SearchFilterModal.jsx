/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { CheckBox } from "./Checkbox";
import { ButtonText } from "./ButtonText";
import { InputIcon } from "./InputIcon";

import DataContext from "../context/DataContext";

import "./SearchFilterModal.css";

import images from "../assets/images";

export function SearchFilterModal({ handleModal, hiddenModal }) {
  let { iconLocation } = images;
  let { handleSearch, setLocation, setFullTime, stateFilter } =
    useContext(DataContext);

  let { location, fullTime } = stateFilter;

  const handleOnChange = (e) => {
    let { value } = e.target;
    setLocation(value);
  };

  let data = {
    placeholder: "Filter by location...",
    image: iconLocation,
    alt: "Icon location",
    valueInput: location,
    handleOnChange: handleOnChange,
  };

  const handleOnClickFilterContent = (e) => {
    e.stopPropagation();
  };

  const handleCheckbox = () => setFullTime(!fullTime);

  return (
    <div
      className={`filter ${!hiddenModal && "modal-hidden"}`}
      onClick={handleModal}
    >
      <div className="filter_content" onClick={handleOnClickFilterContent}>
        <div className="filter_top">
          <InputIcon data={data} />
        </div>
        <div className="filter_bottom">
          <CheckBox
            handle={handleCheckbox}
            text={"Full Time"}
            check={fullTime}
          />
          <ButtonText
            handle={handleSearch}
            text={"Search"}
            style={"button-text--filter"}
          />
        </div>
      </div>
    </div>
  );
}
