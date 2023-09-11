import React from "react";
import TechIcon from "../components/TechIcon";
import Technologies from "../containers/Technologies";
// import git from "@/assets/techs/git.svg";

const projectsPage = () => {
  // const git = "/git.svg";
  return (
    <div className="bg-[#eeeeee] h-[fit] w-[100vw] py-20">
      {/* technologies */}
      <Technologies />
      {/* projects */}
      <div></div>
    </div>
  );
};

export default projectsPage;
