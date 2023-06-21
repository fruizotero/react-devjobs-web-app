/* eslint-disable no-unused-vars */
import React, { Component, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardCompany } from "../component/CardCompany";
import DataContext from "../context/dataContext";
import { DescriptionList } from "../component/DescriptionList";
import { ButtonLink } from "../component/ButtonLink";
import { ButtonText } from "../component/ButtonText";

export function DetailsPage() {
  let { id } = useParams();
  let { data } = useContext(DataContext);

  let dataJob = data.filter((el) => el.id == id);
  let {
    requirements,
    role,
    postedAt,
    contract,
    position,
    location,
    apply,
    company,
  } = dataJob[0];

  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="details">
      <ButtonText text={"back"} handle={handleGoBack} />
      <CardCompany data={dataJob[0]} />
      <article className="details_main">
        <div className="details_header">
          <div className="details_header_left">
            <p className="details_sub">
              <span className="details_postedAt">{postedAt}</span>
              <span className="details_bullet">.</span>
              <span className="contract">{contract}</span>
            </p>
            <h1 className="details_position">{position}</h1>
            <p className="details_location">{location}</p>
          </div>
          <div className="details_header_right">
            <ButtonLink nameClass={""} text={"apply now"} website={apply} />
          </div>
        </div>

        <DescriptionList
          data={requirements}
          title={"requirements"}
          bullet={"."}
          orderedList={false}
        />
        <DescriptionList
          data={role}
          title={"what you will do"}
          bullet={""}
          orderedList={true}
        />
      </article>
      <div className="details_footer">
        <div className="details_footer_left">
          <p className="detail_footer_position">{position}</p>
          <p className="detail_footer_company">{company}</p>
        </div>
        <div className="details_footer_right">
          <ButtonLink nameClass={""} text={"apply now"} website={apply} />
        </div>
      </div>
    </section>
  );
}
