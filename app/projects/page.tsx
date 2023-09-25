import React from "react";
import sanityClient from "@/sanity/config/client.config";
import TechIcon from "../components/TechIcon";
import Technologies from "../containers/Technologies";
import UpperBar from "../components/UpperBar";
import Navbar from "../components/Navbar";
import { Koulen, Lato } from "next/font/google";
import ProjectCard from "../components/ProjectCard";
import { groq } from "next-sanity";
import Contact from "../containers/Contact";
const query = groq`*[_type == "projects"]`;

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
});
const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
// import git from "@/assets/techs/git.svg";

const projectsPage = async () => {
  // const git = "/git.svg";
  const projects = await sanityClient.fetch(query);
  console.log("data:", projects);

  return (
    <>
      <UpperBar />
      <div className="h-[fit] w-[100vw] py-20">
        {/* technologies */}
        <Technologies />
        {/* projects */}
        <div className="grid grid-cols-3 text-[#212121] m-12 gap-6">
          {projects.map((p: any) => (
            <ProjectCard
              title={p.name}
              desc={p.description}
              technologies={p.technologies}
              linkGit={p.githubLink}
              tags={p.tags}
              hostedLink={p.hostedLink}
              devfolioLink={p.devfolioLink}
            />
          ))}
        </div>
      </div>
      <Contact />
      <Navbar current="projects" />
    </>
  );
};

export default projectsPage;
