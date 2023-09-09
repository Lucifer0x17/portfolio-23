import React from "react";
import { Lato } from "next/font/google";

const WorkEx = ({ dates, company, role, tech }) => {
  return (
    <div>
      <div className="grid gap-6 grid-cols-4">
        <h5 className="text-md font-extralight">{dates}</h5>
        <h3 className="text-xl font-light">{company}</h3>
        <h4 className="text-xl font-light">{role}</h4>
        <p className="text-sm font-semibold italic text-right">{tech}</p>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
    </div>
  );
};

export default WorkEx;
