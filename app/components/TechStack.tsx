import React from "react";
import { technologystack } from "../data/data";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function TechStack() {
  return (
    <>
      <div className="mb-6 sm:mb-[1.5rem] flex justify-start w-full">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="text-fluid-lg font-bold text-maintext">
            MY CURRENT TECHNOLOGY STACK
          </h1>
        </Fade>
      </div>
      <div className="flex gap-[2rem] flex-wrap w-full justify-start md:justify-start">
        {technologystack.map((technology, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[1rem] hover:saturate-150 hover:brightness-110 transition-all"
          >
            <Fade delay={index * 200} triggerOnce={true} direction="up">
              <Image
                src={`${process.env.PUBLIC_URL}${technology.logo}`}
                alt={technology.name}
                width={technology.width}
                height={technology.height}
              ></Image>

              <p className="text-maingreen">{technology.name}</p>
            </Fade>
          </div>
        ))}
      </div>
    </>
  );
}

export default TechStack;
