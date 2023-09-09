import React from "react";
import Image from "next/image";
import luci from "@/assets/luci.jpeg";
import calender from "@/assets/calender.png";

const AboutPage = () => {
  return (
    <div>
      {/* top header */}
      <div className="text-8xl grid justify-center items-center tracking-tighter">
        <h1>BACKEND SPECIALIST</h1>
        <h1 className="j justify-self-center">MERN DEVELOPER</h1>
      </div>
      {/* white rectangle */}
      <div>
        {/* about */}
        <div>
          <h2>ABOUT</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla,
            reprehenderit voluptatibus enim commodi laborum, veritatis
            consectetur pariatur, modi quod autem? Modi optio quo fuga
            aspernatur ab cumque corrupti exercitationem?
          </p>
        </div>
        {/* logos */}
        <div></div>
        {/* workEx */}
        <div>
          <h2>WORK EXPERIENCE</h2>
          <div>
            <div>
              <h5>Jul 2022 - Aug 2022</h5>
              <h3>Dell Tech</h3>
              <h4>Under Graduuate Intern</h4>
              <p>Astro, Mermaid, Markdowns, GitLab, MongoDB, Fast API</p>
            </div>
            <br></br>
            <div>
              <h5>Jul 2022 - Aug 2022</h5>
              <h3>Dell Tech</h3>
              <h4>Under Graduuate Intern</h4>
              <p>Astro, Mermaid, Markdowns, GitLab, MongoDB, Fast API</p>
            </div>
          </div>
        </div>
        {/* Education */}
        <div>
          <h2>Education</h2>
          <div>
            <div>
              <h5>Jul 2022 - Aug 2022</h5>
              <h3>Manipal University Jaipur</h3>
              <h4>B.Tech. Inofrmation Technology</h4>
              <p>8.9 CGPA</p>
            </div>
            <br></br>
            <div>
              <h5>Jul 2022 - Aug 2022</h5>
              <h3>Dell Tech</h3>
              <h4>Under Graduuate Intern</h4>
              <p>Astro, Mermaid, Markdowns, GitLab, MongoDB, Fast API</p>
            </div>
          </div>
        </div>
        {/* more about */}
        <div>
          <h2>STILL CURIOUS</h2>
          <h4>Click To Know Me Better</h4>
          <div>
            <div>
              <h3>5 THINGS ABOUT ME!</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>
          LET'S
          <Image src={luci} height={300} width={300} className="rounded-full" />
          WORK
        </h1>
        <h4>
          Feel free to reach out to me. I'm always open to discuss new projects.
        </h4>
        <div>
          <span>GitHub</span>
          <span>lucifer0x17@gmail.com</span>
          <span>LinkedIn</span>
        </div>
        <h1>TOGETHER</h1>
        <div>
          <Image src={calender} height={120} width={120} />
          <h1>BOOK A CALL</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
