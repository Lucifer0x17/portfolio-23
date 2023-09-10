import Link from "next/link";
import Image from "next/image";
import circleW from "@/assets/semCircleW.svg";
import homeW from "@/assets/homeW.svg";
import projectsW from "@/assets/projectsW.svg";
import aboutW from "@/assets/aboutW.svg";
import dotW from "@/assets/dotW.svg";
import circleB from "@/assets/semCircleB.svg";
import homeB from "@/assets/homeB.svg";
import projectsB from "@/assets/projectsB.svg";
import aboutB from "@/assets/aboutB.svg";
import dotB from "@/assets/dotB.svg";

const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="p-4 bg-[#eeeeee] fixed bottom-[-15px] left-[48.5%] h-fit w-fit rounded-full"></div>
        <Image
          src={circleW}
          height={240}
          width={240}
          alt="nav"
          className="navCircle fixed bottom-[-120px] left-[40%] rotate-[-67deg]"
        />
        <Image
          src={homeW}
          height={240}
          width={240}
          alt="nav"
          className="navHome fixed bottom-[-120px] left-[40%] rotate-[-69deg]"
        />{" "}
        <Image
          src={dotW}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-35deg]"
        />
        <Image
          src={projectsW}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-26deg]"
        />
        <Image
          src={dotW}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[21deg]"
        />
        <Image
          src={aboutW}
          height={240}
          width={240}
          alt="nav"
          className="navAbout fixed bottom-[-120px] left-[40%] rotate-[33deg]"
        />
      </div>
      <div className="">
        <div className="p-4 z-30 bg-[#000000] fixed bottom-[-15px] left-[48.5%] h-fit w-fit rounded-full"></div>
        <Image
          src={circleB}
          height={240}
          width={240}
          alt="nav"
          className="bg-[#eeeeee54] rounded-full navCircle fixed bottom-[-120px] left-[40%] rotate-[-67deg]"
        />
        <Image
          src={homeB}
          height={240}
          width={240}
          alt="nav"
          className="navHome fixed bottom-[-120px] left-[40%] rotate-[-69deg]"
        />{" "}
        <Image
          src={dotB}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-33deg]"
        />
        <Image
          src={projectsB}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-24deg]"
        />
        <Image
          src={dotB}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[23deg]"
        />
        <Image
          src={aboutB}
          height={240}
          width={240}
          alt="nav"
          className="navAbout fixed bottom-[-120px] left-[40%] rotate-[33deg]"
        />
      </div>
    </>
  );
};

export default Navbar;
