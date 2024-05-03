"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

function ProjectsHeader() {
  return (
    <Fade delay={1000} direction="down" triggerOnce={true}>
      <h1 className="text-fluid-lg font-bold text-maintext mb-6 sm:mb-[1.5rem]">
        PROJECTS
      </h1>
    </Fade>
  );
}

export default ProjectsHeader;
