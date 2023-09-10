import Image from "next/image";
import luci from "@/assets/luci.jpeg";
import calender from "@/assets/calender.png";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <div className="grid grid-cols-3 text-9xl font-extrabold tracking-tighter items-end place-items-center px-52 pb-9">
        <h1 className="">LET&apos;S</h1>
        <Image
          src={luci}
          height={300}
          width={300}
          className="rounded-full"
          alt="No img found"
        />
        <h1>WORK</h1>
      </div>
      <h4 className="bg-[#363636] h-fit w-fit text-[27px] font-extralight my-6 justify-self-center self-center mb-9">
        Feel Free To Reach Out To Me. I&apos;m Always Open To Discuss New
        Projects.
      </h4>
      {/* socials */}
      <div className="grid grid-cols-5 px-30 mx-20 mb-12">
        <div className="grid grid-cols-4 gap-0 col-span-1 justify-self-center self-center">
          <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
          <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-3xl px-6 py-1 font-extralight col-span-3">
            GitHub
          </span>
        </div>
        <div className="grid grid-cols-7 gap-0 col-span-3 justify-self-center self-center">
          <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
          <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-3xl px-6 py-1 font-extralight col-span-6">
            lucifer0x17@gmail.com
          </span>
        </div>
        <div className="grid grid-cols-4 gap-0 col-span-1 justify-self-center self-center">
          <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
          <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full text-3xl px-6 py-1 font-extralight col-span-3">
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
          className="col-span-1"
          alt="No img found"
        />
        <h1 className="col-span-3 pr-3 justify-self-center self-center">
          BOOK A CALL
        </h1>
      </div>
    </div>
  );
};

export default Contact;
