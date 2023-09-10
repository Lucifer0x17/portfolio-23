import React from "react";
import Image from "next/image";
import luci from "@/assets/luci.jpeg";
import calender from "@/assets/calender.png";
import { Koulen, Lato } from "next/font/google";
import DataRow from "../components/DataRow";

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

const AboutPage = () => {
  // const [workData, setWorkData] = useState("hidden");
  return (
    <div>
      {/* upper bar */}
      <div className="grid grid-cols-12 text-[#eeeeee] px-6 py-3 place-items-center">
        <h4 className={`col-span-1 ${koulen.className} text-3xl`}>AYUSH</h4>
        <h5 className={`col-span-2 ${lato.className} text-xl font-light`}>
          Backend Developer
        </h5>
        <div className="col-span-4"></div>
        <h5
          className={`col-span-3 ${lato.className} text-xl font-light justify-self-end`}
        >
          Available September 2023
        </h5>
        <div className="col-span-2 bg-[#eeeeee] text-[#212121] w-fit h-fit px-[20px] py-[8px] rounded-full justify-self-end hover:bg-[#212121] hover:text-[#eeeeee] hover:border-2 border-solid hover:px-[18px] hover:py-[6px]">
          <h4>Get in Touch</h4>
        </div>
      </div>
      {/* top header */}
      <div className="text-9xl grid justify-center items-center pt-24 text-center">
        <h1 className={koulen.className}>BACKEND SPECIALIST</h1>
        <h1 className={koulen.className}>MERN DEVELOPER</h1>
      </div>
      {/* white rectangle */}
      <div className="rounded-[27px] bg-[#eeeeee] mx-12 text-[#121212] px-12 py-20 my-12">
        {/* about */}
        <div className="grid grid-cols-4 px-16">
          <h2 className="text-4xl font-semibold col-span-1">
            <span className={koulen.className}>ABOUT</span>
          </h2>
          <p className="col-span-3 text-6xl font-normal leading-[80px]">
            <span className={lato.className}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              nulla, reprehenderit voluptatibus enim commodi laborum,
            </span>
            <span className={`text-4xl leading-[30px] ${lato.className}`}>
              veritatis consectetur pariatur, modi quod autem? Modi optio quo
              fuga aspernatur ab cumque corrupti exercitationem?
            </span>
          </p>
        </div>
        {/* logos */}
        <div></div>
        {/* workEx */}
        <div className="pt-20">
          <h2
            className={`pl-16 text-4xl tracking-[-0.1rem] font-semibold ${koulen.className}`}
          >
            WORK
          </h2>
          <h2
            className={`pb-12 text-4xl tracking-[-0.1rem] font-semibold ${koulen.className}`}
          >
            EXPERIENCE
          </h2>
          <div>
            {workEx.map((experience, id) => (
              <DataRow key={id} experience={experience} />
            ))}
          </div>
        </div>
        {/* Education */}
        <div className="pt-20">
          <h2 className="text-2xl tracking-[-0.1rem] font-semibold">
            EDUCATION
          </h2>
          <div>
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">Manipal University Jaipur</h3>
              <h4 className="text-xl font-light">
                B.Tech. Information Technology
              </h4>
              <p className="text-sm font-semibold italic text-right">
                8.93 CGPA
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
          </div>
        </div>

        {/* more about */}
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
      </div>
      {/* contact */}
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="grid grid-cols-3 text-9xl font-extrabold tracking-tighter items-end place-items-center px-52 pb-9">
          <h1 className="">LET&apos;S</h1>
          <Image
            src={luci}
            height={300}
            width={300}
            className="rounded-full"
            alt="No img found"
          />
          <h1>WORK</h1>
        </div>
        <h4 className="bg-[#363636] h-fit w-fit text-[27px] font-extralight my-6 justify-self-center self-center mb-9">
          Feel Free To Reach Out To Me. I&apos;m Always Open To Discuss New
          Projects.
        </h4>
        {/* socials */}
        <div className="grid grid-cols-5 px-30 mx-20 mb-12">
          <div className="grid grid-cols-4 gap-0 col-span-1 justify-self-center self-center">
            <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
            <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-3xl px-6 py-1 font-extralight col-span-3">
              GitHub
            </span>
          </div>
          <div className="grid grid-cols-7 gap-0 col-span-3 justify-self-center self-center">
            <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
            <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-3xl px-6 py-1 font-extralight col-span-6">
              lucifer0x17@gmail.com
            </span>
          </div>
          <div className="grid grid-cols-4 gap-0 col-span-1 justify-self-center self-center">
            <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
            <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-3xl px-6 py-1 font-extralight col-span-3">
              LinkedIn
            </span>
          </div>
        </div>
        <h1 className="text-9xl font-extrabold tracking-tighter justify-self-center self-center">
          TOGETHER
        </h1>
        <div className="rounded-full bg-[#454545] text-9xl px-3 py-12 my-20 text-[#121212] grid grid-cols-4 mx-24 font-extrabold tracking-tighter gap-0">
          <Image
            src={calender}
            height={180}
            width={180}
            className="c col-span-1"
            alt="No img found"
          />
          <h1 className="col-span-3 pr-3 justify-self-center self-center">
            BOOK A CALL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const workEx = [
  {
    startDate: "Jan 2022",
    endDate: "May 2022",
    company: "Dell Technologies",
    title: "Undergraduate Intern",
    location: "Hyderabad (Remote)",
    technologies: "Astro, Mermaid, Markdowns, GitLab, MongoDB, Fast API",
    description: [
      "lorem ksjvjkbvb dknkbd svjksvn svnsvnkvk skvjvfk svknsvnkl svjvjfk svknsvjdk ajnkvs svjs svbjs svnsv",
      "lorem ksjvjkbvb dknkbd svjksvn svnsvnkvk skvjvfk svknsvnkl svjvjfk svknsvjdk ajnkvs svjs svbjs svnsv",
      "lorem ksjvjkbvb dknkbd svjksvn svnsvnkvk skvjvfk svknsvnkl svjvjfk svknsvjdk ajnkvs svjs svbjs svnsv",
    ],
  },
  {
    startDate: "Jan 2022",
    endDate: "Aug 2022",
    company: "Astrotech Labs",
    title: "Backend and Infrastructure Developer",
    location: "Singapore (Remote)",
    technologies:
      "TypeScript, Express.js, Node,js, DynamoDB, Serverless, GraphQL, Lambda, CI/CD, Firebase, Firestore, Cloud Functions, Python",
    description: [
      "lorem ksjvjkbvb dknkbd svjksvn svnsvnkvk skvjvfk svknsvnkl svjvjfk svknsvjdk ajnkvs svjs svbjs svnsv",
      "lorem ksjvjkbvb dknkbd svjksvn svnsvnkvk skvjvfk svknsvnkl svjvjfk svknsvjdk ajnkvs svjs svbjs svnsv",
      "lorem ksjvjkbvb dknkbd svjksvn svnsvnkvk skvjvfk svknsvnkl svjvjfk svknsvjdk ajnkvs svjs svbjs svnsv",
    ],
  },
];
