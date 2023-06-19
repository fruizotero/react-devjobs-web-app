/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import images from "../assets/images";
import { InputIcon } from "./InputIcon";
import { CheckBox } from "./Checkbox";
import { ButtonText } from "./ButtonText";

export function SearchDesktop() {
  let { iconLocation, iconSearchDesktop } = images;

  let dataLocation = {
    placeholder: "Filter by location",
    image: iconLocation,
    alt: "Icon location",
    valueInput: "location",
    handleOnChange: (e) => console.log(e),
  };
  let dataTitle = {
    placeholder: "Filter by title",
    image: iconSearchDesktop,
    alt: "Icon title",
    valueInput: "title",
    handleOnChange: (e) => console.log(e),
  };

  return (
    <div className="searchDesktop">
        <InputIcon data={dataLocation}/>
        <InputIcon data={dataTitle}/>
        <CheckBox handle={()=>{}} text={"Full time"} />
        <ButtonText handle={()=>{}} text={"Search"}/>
    </div>
  );
}
