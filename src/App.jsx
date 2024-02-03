import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Nav from "./components/Nav/Nav";
import { FaArrowCircleLeft, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import "./App.css";

const defaultState = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function App() {
  return (
    <motion.div
      className="h-screen w-screen justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="flex justify-center items-center h-screen gap-1">
        <span>
          I apologize for any inconvenience; my portfolio has been moved to this
          new
        </span>
        <span>
          <a
            href="https://kevetic.vercel.app/"
            className="underline flex items-center gap-2"
          >
            location. <FaArrowCircleLeft />
          </a>
        </span>
      </h1>
      {/* {isLoading ? (
        <Preloader setIsLoading={setIsLoading} defaultState={defaultState} />
      ) : (
        <>
          <div className="flex fixed md:m-10 gap-5 z-50 fixed contact-icons bottom-10 right-10 bg-transparent">
            <a href="https://github.com/Kevetic" target="_blank">
              <FaGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/kevetic/" target="_blank">
              <FaLinkedin size={25} />
            </a>
            <a href="mailto:kevetic@outlook.com">
              <CiMail size={25} />
            </a>
          </div>
          <Nav defaultState={defaultState} navigation={navigation} />
        </>
      )} */}
    </motion.div>
  );
}
