import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const defaultState = {
    hidden: {
      opacity: 0,
      x: -500,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const projectArray = [
    {
      name: "Quinn Plastic Surgery",
      image: "/QPS.JPG",
      challenges: " ",
      summary:
        "This marked one of my initial professional projects, built entirely from the ground up. The excitement and pressure to meet expectations were intense. Being the sole team member on this small project, I had to balance both client communication and ensuring timely project delivery.",
      learned:
        "I gained extensive knowledge, primarily in PHP and templating with WordPress, and learned how to manage clientside aspects while engaging in DevOps during this experience.",
      link: "https://www.quinnplasticsurgery.com/",
    },
    {
      name: "Make 48 Challenge",
      image: "/M48.JPG",
      challenges: "",
      summary:
        "I took on the responsibility of initiating a React project from the ground up, focusing on organizing challenges to be completed within a 48-hour timeframe. These challenges were hosted by Make 48, a local start up business. The events involved judging, and participants had the opportunity to win cash prizes.",
      learned: "",
      link: "https://48daychallenge.make48.com/",
    },
    {
      name: "Shoe Customization",
      image: "/CUSTOM.JPG",
      summary:
        "This served as a personal endeavor for me, driven by the desire to delve into learning React Three Fiber. It involves the integration of four controllable GLTF models, allowing users to select real-world models and render them on the screen.",
      challenges: "",
      learned: "",
      link: "https://kevetic.github.io/Custom-Shoes/",
      github: "https://github.com/Kevetic/Custom-Shoes",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.4 }}
      className="flex justify-center items-center text-center h-full relative"
    >
      <div className="project-container w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
        {projectArray.map((project, idx) => (
          <motion.div
            key={idx}
            variants={defaultState}
            transition={{
              duration: 0.4,
              ease: "linear",
              type: "spring",
              damping: 12,
            }}
            className="border border-main-gray rounded-lg flex flex-col overflow-hidden text-left p-2 bottom-1/3 relative items-center"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <span className="text-lg font-semibold my-2">{project.name}</span>

            <div className="drawer flex flex-col items-center">
              <div className="my-1 h-64">{project.summary}</div>
              <div className="flex justify-around w-full absolute bottom-0 items-center">
                <button className="flex justify-evenly items-center w-1/3 border p-1 rounded-lg hover:scale-105 ease-in duration-200 hover:shadow-span-blue hover:shadow m-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEMO
                  </a>
                  <FaExternalLinkAlt />
                </button>

                {project.github && (
                  <button className="flex justify-evenly items-center w-1/3 border p-1 rounded-lg hover:scale-105 ease-in duration-200 hover:shadow-span-blue hover:shadow m-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB
                    </a>
                    <FaGithub />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <a
        href="https://github.com/Kevetic"
        target="_blank"
        className="absolute bottom-1/3 z-50 text-lg text-span-blue underline"
      >
        MORE...
      </a>
    </motion.div>
  );
}
