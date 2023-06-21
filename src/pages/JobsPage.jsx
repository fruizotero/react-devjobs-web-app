/* eslint-disable no-unused-vars */

import React, { Component, useEffect } from "react";
import { SectionJobs } from "../component/SectionJobs";


export function JobsPage() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <section className="jobs-page">
     <SectionJobs/>
    </section>
  );
}
