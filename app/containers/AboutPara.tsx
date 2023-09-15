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
      <p className="sm:col-span-3 lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-normal lg:leading-[80px] md:leading-[60px] sm:leading-[40px] leading-[30px]">
        <span className={lato.className}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla,
          reprehenderit voluptatibus enim commodi laborum,
        </span>
        <span
          className={`lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-[30px] ${lato.className}`}
        >
          veritatis consectetur pariatur, modi quod autem? Modi optio quo fuga
          aspernatur ab cumque corrupti exercitationem?
        </span>
      </p>
    </div>
  );
};

export default AboutPara;
