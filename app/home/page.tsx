import Image from "next/image";
import githubLogo from "@/assets/github.png";
import githubText from "@/assets/githubcurve.svg";
// import line from "@/assets/line.png";

const HomePage = async () => {
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
        <div className="absolute top-[330px] w-[100vw]">
          <div className="grid grid-cols-3 w-[60%]">
            {" "}
            <hr className="col-span-1 h-[1px] w-full my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            <h1 className="col-span-2 font-extralight text-6xl place-self-stretch">
              AYUSH AGRAWAL
            </h1>
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
