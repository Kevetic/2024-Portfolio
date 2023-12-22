import React, { useEffect, useState } from "react";
import { delay, easeIn, motion, useAnimate } from "framer-motion";

const preloadArray = ["Unyielding", "Imaginative", "Uplifting", "Xpressional"];

export default function Preloader({ setIsLoading, defaultState }) {
  const [scope, animate] = useAnimate();
  const [removeSpace, setRemoveSpace] = useState(false);

  useEffect(() => {
    myAnimation();
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  }, []);

  async function myAnimation() {
    await animate(scope.current, { scale: 1.5 });
    await animate(scope.current, { rotate: 0 });
    await animate(scope.current, { scale: 1 });
    await animate("span", { scale: 2, color: "#512e2e", x: -10 }, { delay: 1 });
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
      { delay: 4 },
      { transition: "linear" },
      setRemoveSpace(true)
    );
  }

  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3, delay: 4 }}
      className={`flex absolute justify-evenly md:items-center items-baseline w-screen h-screen bg-background`}
    >
      <motion.div
        className="flex justify-evenly items-center text-4xl w-screen md:flex-row flex-col"
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
              <div className="flex m-12 md:m-0 text-left">
                <span className="flex z-10">{firstLetter[0]}</span>
                <motion.h1
                  className=""
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
          {removeSpace && (
            <motion.span
              className="absolute top-3/4 text-4xl "
              initial={{ opacity: 0, scale: 1, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1.5,
                y: 75,
                duration: 2,
                transition: "linear",
              }}
            >
              Developer
            </motion.span>
          )}
        </>
      </motion.div>
    </motion.div>
  );
}
