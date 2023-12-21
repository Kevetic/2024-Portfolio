import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Nav from "./components/Nav/Nav";
import Sphere from "./components/Sphere/Sphere";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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

const navigation = [
  { id: 1, title: "About Me" },
  { id: 2, title: "Projects" },
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div className=" bg-no-repeat bg-fixed">
      {isLoading ? (
        <Preloader setIsLoading={setIsLoading} defaultState={defaultState} />
      ) : (
        <>
          <div className="flex fixed m-10 gap-5 fixed z-10 contact-icons">
            <a href="https://github.com/Kevetic" target="_blank">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/kevetic/" target="_blank">
              <FaLinkedin size={40} />
            </a>
            <a href="mailto:kevetic@outlook.com">
              <CiMail size={40} />
            </a>
          </div>
          <Nav defaultState={defaultState} navigation={navigation} />
          {/* <div className="fixed top-72 right-32 flex justify-center items-center h-full w-full -z-10">
            <Sphere arg={[1, 64, 64]} />
          </div> */}
        </>
      )}
    </motion.div>
  );
}
