import React from "react";

const MoreAbout = () => {
  return (
    <div className="grid pt-20 grid-cols-3">
      <div className="col-span-1">
        <h2 className="text-2xl tracking-[-0.1rem] font-semibold">
          STILL CURIOUS?
        </h2>
        <h4 className="text-xl font-extralight">Click To Know Me Better</h4>
      </div>
      <div className="col-span-2 justify-self-end pr-32">
        <div className="bg-[#212121] rounded-2xl max-w-[195px] text-[#eeeeee] place-items-end shadow-md shadow-[#4f4f4f] rotate12">
          <h3 className="text-4xl px-9 py-12">5 THINGS ABOUT ME!</h3>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
