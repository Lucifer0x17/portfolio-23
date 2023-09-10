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
const Showcase = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default Showcase;
