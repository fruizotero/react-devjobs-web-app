/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { useParams } from "react-router-dom";

export function DetailsPage() {
  let { id } = useParams();

  return (
    <section className="details">
      <h1>{id}</h1>
    </section>
  );
}
