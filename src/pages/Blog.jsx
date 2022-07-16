import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Blog() {
  return (
    <div className="w-screen">
      <Navbar />
      <div>
        <h3>OUR BLOG</h3>
        <h1 className="font-bold text-3xl py-2">MOST RECENT BLOG</h1>
        <div>
          <div>
            <img src="" alt="image" />
          </div>
          <div>
            <div className="flex justify-center items-center">
              <p>Tuesday 13 May, 2022</p>
              <p>By John Hunau Deo</p>
            </div>
            <h2 className="text-2xl font-bold">Church was doing what he often did when dropped An oracle </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
