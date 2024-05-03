import React from "react";
import { technologystack } from "./../data/data";
import Image from "next/image";
import Projects from "./Projects";
import TechStack from "./TechStack";

function About() {
  return (
    <>
      <TechStack/>
      <Projects />
    </>
  );
}

export default About;
