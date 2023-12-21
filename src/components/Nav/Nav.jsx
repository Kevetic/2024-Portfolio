import React from "react";
import { Link } from "react-scroll";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import "./Nav.css";

export default function Nav({ navigation, defaultState }) {
  return (
    <>
      <nav className="flex flex-col space-y-5 sticky top-1/4 list-none p-5 w-fit z-50">
        {navigation.map((item, idx) => {
          return (
            <Link
              activeClass="navbar-item"
              id={idx}
              to={item.title}
              smooth
              offset={-155}
              spy={true}
              duration={500}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div>
        <div id={`About Me`} className="w-screen h-screen ">
          <AboutMe defaultState={defaultState} />
        </div>
        <div id={`Projects`} className="w-screen h-screen flex justify-center">
          <Projects defaultState={defaultState} />
        </div>
      </div>
    </>
  );
}
