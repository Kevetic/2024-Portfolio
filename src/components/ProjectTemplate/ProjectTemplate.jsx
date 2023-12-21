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
      className="w-10/12 relative"
      initial={{ opacity: 0, y: -75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex justify-around">
        <a
          href={projectLink}
          target="_blank"
          className="w-1/2 border border-main-orange rounded-lg p-2"
        >
          <img src={image} />
        </a>
        <div className="w-5/12 space-y-4">
          <h1 className="text-4xl">{projectName}</h1>
          <div className="text-2xl space-y-32">
            <span>Summary:</span> {summary}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.4 }}
              className="flex justify-between items-center"
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
                      className="gap-5"
                    >
                      {tools}
                    </motion.span>
                  );
                })}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="text-2xl space-y-10 m-auto w-11/12 mt-10">
        <span>Challenges:</span> {challenges}
      </div>
      <div className="text-2xl space-y-10 m-auto w-11/12 mt-10">
        <span>Lessons:</span> {learned}
      </div>
      <div className="text-center mt-20 text-2xl">
        <a href={projectLink} target="_blank">
          <span className="border border-space-blue rounded-2xl p-2 project-link">
            LINK
          </span>
        </a>
      </div>
    </motion.div>
  );
}
