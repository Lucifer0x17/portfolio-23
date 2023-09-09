import Link from "next/link";
import navText from "@/assets/text.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#eeeeee] grid justify-center items-center gap-20 py-6 text-2xl bottom-0">
      <h1>hi</h1>
      <Image src={navText} height={330} width={330} alt="home work projects" />
    </div>
  );
};

export default Navbar;
