import React from "react";
import * as Icon from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-slate-900 text-white uppercase md:flex justify-between items-start p-10 md:p-20">
      <div className="md:flex justify-between items-start  w-2/3">
        <div>
          <div>
            <div className="font-bold text-2xl">GIWU</div>
            <div>© Copyright Finsweet 2022</div>
            <div className="italic capitalize">Developer Elozino</div>
          </div>
          <div className="mt-10">
            <p>(480) 555-0103</p>
            <p>4517 Washington Ave. </p>
            <p>finsweet@example.com</p>
          </div>
        </div>
        <div className="md:flex justify-between w-1/3 mr-20 mt-5">
          <div>
            <h2 className="font-bold mb-3">Quicklinks</h2>
            <p>About us</p>
            <p>sermon</p>
            <p>blog</p>
            <p>events</p>
          </div>
          <div className="mt-5">
            <h2 className="font-bold">Connect</h2>
            <div className="flex justify-between items-center mt-3">
              <p>
                <Icon.AiFillFacebook />
              </p>
              <p>
                <Icon.AiFillTwitterCircle />
              </p>
              <p>
                <Icon.AiFillLinkedin />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="uppercase font-bold text-2xl">
          Subscribe to get Latest Updates and News
        </h1>
        <div className="flex justify-between items-center border-solid border-2 border-white rounded p-2 mt-5">
          <input
            type="email"
            name=""
            id=""
            placeholder="yourGmail@gmail.com"
            className="border-none bg-transparent"
          />
          <button className="bg-pink-200 text-black px-4 py-2 rounded">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
