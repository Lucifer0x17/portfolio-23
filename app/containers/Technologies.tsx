// import GalleryPage from "../gallery/Gallery";
import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import TechColumn from "../components/TechColumn";

const Technologies = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/techs");
  const imageFilenames = await fs.readdir(imageDirectory);

  function chunkArray(array: any, chunkSize: number) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      chunks.push(chunk);
    }
    return chunks;
  }

  const imageFilenamesArr = chunkArray(imageFilenames, 3);

  return (
    <div className="text-[#212121]">
      <h1>I WORK WITH</h1>
      <div className="grid grid-cols-7 downAlt">
        {imageFilenamesArr.map((ex: Array<string>) => (
          <TechColumn images={ex} />
        ))}
      </div>
      {/* <GalleryPage /> */}
    </div>
  );
};

export default Technologies;
