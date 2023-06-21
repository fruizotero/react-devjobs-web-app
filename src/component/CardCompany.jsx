/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { Component, useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";

export function CardCompany({ data }) {
  let [image, setImage] = useState("");
  let { company, logo, website, apply } = data;

  useEffect(() => {
    const getImage = async (image) => {
      try {
        let resp = await import(`../assets/logos/${image}.svg`);
        setImage(resp.default);
      } catch (error) {
        console.log(error);
      }
    };

    getImage(logo);
  }, [image]);

  return (
    <article className="card-company">
      <div className="card-company_logo_container">
        <img src={image} alt="Company logo" className="card-company_logo" />
      </div>
      <div className="card-company_content">
        <div className="card-company_content_left">
          <p className="card-company_company">{company}</p>
          <a
            href={website}
            target="_blank"
            className="card-company_website"
            rel="noreferrer"
          ></a>
        </div>
        <div className="card-company_content_right">
          <ButtonLink nameClass={""} website={apply} text={"Company Site"} />
        </div>
      </div>
    </article>
  );
}
