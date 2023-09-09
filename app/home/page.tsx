'use client';
import Image from 'next/image'
import githubLogo from "@/assets/github.png"
import { useState } from 'react';

const HomePage = () => {
   const [rotation, setRotation] = useState(0);

 const handleLinkClick = () => {
    // Increment the rotation angle by 360 degrees
    setRotation((rotation + 360) % 360);
  };
  return (
    <>
        <h3>AYUSH AGRAWAL</h3>
        <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <Image src={githubLogo} alt='Github' />
            </div>
        </div>
        <div className='container mx-auto mt-4'>
            <div className="circular-text">
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill='white'>
                <textPath href="#circlePath">This is my circular path lets make it awesome</textPath>
                </text>
                <path
                id="circlePath"
                d="M100,10
                    A90,90 0 1,1 100,190
                    A90,90 0 1,1 100,10"
                fill="transparent"
                />
            </svg>
            </div>
        </div>


        <div className="flex justify-center items-center min-h-screen">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            {/* Create a white circle */}
            <circle cx="100" cy="100" r="80" fill='none'/>

            {/* Create a circular path */}
            <path
            id="circlePath"
            d="M 100,100 m -80,0 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0"
            fill="none"
            />

            {/* Add text along the circumference */}
            <text font-size="20">
            <textPath href="#circlePath" startOffset={`${rotation}%`} fill='white'>
                Link 1 Link 2 Link 3 Link 4 Link 5
            </textPath>
            </text>
        </svg>

         <button onClick={handleLinkClick} className="mt-4 p-2 bg-blue-500 text-white">
        Rotate Text
      </button>
        </div>
    </>
  )
}

export default HomePage