import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Event from "../components/Event";
import LoveCompassion from "../components/LoveCompassion";

function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="hero h-screen text-white p-20">
        <div>
          <h5 className="uppercase text-xl mb-5 mt-20 md:mt-0">
            Welcome to our CHURCH
          </h5>
          <h1 className="md:text-7xl w-3/5 uppercase mb-10">
            Become a part of our community
          </h1>
          <button className="mb-5 text-black bg-pink-200 h-full p-2 rounded">
            LEARN MORE
          </button>
        </div>
        <div>
          <p className="text-xl">
            <span className="mr-4">--</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
      </main>

      <section className="text-center my-10 md:m-20">
        <h3>SUB HEADLINE</h3>
        <h1 className="uppercase text-5xl font-medium">
          a church that's relevant
        </h1>
        <div className="md:grid grid-rows-1 grid-flow-col gap-4 m-12">
          <div className="bg-pink-100 border-solid border-b-8 border-pink-500 p-5 mb-10 md:mb-0 md:card">
            <div>icon</div>
            <h2 className="text-xl">ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-pink-100 border-solid border-b-8 border-pink-500 p-5 mb-10 md:mb-0 md:card">
            <div>icon</div>
            <h2 className="text-xl">ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-pink-100 border-solid border-b-8 border-pink-500 p-5 mb-10 md:mb-0 md:card">
            <div>icon</div>
            <h2 className="text-xl">ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center my-10 md:m-20">
        <LoveCompassion />
        <div className="my-20">
          <h3 className="uppercase">our mission & vision</h3>
          <h1 className="uppercase text-2xl font-semibold">
            celebrate WITH US
          </h1>
          <p className="w-2/3 m-auto my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className="text-center my-20 m-5 md:px-20">
        <h3 className="uppercase">Watch and listen</h3>
        <h1 className="uppercase text-2xl font-semibold">
          THE benefits of joining our church
        </h1>
        <div className="md:grid grid-rows-1 grid-flow-col gap-4 my-7 text-left text-white">
          <div className="bgImg1 mb-10 md:mb-0 flex items-end p-5 font-bold cursor-pointer">
            WATCH AND LISTEN TO OUR SERMONS
          </div>
          <div className="bgImg2 mb-10 md:mb-0 flex items-end p-5 font-bold cursor-pointer">
            WATCH AND LISTEN TO OUR SERMONS
          </div>
          <div className="bgImg3 mb-10 md:mb-0 flex items-end p-5 font-bold cursor-pointer">
            WATCH AND LISTEN TO OUR SERMONS
          </div>
          <div className="bgImg4 mb-10 md:mb-0 flex items-end p-5 font-bold cursor-pointer">
            WATCH AND LISTEN TO OUR SERMONS
          </div>
        </div>
      </section>

      <Event />

      <section className="bgImage md:h-1/4 md:flex justify-end items-center">
        <div className="bg-white p-10 md:p-20 border-solid border-b-8 border-pink-300">
          <h2 className="text-3xl w-2/3 font-bold">
            We want to serve the world around us
          </h2>
          <p className="w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          <button className="mt-5 bg-pink-200 text-black px-4 py-2 rounded">
            READ MORE
          </button>
        </div>
      </section>

      <section className="mx-10 pb-20">
        <div className="text-center mb-10 md:mb-0">
          <h3 className="text-xl mt-10 md:mt-0">Read our Blog</h3>
          <h1 className="uppercase mt-5 text-2xl md:text-5xl font-medium">
            SHARE, INSPIRE, INNOVATE
          </h1>
        </div>
        <div className="md:grid grid-rows-1 grid-flow-col gap-4 md:m-12">
          <div className="bg-pink-100 border-solid border-b-8 border-pink-500 p-5 mb-10 md:mb-0">
            <h5 className="font-bold text-sm uppercase text-pink-500">
              Relationship
            </h5>
            <h2 className="text-xl font-bold">
              WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p className="text-sm my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <q>By Mathew Johnson</q> <br />
            <q>Tuesday 13 May, 2021</q>
          </div>
          <div className="bg-pink-100 border-solid border-b-8 border-pink-500 p-5 mb-10 md:mb-0">
            <h5 className="font-bold text-sm uppercase text-pink-500">
              Relationship
            </h5>
            <h2 className="text-xl font-bold">
              WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p className="text-sm my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <q>By Mathew Johnson</q> <br />
            <q>Tuesday 13 May, 2021</q>
          </div>
          <div className="bg-pink-100 border-solid border-b-8 border-pink-500 p-5 mb-10 md:mb-0">
            <h5 className="font-bold text-sm uppercase text-pink-500">
              Relationship
            </h5>
            <h2 className="text-xl font-bold">
              WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p className="text-sm my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <q>By Mathew Johnson</q> <br />
            <q>Tuesday 13 May, 2021</q>
          </div>
          <div className="bg-pink-100 border-solid border-b-8 border-pink-500 p-5">
            <h5 className="font-bold text-sm uppercase text-pink-500">
              Relationship
            </h5>
            <h2 className="text-xl font-bold">
              WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p className="text-sm my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <q>By Mathew Johnson</q> <br />
            <q>Tuesday 13 May, 2021</q>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
