/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CardDevJob.css";

export function CardDevJob({ data }) {
  let [image, setImage] = useState("");
  let { logo, postedAt, contract, position, company, location, id } = data;

  useEffect(() => {
    const importImage = async (name) => {
      try {
        let resp = await import(`../assets/logos/${name}.svg`);
        setImage(resp.default);
      } catch (error) {
        console.log(error);
      }
    };
    importImage(logo);
  }, [image]);

  return (
    <article className="job">
      <div className="job_image_container">
        <img
          src={image}
          alt={`Icon company ${company}`}
          className="job_image"
        />
      </div>
      <div className="job_details">
        <div className="job_details_top">
          <div className="job_detail">
            <p className="job_postedat">{postedAt}</p>
            <p className="job_contract">{contract}</p>
          </div>
          <div className="job_detail">
            <Link to={`/details/${id}`}>{position}</Link>
            {/* <p className="job_position">{position}</p> */}
          </div>
          <div className="job_detail">
            <p className="job_company">{company}</p>
          </div>
        </div>
        <div className="job_details_bottom">
          <div className="job_detail">
            <p className="job_location">{location}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
