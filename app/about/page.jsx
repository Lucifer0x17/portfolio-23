import React from "react";
import Image from "next/image";
import luci from "@/assets/luci.jpeg";
import calender from "@/assets/calender.png";

const AboutPage = () => {
  return (
    <div>
      {/* top header */}
      <div className="text-8xl grid justify-center items-center tracking-[-0.5rem] pt-32">
        <h1>BACKEND SPECIALIST</h1>
        <h1 className="justify-self-center">MERN DEVELOPER</h1>
      </div>
      {/* white rectangle */}
      <div className="rounded-[39px] bg-[#eeeeee] mx-24 text-[#121212] px-12 py-20 my-12">
        {/* about */}
        <div className="grid grid-cols-3">
          <h2 className="text-2xl tracking-[-0.1rem] font-semibold col-span-1">
            ABOUT
          </h2>
          <p className="col-span-2 text-xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla,
            reprehenderit voluptatibus enim commodi laborum, veritatis
            consectetur pariatur, modi quod autem? Modi optio quo fuga
            aspernatur ab cumque corrupti exercitationem?
          </p>
        </div>
        {/* logos */}
        <div></div>
        {/* workEx */}
        <div className="pt-20">
          <h2 className="text-2xl tracking-[-0.1rem] font-semibold">WORK</h2>{" "}
          <h2 className="text-2xl tracking-[-0.1rem] font-semibold -mt-[10px] pb-3">
            EXPERIENCE
          </h2>
          <div>
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">
                Dell Technologies (Remote) Hyderabad, India
              </h3>
              <h4 className="text-xl font-light">Undergraduate Intern</h4>
              <p className="text-sm font-semibold italic text-right">
                Astro, Mermaid, Markdowns, GitLab, MongoDB, Fast API
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">
                Astrotech Labs (Remote) Singapore
              </h3>
              <h4 className="text-xl font-light">
                Backend and DevOps Contractor
              </h4>
              <p className="text-sm font-semibold italic text-right">
                TypeScript, Express.js, Node,js, DynamoDB, Serverless, GraphQL,
                Lambda, CI/CD, Firebase, Firestore, Cloud Functions, Python{" "}
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">
                Salt ‐ Poziom Ventures Pvt.Ltd. (Remote) Bangalore, India
              </h3>
              <h4 className="text-xl font-light">Backend Developer Intern</h4>
              <p className="text-sm font-semibold italic text-right">
                Javascript, Node.js, Express.js, REST API, MongoDB, Opensearch,
                AWS Lambda{" "}
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">Slipbox Remote</h3>
              <h4 className="text-xl font-light">Backend Developer Intern</h4>
              <p className="text-sm font-semibold italic text-right">
                Node.js, Fastify, Typescript, Typesense, AWS EC2, AWS Lambda{" "}
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">Dell Technologies</h3>
              <h4 className="text-xl font-light">Summer Intern</h4>
              <p className="text-sm font-semibold italic text-right">
                Docker, Grafana, Prometheus, GO, REST Api, Operations{" "}
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">
                Quality and Compliance Cell, MUJ Rajasthan, India
              </h3>
              <h4 className="text-xl font-light">Lead Backend Engineer</h4>
              <p className="text-sm font-semibold italic text-right">
                Express.js, Node.js, REST Api, TypeScript, TypeORM, PostgreSQL{" "}
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
          </div>
        </div>
        {/* Education */}
        <div className="pt-20">
          <h2 className="text-2xl tracking-[-0.1rem] font-semibold">
            EDUCATION
          </h2>{" "}
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
            <div className="grid gap-6 grid-cols-4">
              <h5 className="text-md font-extralight">Jul 2022 - Aug 2022</h5>
              <h3 className="text-xl font-light">
                Astrotech Labs (Remote) Singapore
              </h3>
              <h4 className="text-xl font-light">
                Backend and DevOps Contractor
              </h4>
              <p className="text-sm font-semibold italic text-right">
                TypeScript, Express.js, Node,js, DynamoDB, Serverless, GraphQL,
                Lambda, CI/CD, Firebase, Firestore, Cloud Functions, Python{" "}
              </p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
          </div>
        </div>

        {/* more about */}
        <div className="grid pt-20 grid-cols-3">
          <div className="col-span-1">
            {" "}
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
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="grid grid-cols-3 text-9xl font-extrabold tracking-tighter items-end place-items-center px-20">
          {" "}
          <h1 className="">LET'S</h1>
          <Image src={luci} height={300} width={300} className="rounded-full" />
          <h1>WORK</h1>
        </div>
        <h4 className="bg-[#363636] h-fit w-fit text-3xl font-extralight my-6 justify-self-center self-center">
          Feel Free To Reach Out To Me. I'm Always Open To Discuss New Projects.
        </h4>
        {/* socials */}
        <div className="grid grid-cols-5 px-30">
          <div className="grid grid-cols-2 gap-0 col-span-1">
            <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center"></div>
            <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-4xl px-6 py-1 font-extralight">
              GitHub
            </span>
          </div>
          <div className="grid grid-cols-2 gap-0 col-span-2">
            <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center"></div>
            <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-4xl px-6 py-1 font-extralight">
              lucifer0x17@gmail.com
            </span>
          </div>
          <div className="grid grid-cols-2 gap-0 col-span-1">
            <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center"></div>
            <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-4xl px-6 py-1 font-extralight">
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
