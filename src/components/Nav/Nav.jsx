import React from "react";
import { Link } from "react-scroll";
import AboutMe from "../AboutMe/AboutMe";

const navigation = [
  { id: 1, title: "About Me" },
  { id: 2, title: "Projects" },
  { id: 3, title: "Contact Me" },
];

export default function Nav({ defaultState }) {
  return (
    <>
      <nav className="flex flex-col space-y-5 sticky top-1/4 list-none p-5  w-fit z-10">
        {navigation.map((item) => {
          return (
            <li>
              <Link to={item.title} smooth={true} offset={0} duration={500}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>
      <div>
        {navigation.map((item) => {
          return (
            <div className="w-screen h-screen">
              <h1 id={`${item.title}`}></h1>
              <AboutMe defaultState={defaultState} />
            </div>
          );
        })}
      </div>
    </>
  );
}
