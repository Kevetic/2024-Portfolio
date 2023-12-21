import React from "react";
import { Link } from "react-scroll";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import {
  WordpressPlain,
  PhpOriginal,
  Css3Plain,
  ReactOriginal,
  TailwindcssPlain,
  LaravelPlain,
  MaterialuiOriginal,
} from "devicons-react";
import "./Nav.css";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import QPS from "/QPS.png";
import M48 from "/M48.png";

export default function Nav({ navigation, defaultState }) {
  const projectArray = [
    {
      projectName: "Quinns Plastic Surgery",
      image: QPS,
      challenges:
        "This marked one of my initial professional projects, built entirely from the ground up. The excitement and pressure to meet expectations were intense. Being the sole team member on this small project, I had to balance both client communication and ensuring timely project delivery.",
      summary:
        "Dr. Quinn, a nearby plastic surgeon, required a website for his recently inaugurated practice. We undertook the project and developed it using WordPress and PHP.",
      learned:
        "I gained extensive knowledge, primarily in PHP and templating with WordPress, and learned how to manage clientside aspects while engaging in DevOps during this experience.",
      projectLink: "https://www.quinnplasticsurgery.com/",
      tools: [
        <WordpressPlain size={30} />,
        <PhpOriginal size={30} />,
        <Css3Plain size={30} />,
      ],
    },
    {
      projectName: "Make 48 Challenge",
      image: M48,
      challenges:
        "We took over this project from an overseas team, and around the halfway mark, the client requested us to abandon the existing work and start afresh to meet their deadlines. I had to thoroughly assess and outline each section of the project during the restart. It presented a challenge, but it was an enjoyable experience overall.",
      summary:
        "I took on the responsibility of initiating a React project from the ground up, focusing on organizing challenges to be completed within a 48-hour timeframe. These challenges were hosted by Make 48, a local start up business. The events involved judging, and participants had the opportunity to win cash prizes.",
      learned:
        "This marked my initial exposure to Tailwind, and I thoroughly enjoyed the experience, considering it as a game-changer. It provided me with the opportunity to delve into React at a much deeper level, gaining a comprehensive understanding of its intricacies, particularly in conjunction with context. Additionally, working with various clients allowed me to acquire valuable insights into different business aspects and the specific information required to successfully complete a project.",
      projectLink: "https://48daychallenge.make48.com/",
      tools: [
        <ReactOriginal size={30} />,
        <TailwindcssPlain size={30} />,
        <LaravelPlain size={30} />,
        <MaterialuiOriginal size={30} />,
      ],
    },
  ];

  return (
    <>
      <nav className="flex lg:flex-col lg:space-y-5 sticky justify-evenly lg:top-1/4 top-0 right-0 list-none p-5 w-full lg:w-fit z-50 bg-off-gray lg:bg-transparent">
        {navigation.map((item, idx) => {
          return (
            <Link
              className="cursor-pointer nav-links"
              activeClass="navbar-item"
              id={idx}
              to={item.linkTitle}
              smooth
              offset={-100}
              spy={true}
              duration={500}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div>
        <div id={`About Me`} className="w-screen h-screen">
          <AboutMe defaultState={defaultState} />
        </div>
        {projectArray.map((item) => {
          return (
            <div
              id={`${item.projectName}`}
              className="w-screen h-screen flex justify-center"
            >
              <ProjectTemplate item={item} />
            </div>
          );
        })}
        <div id={`Projects`} className="w-screen h-screen flex justify-center">
          <Projects defaultState={defaultState} />
        </div>
      </div>
    </>
  );
}
