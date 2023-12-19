import React from "react";
import { Link } from "react-scroll";

const navigation = [
  { id: 1, title: "About Me" },
  { id: 2, title: "Projects" },
  { id: 3, title: "Contact Me" },
];

export default function Nav() {
  return (
    <>
      <nav className="flex flex-col space-y-5 sticky top-1/4 list-none p-5 bg-transparent w-fit">
        {navigation.map((item) => {
          return (
            <li className="bg-transparent">
              <Link
                to={item.title}
                smooth={true}
                offset={0}
                duration={500}
                className="bg-transparent"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>
      <div>
        {navigation.map((item) => {
          return (
            <div className="w-screen h-screen ">
              <h1 id={`${item.title}`}>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
