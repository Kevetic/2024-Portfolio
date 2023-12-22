import React from "react";
import { motion } from "framer-motion";

export default function ProjectTemplate({ item }) {
  const {
    projectName,
    image,
    challenges,
    summary,
    learned,
    projectLink,
    tools,
  } = item;

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

  return (
    <motion.div
      className="w-10/12 p-5 h-fit shadow shadow-border rounded-lg bg-gradient-to-r from-border to-background"
      initial={{ opacity: 0, y: -75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="w-11/12 bg-transparent">
        <h1
          className="lg:text-4xl sm:text-md text-center text-foreground mb-5 bg-transparent"
          text-xs
        >
          {projectName}
        </h1>
      </div>
      <div className="flex justify-around w-full flex-col m-auto bg-transparent">
        <a
          href={projectLink}
          target="_blank"
          className="rounded-lg p-2 w-1/2 h-1/2 m-auto"
        >
          <img src={image} />
        </a>
        <div className="sm:text-md text-xs lg:text-lg space-y-5 w-11/12 m-auto mt-5 bg-transparent">
          <span className="">Summary:</span> {summary}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.4 }}
            className="flex justify-evenly items-center text-foreground bg-transparent "
          >
            Tools:
            {tools &&
              tools.map((tools) => {
                return (
                  <motion.span
                    variants={defaultState}
                    transition={{
                      duration: 0.4,
                      ease: "linear",
                      type: "spring",
                      damping: 12,
                    }}
                    className="gap-5 project-tools"
                  >
                    {tools}
                  </motion.span>
                );
              })}
          </motion.div>
        </div>
      </div>

      <div className="sm:text-md text-xs lg:text-lg space-y-10 m-auto w-11/12 mt-10 bg-transparent">
        <span>Challenges:</span> {challenges}
      </div>
      <div className="sm:text-md text-xs lg:text-lg space-y-10 m-auto w-11/12 mt-10 bg-transparent">
        <span>Lessons:</span> {learned}
      </div>
      <div className="text-center md:mt-20 mt-10 sm:text-md text-xs lg:text-lg bg-transparent">
        <a href={projectLink} target="_blank" className="bg-transparent">
          <span className="border border-space-blue rounded-lg p-2 project-link ">
            LINK
          </span>
        </a>
      </div>
    </motion.div>
  );
}
