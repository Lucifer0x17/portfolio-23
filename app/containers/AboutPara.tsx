import { Koulen, Lato } from "next/font/google";

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

const AboutPara = () => {
  return (
    <div className="grid sm:grid-cols-4 md:px-16 sm:px-9 px-1">
      <h2 className="text-4xl font-semibold sm:col-span-1">
        <span className={koulen.className}>ABOUT</span>
      </h2>
      <p className="sm:col-span-3 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-normal lg:leading-[80px] md:leading-[60px] sm:leading-[40px] leading-[30px]">
        <span className={lato.className}>
          As a versatile backend developer, I bring expertise in a wide array of
          languages and technologies. With a track record of impactful
          contributions and innovative projects, I've co-founded Polygon Guild
          Jaipur, organized large-scale Web3 events, and optimized systems for
          notable companies.
        </span>
        <span
          className={`lg:text-3xl md:text-2xl sm:text-xl text-lg leading-[30px] ${lato.className}`}
        >
          {" "}
          My experience spans both the startup culture and established tech
          giants. Passionate about Web3 and travel, I'm driven to create
          efficient, scalable backend solutions that power the digital
          landscape.
        </span>
      </p>
    </div>
  );
};

export default AboutPara;
