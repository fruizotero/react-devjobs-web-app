/* eslint-disable no-unused-vars */
import React, { Component, useContext, useEffect, useState } from "react";
import { SearchMobile } from "../component/SearchMobile";
import { SearchFilterModal } from "../component/SearchFilterModal";
import { SearchDesktop } from "../component/SearchDesktop";

import { ButtonText } from "./ButtonText";
import { CardDevJob } from "./CardDevJob";

import DataContext from "../context/dataContext";

import "./SectionJobs.css";

export function SectionJobs() {
  let { amountJobs, handleLoad, hiddenButton } = useContext(DataContext);
  let [hiddenModal, setHiddenModal] = useState(false);

  const handleModal = () => setHiddenModal(!hiddenModal);

  return (
    <>
      {<SearchMobile handleModal={handleModal} hiddenModal={hiddenModal} />}
      {<SearchFilterModal handleModal={handleModal} hiddenModal={hiddenModal} />}
      {<SearchDesktop />}
      <div className="jobs">
        {amountJobs.map((el) => (
          <CardDevJob key={`${el.id}${el.company}`} data={el} />
        ))}
      </div>
      {hiddenButton ? (
        ""
      ) : (
        <ButtonText handle={handleLoad} text={"Load More"} style={"button-text--load"} />
      )}
    </>
  );
}
