import React from "react";

function Banner({ heading, text, img }) {
  return (
    <>
      <div
        className={`${img} bg-no-repeat bg-center bg-cover h-96 flex items-center`}
      >
        <div className="px-16  md:px-20">
          <h1 className="text-lg uppercase font-bold">{heading}</h1>
          <p className="font-bold uppercase text-4xl">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Banner;
