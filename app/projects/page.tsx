import React from "react";
import TechIcon from "../components/TechIcon";
import Technologies from "../containers/Technologies";
import UpperBar from "../components/UpperBar";
import Navbar from "../components/Navbar";
// import git from "@/assets/techs/git.svg";

const projectsPage = () => {
  // const git = "/git.svg";
  return (
    <>
      <UpperBar />
      <div className="bg-[#eeeeee] h-[fit] w-[100vw] py-20">
        {/* technologies */}
        <Technologies />
        {/* projects */}
        <div></div>
      </div>
      <Navbar current="projects" />
    </>
  );
};

export default projectsPage;
