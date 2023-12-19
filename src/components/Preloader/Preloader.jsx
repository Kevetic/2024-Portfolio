import React, { useEffect, useState } from "react";
import { delay, easeIn, motion, useAnimate } from "framer-motion";

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
const preloadArray = ["Unyielding", "Imaginative", "Uplifting", "Xpressional"];

export default function Preloader({ setIsLoading }) {
  const [scope, animate] = useAnimate();
  const [removeSpace, setRemoveSpace] = useState(false);

  useEffect(() => {
    myAnimation({ setIsLoading });
    setTimeout(() => {
      setIsLoading(false);
    }, 8800);
  }, []);

  async function myAnimation({ setIsLoading }) {
    await animate(scope.current, { rotate: 45 });
    await animate(scope.current, { rotate: -45 });
    await animate(scope.current, { scale: 1.5 });
    await animate(scope.current, { rotate: 0 });
    await animate(scope.current, { scale: 1 });
    await animate("span", { scale: 2, color: "#86C232", x: -10 }, { delay: 1 });
    await animate(
      "h1",
      { opacity: 0 },
      { delay: 1 },
      { transition: "easeOut" }
    );
    await animate("h1", { display: "none" });
    animate(
      scope.current,
      {
        x: 200,
      },
      {
        repeatType: "mirror",
        ease: "easeInOut",
      }
    );
    animate(
      scope.current,
      { x: -2000 },
      { delay: 2.5 },
      { transition: "linear" }
    );
    setRemoveSpace(true);
  }

  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: -2000, opacity: 0 }}
      transition={{ duration: 3, delay: 7 }}
      className={`flex absolute justify-evenly items-center w-screen h-screen bg-off-gray`}
    >
      <motion.div
        className="flex justify-evenly items-center text-4xl bg-transparent w-screen"
        ref={scope}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <>
          {preloadArray.map((item) => {
            let firstLetter = item.split("");
            let remaining = firstLetter.splice(1);
            return (
              <div className="flex bg-transparent">
                <span className="flex z-10 bg-transparent">
                  {firstLetter[0]}
                </span>
                <motion.h1
                  className="bg-transparent"
                  variants={defaultState}
                  transition={{
                    duration: 0.4,
                    ease: "anticipate",
                  }}
                >
                  {remaining}
                </motion.h1>
              </div>
            );
          })}
          {removeSpace && <span className="absolute bg-transparent">/</span>}
          {removeSpace && (
            <motion.span
              className="absolute top-3/4 text-4xl bg-transparent"
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1 }}
            >
              Developer
            </motion.span>
          )}
        </>
      </motion.div>
    </motion.div>
  );
}
