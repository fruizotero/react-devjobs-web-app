/* eslint-disable no-unused-vars */
import React, { Component, useEffect, useState } from "react";
import { SearchMobile } from "../component/SearchMobile";
import { SearchFilterModal } from "../component/SearchFilterModal";
import { SearchDesktop } from "../component/SearchDesktop";

import data from "../assets/data.json";
import { ButtonText } from "./ButtonText";
import { CardDevJob } from "./CardDevJob";

export function SectionJobs() {
    //TODO::Pasarlo al contexto
  let [loadJobs, setLoadJobs] = useState(1);
  let [amountJobs, setAmountJobs] = useState([]);

  const handleOnClick = () => {
    let items = 5;

    setLoadJobs(loadJobs + 1);
    let begin = (loadJobs - 1) * items;
    let end = begin + items;
    let tmpArray= data.slice(begin, end);
    setAmountJobs([...amountJobs, ...tmpArray]);
  };

  useEffect(() => {handleOnClick()}, []);

  return (
    <>
      <SearchMobile />
      <SearchFilterModal />
      <SearchDesktop />
      <div className="jobs">
        {amountJobs.map((el, index) => (
          <CardDevJob key={`${el.id}${el.company}`} data={el} />
        ))}
      </div>
      <ButtonText handle={handleOnClick} text={"Load More"} />
    </>
  );
}
