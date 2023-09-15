import React from "react";
import Image from "next/image";
import { Koulen, Lato } from "next/font/google";
import AboutShowcase from "../containers/AboutShowcase";
import Contact from "../containers/Contact";
import WorkExperience from "../containers/WorkExperience";
import Education from "../containers/Education";
import MoreAbout from "../containers/MoreAbout";
import AboutPara from "../containers/AboutPara";
import Cursor from "../components/Cursor";

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
      <AboutShowcase />
      {/* white rectangle */}
      <div
        className="rounded-[27px] 
        lg:bg-[#d01818]
      md:bg-[#123456]
      sm:bg-[#567890] 
      bg-[#456789]
      mx-12 text-[#121212] sm:px-12 px-6 py-20 my-12"
      >
        <AboutPara />
        {/* logos */}
        <div></div>
        <WorkExperience />
        <Education />
        <MoreAbout />
      </div>
      <Contact />
    </div>
  );
};

export default AboutPage;
