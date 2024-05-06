"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import About from "./components/About";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <Fade>
      <main className="bg-[#222831] w-full md:max-w-[70vw] flex flex-col justify-center items-center px-6 md:px-0 m-auto sm:mt-0">
        <section className="h-svh flex  w-full items-center">
          <div className="w-full md:w-4/5 flex flex-col items-start">
            <Fade direction="down" triggerOnce={true}>
              <p className="text-fluid-lg text-maingreen">Well met!</p>
            </Fade>
            <Fade triggerOnce={true} delay={300} duration={1000}>
              <h2 className="text-fluid-xl font-bold leading-tight text-maintext">
                I&apos;m Stoyan - an aspiring Front-End Developer!
              </h2>
              <p className="text-fluid-normal text-maingreen mb-[1rem]">
                After being a manager for multiple years in the marketing and
                promotional campaings field, I decided it is time for a change.
                My love for technology and passion for creating things led me
                down the front-end development path.
              </p>
              <p className="text-fluid-normal text-maingreen">
                Outside of work I love spending time in nature, reading books
                and playing board games. I like meeting new people and
                discovering new things.
              </p>
            </Fade>
            <Fade direction="up" triggerOnce={true} delay={500}>
              <div className="flex gap-2 items-center mt-10">
                <p className="text-[#c26f27] font-bold text-fluid-normal">
                  DON&apos;T BE A STRANGER
                </p>
                <p className="text-[#c26f27]">--</p>
                <Link href="mailto:stoyanknikolov@gmail.createFromFetch">
                  <FaEnvelope
                    size={32}
                    className="text-[#c26f27] hover:text-maintext transition-all"
                    target="_blank"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/stoyan-nikolov-33018b244/"
                  target="_blank"
                >
                  <FaLinkedin
                    size={30}
                    className="text-[#c26f27] hover:text-maintext transition-all"
                  />
                </Link>
              </div>
            </Fade>
          </div>
        </section>
        <section className="h-svh md:h-screen flex flex-col w-full items-center justify-centermd:mt-0">
          <About />
        </section>
      </main>
    </Fade>
  );
}
