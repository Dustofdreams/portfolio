"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

function NavbarItems() {
  return (
    <Fade delay={1200} triggerOnce={true}>
      <div>
        <h1 className="font-black text-fluid-logo text-maintext">
          <span className="text-fluid-normal text-maingreen">&lt;h1&gt;</span>
          STOYAN NIKOLOV
          <span className="text-fluid-normal text-maingreen">&lt;/h1&gt;</span>
        </h1>
      </div>
      <div>
        <ul className="flex gap-8 text-fluid-normal text-maintext transition-all">
          <li className="hover:text-maingreen hover:cursor-pointer">About</li>
          <li className="hover:text-maingreen hover:cursor-pointer">
            Projects
          </li>
          <li className="hover:text-maingreen hover:cursor-pointer">Contact</li>
        </ul>
      </div>
    </Fade>
  );
}

export default NavbarItems;
