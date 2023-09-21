import DataRow from "../components/DataRow";
import { Koulen, Lato } from "next/font/google";
import sanityClient from "@/sanity/config/client.config";
import { groq } from "next-sanity";
const query = groq`*[_type == "experience"]`;

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

const WorkExperience = async () => {
  const workExp = await sanityClient.fetch(query);
  console.log("data:", workExp);

  return (
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
        {workExp.map((experience: any, _id: any) => (
          <DataRow key={_id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

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
