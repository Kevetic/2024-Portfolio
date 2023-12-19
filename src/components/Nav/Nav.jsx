import React from "react";
import { Link } from "react-scroll";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";

const handleClick = (id) => {
  navigation.map((item, idx) => {
    if (idx == id && id == 1) {
      return item.comp;
    } else if (idx == id && id == 2) {
      return item.comp;
    }
  });
};
export default function Nav({ navigation }) {
  return (
    <>
      <nav className="flex flex-col space-y-5 sticky top-1/4 list-none p-5  w-fit z-10">
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                id={idx}
                to={item.title}
                smooth={true}
                offset={0}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>
      <div>
        <div id={`About Me`} className="w-screen h-screen">
          <AboutMe />
        </div>
        <div id={`Projects`} className="w-screen h-screen">
          <Projects />
        </div>
        <div id={`Contact Me`} className="w-screen h-screen">
          <ContactMe />
        </div>
      </div>
    </>
  );
}
