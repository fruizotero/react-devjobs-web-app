/* eslint-disable no-unused-vars */
import React, { Component, useContext, useEffect, useState } from "react";
import { SearchMobile } from "../component/SearchMobile";
import { SearchFilterModal } from "../component/SearchFilterModal";
import { SearchDesktop } from "../component/SearchDesktop";

import { ButtonText } from "./ButtonText";
import { CardDevJob } from "./CardDevJob";

import DataContext from "../context/dataContext";

export function SectionJobs() {
  let { amountJobs, handleLoad, hiddenButton } = useContext(DataContext);

  return (
    <>
      <SearchMobile />
      <SearchFilterModal />
      <SearchDesktop />
      <div className="jobs">
        {amountJobs.map((el) => (
          <CardDevJob key={`${el.id}${el.company}`} data={el} />
        ))}
      </div>
      {hiddenButton ? (
        ""
      ) : (
        <ButtonText handle={handleLoad} text={"Load More"} />
      )}
    </>
  );
}
