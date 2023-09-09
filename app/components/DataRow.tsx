import React from "react";
import { Lato } from "next/font/google";
import { Education, Experience } from "../about/types";

type DataProps = {experience?: Experience ,education?: Education}
const DataRow = ({ experience , education } : DataProps) => {
  return (
    <div>
      <div className="grid gap-6 grid-cols-4">
        <h5 className="text-md font-extralight">{experience?.startDate || education?.startDate} - {experience?.endDate || education?.endDate || "Present"}</h5>
        <h3 className="text-xl font-light">{experience?.company || education?.college}</h3>
        <h4 className="text-xl font-light">{experience?.title || education?.degree}</h4>
        <p className="text-sm font-semibold italic text-right">{experience?.technologies || education?.score}</p>
      </div>
      {experience && (
        <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div className="col-span-3 font-light text-lg pt-3 italic">
                <ul>
                 {experience.desc?.map((bullet,id) => <li key={id}>{bullet}</li>)}
                </ul>
              </div>
            </div>
      )}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
    </div>
  );
};

export default DataRow;
