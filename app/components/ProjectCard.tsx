import React from "react";
import { Koulen, Lato } from "next/font/google";
import Link from "next/link";
import GitHubLogo from "@/assets/github.png";
import Image from "next/image";

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

const ProjectCard = ({ title, desc, technologies, linkGit, tags }: any) => {
  return (
    <div className="grid grid-flow-row">
      <div className="bg-[#cccccc] p-6 rounded-lg w-[90%] place-self-center z-10">
        {/* img */}
      </div>
      <div className="bg-[#eeeeee] grid grid-flow-row rounded-lg -mt-[39px] place-self-center w-[100%] pt-[42px] px-6 gap-3">
        <h1 className={`place-self-center text-4xl ${koulen.className}`}>
          {title}
        </h1>
        {/* tags */}
        <div className="grid grid-flow-col">
          {tags.map((tag: any) => (
            <h6
              className={`bg-[#212121] text-[#eeeeee] rounded-full px-3 py-2 w-fit place-self-center font-light text-xs ${lato.className}`}
            >
              {tag}
            </h6>
          ))}
        </div>
        <p
          className={`place-self-center text-xl italic font-light text-center leading-5 py-1 ${lato.className}`}
        >
          {technologies}
        </p>
        <p
          className={`place-self-center text-2xl font-[400] leading-6 ${lato.className}`}
        >
          {desc}
        </p>
        <Link
          href={linkGit}
          className="grid grid-flow-col place-self-center gap-3 py-3"
        >
          <Image
            src={GitHubLogo}
            height={60}
            width={60}
            alt="github"
            className="bg-[#212121] rounded-full p-[3px] place-self-center"
          />
          <h4 className={`${koulen.className} text-2xl place-self-center`}>
            Github Repository
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
