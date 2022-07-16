import React from "react";
import Banner from "../components/Banner";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Sermons() {
  return (
    <div>
      <Navbar />
      <Banner heading="SERMON" text="take part in OUR SERMON" img="bg-sermon" />
      <Event />
      <div className="">
        <h1 className="uppercase font-bold text-xl text-center">
          VIEW ALL EVENT
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 w-4/5 m-auto my-8">
          <div className="my-10">
            <div className="p-5 bg-pink-50">
              <div className="flex justify-between items-start">
                <h5 className="uppercase font-bold text-pink-500">
                  Upcoming Event
                </h5>
                <div className="flex text-sm">
                  <p className="mr-1">20</p>
                  <p>July</p>
                </div>
              </div>
              <h3 className="font-bold text-left my-3 text-xl">
                WATCH AND LISTEN TO OUR SERMONS
              </h3>
              <p className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button className="mt-5 text-pink-200 bg-black px-4 py-1 text-sm rounded">
                READ MORE
              </button>
            </div>
          </div>
          <div className="my-10">
            <div className="p-5 bg-pink-50">
              <div className="flex justify-between items-start">
                <h5 className="uppercase font-bold text-pink-500">
                  Upcoming Event
                </h5>
                <div className="flex text-sm">
                  <p className="mr-1">20</p>
                  <p>July</p>
                </div>
              </div>
              <h3 className="font-bold text-left my-3 text-xl">
                WATCH AND LISTEN TO OUR SERMONS
              </h3>
              <p className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button className="mt-5 text-pink-200 bg-black px-4 py-1 text-sm rounded">
                READ MORE
              </button>
            </div>
          </div>
          <div className="my-10">
            <div className="p-5 bg-pink-50">
              <div className="flex justify-between items-start">
                <h5 className="uppercase font-bold text-pink-500">
                  Upcoming Event
                </h5>
                <div className="flex text-sm">
                  <p className="mr-1">20</p>
                  <p>July</p>
                </div>
              </div>
              <h3 className="font-bold text-left my-3 text-xl">
                WATCH AND LISTEN TO OUR SERMONS
              </h3>
              <p className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button className="mt-5 text-pink-200 bg-black px-4 py-1 text-sm rounded">
                READ MORE
              </button>
            </div>
          </div>
          <div className="my-10">
            <div className="p-5 bg-pink-50">
              <div className="flex justify-between items-start">
                <h5 className="uppercase font-bold text-pink-500">
                  Upcoming Event
                </h5>
                <div className="flex text-sm">
                  <p className="mr-1">20</p>
                  <p>July</p>
                </div>
              </div>
              <h3 className="font-bold text-left my-3 text-xl">
                WATCH AND LISTEN TO OUR SERMONS
              </h3>
              <p className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button className="mt-5 text-pink-200 bg-black px-4 py-1 text-sm rounded">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sermons;
