import React from "react";

export default function Projects() {
  const projectArray = [
    "Project One",
    "Project Two",
    "Project Three",
    "Project Four",
  ];
  return (
    <div className="flex justify-center items-center text-center h-full">
      <div className="project-container w-11/12 h-11/12 flex justify-evenly">
        {projectArray.map((project) => {
          return <div className="border w-full h-full gap-5">{project}</div>;
        })}
      </div>
    </div>
  );
}
