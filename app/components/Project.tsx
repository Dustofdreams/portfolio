"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface Projects {
  project: {
    name: string;
    description: string;
    stack: string[];
    image: string;
  };
  index: number;
}

function Project({ project, index }: Projects) {
  return (
    <Fade delay={1200} cascade={true} triggerOnce={true}>
      <div>
        <Fade delay={index*700} direction="up" triggerOnce={true}>
          <div>
            <Image
              src={project.image}
              alt="placeholder"
              width={500}
              height={300}
            />
            <p className="text-maingreen font-bold mb-[0.4rem] mt-[0.4rem] text-fluid-normal">
              {project.name}
            </p>
            <p className="text-maingreen mb-[0.2rem]">{project.description}</p>
            <div className="text-maintext">{project.stack}</div>
          </div>
        </Fade>
      </div>
    </Fade>
  );
}

export default Project;
