/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import images from "../assets/images";
import { CheckBox } from "./Checkbox";
import { ButtonText } from "./ButtonText";
import { InputIcon } from "./InputIcon";

export function SearchFilterModal() {
  let { iconLocation } = images;

//   let [tmp, setTmp] = useState("");

  const handleOnChange=(e)=>{
    console.log(e.target);
    // setTmp(e.target.value)
  }

  let data = {
    placeholder: "Filter by location",
    image: iconLocation,
    alt: "Icon location",
    valueInput: "tmp",
    handleOnChange: handleOnChange,
  };

  return (
    <div className="filter">
      <div className="filter_top">
          <InputIcon data={data} />
      </div>
      <div className="filter_bottom">
        <CheckBox handle={() => {}} text={"Full Time"} />
        <ButtonText handle={() => {}} text={"Search"} />
      </div>
    </div>
  );
}
