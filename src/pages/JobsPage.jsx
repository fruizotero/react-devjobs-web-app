/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";

import { SearchMobile } from "../component/SearchMobile";
import { SearchFilterModal } from "../component/SearchFilterModal";
import { SearchDesktop } from "../component/SearchDesktop";
import { CardDevJob } from "../component/CardDevJob";
import { ButtonText } from "../component/ButtonText";

import DataContext from "../context/DataContext";

import "./JobsPage.css";

export function JobsPage() {
  let { jobs, loadMore, hiddenButton } = useContext(DataContext);
  let [hiddenModal, setHiddenModal] = useState(false);

  const handleModal = () => setHiddenModal(!hiddenModal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="jobs-page">
      {<SearchMobile handleModal={handleModal} hiddenModal={hiddenModal} />}
      {
        <SearchFilterModal
          handleModal={handleModal}
          hiddenModal={hiddenModal}
        />
      }
      {<SearchDesktop />}
      <div className="jobs">
        {jobs.map((el) => (
          <CardDevJob key={`${el.id}${el.company}`} data={el} />
        ))}
      </div>
      {hiddenButton ? (
        ""
      ) : (
        <ButtonText
          handle={loadMore}
          text={"Load More"}
          style={"button-text--load"}
        />
      )}
    </section>
  );
}
