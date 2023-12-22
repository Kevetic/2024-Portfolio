import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Nav from "./components/Nav/Nav";
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
  { id: 1, title: "About Me", linkTitle: "About Me" },
  { id: 3, title: "QPS", linkTitle: "Quinns Plastic Surgery" },
  { id: 4, title: "M48", linkTitle: "Make 48 Challenge" },
  { id: 2, title: "Personals", linkTitle: "Projects" },
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div className="bg-background">
      {isLoading ? (
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
      )}
    </motion.div>
  );
}
