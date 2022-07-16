import React from "react";
import * as Icon from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between w-full px-5 py-4 bg-black text-white">
        <div className="flex justify-between w-3/4 items-center">
          <div className="px-3 font-bold text-2xl">GIWU</div>
          <div
            className="md:block w-full border-solid border-l-2 ">
            <ul className="flex border-white px-3 "
              style={{ position: "absolute", top: "70px", width: "100%", left: "0px", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexDirection: "column", height: "calc(100vh - 70px)", backgroundColor: "rgba(0, 0, 0, 0.7)", }}
            >
              <li className="cursor-pointer mr-10">
                <Link to="/">HOME</Link>
              </li>
              <li className="cursor-pointer mr-10">
                <Link to="/about">ABOUT US</Link>
              </li>
              <li className="cursor-pointer mr-10">
                <Link to="/sermon">SERMON</Link>
              </li>
              <li className="cursor-pointer mr-10">
                <Link to="/blog">BLOG</Link>
              </li>
            </ul>
          </div>
        </div>
        <button className="text-black bg-pink-200 h-full p-2 rounded hidden md:block">
          CONTACT US
        </button>
        <button className="md:hidden cursor-pointer" onClick={""}>
          <Icon.FaBars size={24} />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
