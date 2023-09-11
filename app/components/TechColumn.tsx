import React from "react";
import Image from "next/image";
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

const TechColumn = ({ images }: { images: Array<string> }) => {
  return (
    <div className="grid place-self-center lefting">
      {images.map((el: string) => (
        <div className="grid place-self-center p-3">
          <Image
            className="img place-self-center"
            width={150}
            height={150}
            alt={"alt"}
            src={`/techs/${el}`}
            key={el}
          />
          <h3
            className={`place-self-center italic text-sm font-normal${lato.className}`}
          >
            {el.split(".")[0]}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TechColumn;
