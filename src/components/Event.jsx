import React from "react";
import Img9 from "../assets/img9.png";

function Event() {
  return (
    <>
      <section className="my-20 px-7 md:px-20">
        <h3 className="uppercase text-center">Upcoming SERMONS</h3>
        <h1 className="uppercase text-2xl md:text-5xl md:w-1/2 md:m-auto py-4 text-center font-semibold">
          join us and become part of something great
        </h1>
        <div className="lg:flex my-10">
          <div className="w-full lg:w-1/3 p-10 md:p-16 bg-pink-100 mx-auto">
            <div className="flex justify-between items-end">
              <h5 className="uppercase font-bold text-pink-500">
                Upcoming Event
              </h5>
              <div className="flex-col">
                <p>20</p>
                <p>July</p>
              </div>
            </div>
            <h3 className="font-bold text-left my-3 text-2xl">
              WATCH AND LISTEN TO OUR SERMONS
            </h3>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <button className="mt-5 text-pink-100 bg-black px-4 py-2 rounded">
              READ MORE
            </button>
          </div>
          <div className="lg:w-2/3 mx-auto">
            <img
              src={Img9}
              alt="image"
              className="h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;