import Image from "next/image";
import githubLogo from "@/assets/github.png";
import githubText from "@/assets/githubcurve.svg";
import line from "@/assets/line.png";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] showcaseBg grid">
        <div className="grid h-[180px] w-fit justify-self-end place-items-end grid-cols-1 hover:-mt-12 -mt-24">
          <Image
            src={githubLogo}
            height={90}
            width={90}
            alt="github"
            className="rotate180 mr-[90px]"
          />
          <Image
            src={githubText}
            height={180}
            width={180}
            alt="github"
            className="mr-[45px] right-[45px] rotate -mt-[180px]"
          />
        </div>
        <div className="absolute top-[330px]">
          <div className="flex">
            {" "}
            <Image src={line} height={20} width={300} alt="ayush agrawal" />
            <h1 className="font-extralight text-6xl">AYUSH AGRAWAL</h1>
          </div>
          <h2 className="text-[42px] font-thin italic">
            LOREM TEXT HERE BACKEND DEVELOPER
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
