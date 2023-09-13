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
      <div className="fixed w-[100vw] grid grid-cols-2 text-[#eeeeee] mix-blend-difference px-8 py-3 place-items-center">
        <div className="justify-self-start grid grid-cols-2">
          <h4
            className={`justify-self-start col-span-1 ${koulen.className} text-3xl
        `}
          >
            AYUSH
          </h4>
          <h5
            className={`justify-self-end self-center col-span-1 ${lato.className} lg:text-xl 
        md:text-md
        sm:hidden
        hidden
        md:block
        font-light`}
          >
            Backend Developer
          </h5>
        </div>
        <div className="justify-self-end grid grid-cols-2">
          <h5
            className={`col-span-1 justify-self-end self-center ${lato.className} lg:text-xl md:text-md sm:hidden hidden md:block font-light justify-self-end`}
          >
            Available September 2023
          </h5>
          <div className="lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2 bg-[#eeeeee] text-[#212121] w-fit h-fit px-[20px] py-[8px] rounded-full justify-self-end hover:bg-[#212121] hover:text-[#eeeeee] hover:border-2 border-solid hover:px-[18px] hover:py-[6px]">
            <h4 className="lg:text-lg md:text-sm ">Get in Touch</h4>
          </div>
        </div>
      </div>
      {/* top header */}
      <div className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl grid justify-center items-center pt-24 text-center">
        <h1 className={`${koulen.className}`}>BACKEND SPECIALIST</h1>
        <h1 className={koulen.className}>MERN DEVELOPER</h1>
      </div>
    </>
  );
};

export default Showcase;
