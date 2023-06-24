/* eslint-disable no-unused-vars */

import React, { Component, useContext, useEffect, useState } from "react";
import { SectionJobs } from "../component/SectionJobs";

import DataContext from "../context/dataContext";

import "./JobsPage.css";
import { SearchMobile } from "../component/SearchMobile";
import { SearchFilterModal } from "../component/SearchFilterModal";
import { SearchDesktop } from "../component/SearchDesktop";
import { CardDevJob } from "../component/CardDevJob";
import { ButtonText } from "../component/ButtonText";


export function JobsPage() {

  let { amountJobs, handleLoad, hiddenButton } = useContext(DataContext);
  let [hiddenModal, setHiddenModal] = useState(false);

  const handleModal = () => setHiddenModal(!hiddenModal);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <section className="jobs-page">
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
    </section>
  );
}
