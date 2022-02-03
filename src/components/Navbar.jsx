import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between w-full px-5 py-4 bg-black text-white">
        <div className="flex justify-between w-1/3 items-center">
          <div className="px-3">Brand</div>
          <ul className="flex justify-between w-full border-solid border-l-2 border-white px-3">
            <li className="cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/sermon">SERMON</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
          </ul>
        </div>
        <button className="text-black bg-pink-200 h-full p-2 rounded">
          CONTACT US
        </button>
      </nav>
    </>
  );
}

export default Navbar;
