import React from "react";
import Img1 from "../assets/img1.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

function LoveCompassion({ headline }) {
  return (
    <>
      <h3 className="uppercase font-medium">{headline}</h3>
      <h1 className="uppercase text-5xl font-medium">love and compassion</h1>
      <p className="w-2/3 m-auto my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button className="mb-5 text-black bg-pink-200 h-full p-2 rounded">
        READ MORE
      </button>
      <div className="md:flex justify-evenly items-center m-5">
        <div className="md:card mb-10">
          <img src={Img1} alt="image" className="w-full" />
        </div>
        <div className="md:card mb-10">
          <img src={Img3} alt="image" className="w-full" />
        </div>
        <div className="md:card mb-10">
          <img src={Img4} alt="image" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default LoveCompassion;
