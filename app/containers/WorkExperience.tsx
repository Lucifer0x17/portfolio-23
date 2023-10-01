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
  // console.log("data:", workExp);

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
        {workEx.map((experience: any, _id: any) => (
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
      "• Developed documentation platform for Policies implemented in health checks of databases with 5000+ users by using Astro framework",
      "• Reduced troubleshooting and debugging time by 95% by automating 200+ policies and documents across multiple databases using Fast API.",
      "• Provided dynamic rendering and 24/7 live data change by using Markdown files, and Mermaid Charts",
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
      "• Developed GraphQL API for Degenhive (decentralized exchange), using TypeScript and DynamoDB for efficient data storage. The API calculates liquidity pool metrics from blockchain index data, providing valuable insights for the exchange.",
      "• Utilized serverless architecture to streamline infrastructure management by deploying on AWS Lambda and setting up a CI/CD pipeline through GitHub Actions. Reduced deployment times by 80%, resulting in more efficient infrastructure management.",
      "• Carried out secure role‐based authentication using Firebase, with custom cloud functions that manage data access based on user roles. Resulted in streamlined and secure data management for various functionalities.",
    ],
  },
  {
    startDate: "Nov 2022",
    endDate: "Mar 2023",
    company: "Salt ‐ Poziom Ventures Pvt.Ltd.",
    title: "Backend Developer Intern",
    location: "(Remote) Bangalore, India",
    technologies:
      "Javascript, Node.js, Express.js, REST API, MongoDB, Opensearch, AWS Lambda",
    description: [
      "• Constructed Adapter service facilitating usage of diverse data sources and formats for structured data storage. Used Node.js to automate restructuring of incoming CIB schema to host schema.",
      "• Designed an Exchange API enabling currency conversion and updating the real‐time exchange rate of any input currency to INR every 15 seconds through utilization of Cron Job",
      "• Formulated an international import‐export Subsidy Calculator with Opensearch, JSON file, and Node.js, providing search across 10,000+ rows to identify policies for maximal subsidy.",
    ],
  },
  {
    startDate: "Nov 2022",
    endDate: "Dec 2022",
    company: "Slipbox",
    title: "Backend and Infrastructure Developer",
    location: "(Remote)",
    technologies:
      "Node.js, Fastify, Typescript, Typesense, AWS EC2, AWS Lambda",
    description: [
      "• Led DevOps efforts, utilizing AWS Lambda and EC2 to streamline deployment processes,reduce downtime, and increase scalability. Alongside engineered APIs and executed search architecture by launch deadline of 10 days.",
    ],
  },
  {
    startDate: "Jun 2022",
    endDate: "Aug 2022",
    company: "Dell Technologies",
    title: "Summer Intern",
    location: "",
    technologies: "Docker, Grafana, Prometheus, GO, REST Api, Operations",
    description: [
      "• Refined MongoDB monitoring system resulting in performance gain by 40% and made a Smart alert notification on Microsoft Teams, reducing minor notifications by 10%",
      "• Implemented correlation between logs and 1000+ metrics reducing the summary time by 50% and provided visualization of continuous stream of both which can be zoomed in up to 2 seconds",
    ],
  },
  {
    startDate: "Oct 2021",
    endDate: "May 2022",
    company: "Quality and Compliance Cell, MUJ",
    title: "Lead Backend Engineer",
    location: "Rajasthan, India",
    technologies:
      "Express.js, Node.js, REST Api, TypeScript, TypeORM, PostgreSQL",
    description: [
      "• Built a platform to restructure communication flow among 29 departments and cut down paperwork by 75% by performing authentication using Passport.js and Deployed on AWS for usage of 800+ employees.",
    ],
  },
];
