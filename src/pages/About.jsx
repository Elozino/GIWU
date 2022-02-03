import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import LoveCompassion from "../components/LoveCompassion";
import Navbar from "../components/Navbar";
import fulfilment from "../assets/fulfilment.png";
import values from "../assets/values.png";
import charity from "../assets/charity.png";
import Img from "../assets/img5.png";
import Team from "../components/Team";
import profile from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

function About() {
  return (
    <div>
      <Navbar />
      <Banner
        heading="About us"
        text="Serving the world around us"
        img="bg-about"
      />
      <section className="text-center my-10 md:m-20">
        <LoveCompassion headline="Welcome to church" />
        <div className="md:flex  mx-8 md:mx-0">
          <div className="md:mx-8 md:w-1/2 mb-8 md:mb-0 text-left">
            <h3 className="uppercase font-medium">OUR MISSIOn & Vision</h3>
            <h1 className="uppercase text-3xl font-semibold my-4">
              STRIVING FOR A BETTER TOMORROW
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
          <div className="md:mx-8 md:w-1/2 mb-8 md:mb-0 text-left">
            <h3 className="uppercase font-medium">WHAT WE DO</h3>
            <h1 className="uppercase text-3xl font-semibold my-4">
              BRINGING PEACE AND JOY TO THE WORLD
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center my-10 md:m-20">
        <h3 className="uppercase font-bold">BENEFITS </h3>
        <h1 className="uppercase text-3xl font-semibold mt-4 md:my-4 md:w-2/4 m-auto">
          THE benefits of joining our church
        </h1>
        <div className="mx-auto md:flex items-center text-left my-10 md:my-20 px-10">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-14">
            <h2 className="uppercase font-bold text-xl">
              find fulfillment and joy
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={fulfilment} alt="image" className="w-full" />
          </div>
        </div>
        <div className="mx-auto flex flex-col-reverse md:flex-row items-center text-left my-20 px-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={values} alt="image" className="w-full" />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-10">
            <h2 className="uppercase font-bold text-xl">shared values</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="mx-auto md:flex items-center text-left my-20 px-10">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-14">
            <h2 className="uppercase font-bold text-xl">charity events</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={charity} alt="image" className="w-full" />
          </div>
        </div>
        <div className="mx-auto flex flex-col-reverse md:flex-row items-center text-left my-20 px-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={fulfilment} alt="image" className="w-full" />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0  md:pl-10">
            <h2 className="uppercase font-bold text-xl">All are welcome</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center">
        <h3 className="uppercase text-base font-medium">church members</h3>
        <h1 className="uppercase font-bold text-4xl">
          meet our Inspirational team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 w-4/5 md:w-3/4 m-auto my-8">
          <Team role="Pastor" profile="John Mee" image={profile} />
          <Team role="Pastor" profile="John Mee" image={profile2} />
          <Team role="Pastor" profile="John Mee" image={profile} />
          <Team role="Pastor" profile="John Mee" image={profile} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
