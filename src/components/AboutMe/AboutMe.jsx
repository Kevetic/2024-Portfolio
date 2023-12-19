import React from "react";
import Avatar from "@mui/material/Avatar";
import { motion, AnimatePresence } from "framer-motion";
import { FaCss3, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import "./AboutMe.css";

const renderProfiledPicture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <Avatar
        className="profile-picture grayscale"
        alt="Profile Picture"
        src="photo.png"
        sx={{
          width: 200,
          height: 200,
          margin: "auto",
          opacity: "0.7",
        }}
      />
    </motion.div>
  );
};

const icons = [
  <FaCss3 size="50" />,
  <FaHtml5 size="50" />,
  <FaReact size="50" />,
  <FaBootstrap size="50" />,
  <SiTailwindcss size="50" />,
  <SiJavascript size="50" />,
];

const renderSummary = ({ defaultState }) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
        className="m-5 text-white text-2xl"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        className="text-main-gray relative z-10 text-lg about-text"
      >
        With over 4 years of professional experience, I am a{" "}
        <span>dedicated</span> developer specializing in front-end development
        with a strong emphasis on React and related libraries. My passion lies
        in staying on top of new technologies and continuously building{" "}
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
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="flex justify-evenly mt-8"
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
              className="shadow-md shadow-span-blue rounded-lg"
            >
              {icon}
            </motion.span>
          );
        })}
      </motion.div>
    </>
  );
};

export default function AboutMe({ defaultState }) {
  return (
    <div className="w-1/2 m-auto text-center relative top-48">
      {renderProfiledPicture()}
      {renderSummary({ defaultState })}
    </div>
  );
}
