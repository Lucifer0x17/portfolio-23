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
    <div className="grid grid-cols-4 px-16">
      <h2 className="text-4xl font-semibold col-span-1">
        <span className={koulen.className}>ABOUT</span>
      </h2>
      <p className="col-span-3 text-6xl font-normal leading-[80px]">
        <span className={lato.className}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla,
          reprehenderit voluptatibus enim commodi laborum,
        </span>
        <span className={`text-4xl leading-[30px] ${lato.className}`}>
          veritatis consectetur pariatur, modi quod autem? Modi optio quo fuga
          aspernatur ab cumque corrupti exercitationem?
        </span>
      </p>
    </div>
  );
};

export default AboutPara;
