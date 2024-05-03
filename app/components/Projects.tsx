import Image from "next/image";
import React from "react";
import { projects } from "../data/data";
import Project from "./Project";
import ProjectsHeader from "./ProjectsHeader";

function Projects() {
  return (
    <div className="mt-6 sm:mt-[6rem] flex flex-col justify-start w-full">
      <ProjectsHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
