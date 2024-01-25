import React from "react";
import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import "./AboutMe.css";

const icons = [
  <FaCss3 size="40" />,
  <FaHtml5 size="40" />,
  <FaReact size="40" />,
  <FaBootstrap size="40" />,
  <SiTailwindcss size="40" />,
  <SiJavascript size="40" />,
];

const renderSummary = ({ defaultState }) => {
  return (
    <>
      <div className="w-1/2 bg-transparent">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="text-left md:text-base about-text text-xs overflow-y-scroll md:overflow-hidden h-48 md:h-fit bg-transparent about-me"
        >
          <span>Dedicated</span> developer specializing in the front-end with a
          strong emphasis on React and related libraries. My passion lies in
          staying on top of new technologies and continuously building{" "}
          <span>innovative</span> solutions. Fueled by
          <span> determination</span> and a love for learning, I bring{" "}
          <span>creativity</span> to my work, leveraging it to enhance user
          experiences and design. As a <span>team player</span>, I thrive in
          collaborative environments, seamlessly integrating into diverse
          cultures. My commitment to excellence and <span>adaptability</span>{" "}
          makes me a valuable asset in any professional scenario, and my skills
          contribute to the success of the teams I work with.
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          className="justify-evenly md:mt-36 flex mt-0 absolute md:static -bottom-20 md:bottom-0 -left-2 md:left-0 bg-transparent"
        >
          {icons.map((icon, idx) => {
            return (
              <motion.span
                key={idx}
                variants={defaultState}
                transition={{
                  duration: 1,
                  ease: "anticipate",
                }}
                className="shadow-md shadow-border rounded-lg"
              >
                {icon}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default function AboutMe({ defaultState }) {
  return (
    <div className="w-10/12 m-auto text-center relative justify-center flex mt-10 lg:w-9/12 gap-5 items-cente md:items-none md:flex-row relative md:static p-10 rounded-lg shadow shadow-border rounded-lg bg-gradient-to-r from-border to-background">
      {renderSummary({ defaultState })}
    </div>
  );
}
