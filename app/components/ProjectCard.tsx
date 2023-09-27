import React from "react";
import { Koulen, Lato } from "next/font/google";
import Link from "next/link";
import GitHubLogo from "@/assets/github.png";
import WebLogo from "@/assets/web.png";
import DevLogo from "@/assets/dev.png";
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

const ProjectCard = ({
  title,
  desc,
  technologies,
  linkGit,
  tags,
  hostedLink,
  devfolioLink,
}: any) => {
  return (
    <div className="grid grid-flow-row py-[39px]">
      <div className="grid bg-[#cccccc] p-3 rounded-lg w-[90%] place-self-center z-10">
        {/* img */}
        <Image
          className="place-self-center"
          src={`/projects/${title}.png`}
          height={600}
          width={600}
          alt={title}
        />{" "}
      </div>
      <div className="bg-[#eeeeee] grid grid-flow-row rounded-lg -mt-[120px] place-self-center w-[100%] pt-[129px] px-6 gap-3">
        <h1 className={`place-self-center text-4xl ${koulen.className}`}>
          {title}
        </h1>
        {/* tags */}
        <div className="grid grid-flow-col">
          {tags.map((tag: any) => (
            <h6
              className={`bg-[#212121] text-[#eeeeee] rounded-full px-3 py-1 w-fit place-self-center font-light text-xs ${lato.className} tag`}
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
        <div className="grid grid-flow-col gap-2">
          <Link
            href={linkGit}
            className="grid grid-flow-col place-self-center py-3"
          >
            <Image
              src={GitHubLogo}
              height={45}
              width={45}
              alt="github"
              className="bg-[#212121] rounded-full p-[1px] place-self-center"
            />
            <h4
              className={`${koulen.className} text-xl place-self-center leading-5 hover:bg-[#212121] hover:text-[#eeeeee] px-2 rounded-md py-1`}
            >
              Github Repository
            </h4>
          </Link>
          {hostedLink ? (
            <Link
              href={hostedLink}
              className="grid grid-flow-col place-self-center py-3"
            >
              <Image
                src={WebLogo}
                height={45}
                width={45}
                alt="web"
                className="bg-[#eeeeee] rounded-full place-self-center"
              />
              <h4
                className={`${koulen.className} text-xl place-self-center leading-5 hover:bg-[#212121] hover:text-[#eeeeee] px-2 rounded-md py-1`}
              >
                Hosted Link
              </h4>
            </Link>
          ) : (
            ""
          )}
          {devfolioLink ? (
            <Link
              href={devfolioLink}
              className="grid grid-flow-col place-self-center py-3"
            >
              <Image
                src={DevLogo}
                height={36}
                width={36}
                alt="web"
                className="bg-[#212121] rounded-full p-[3px] place-self-center"
              />
              <h4
                className={`${koulen.className} text-xl place-self-center hover:bg-[#212121] hover:text-[#eeeeee] px-2 rounded-md py-1`}
              >
                Devfolio Link
              </h4>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
