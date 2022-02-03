import React from "react";
import * as Icon from "react-icons/fa";

function Team({ image, profile, role }) {
  return (
    <div>
      <div className="my-10">
        <div className=" bg-pink-50 mx-4 p-8">
          <div className="flex justify-center">
            <img src={image} alt="image" />
          </div>
          <h3 className="uppercase text-center mt-3 font-medium">{profile}</h3>
          <p className="uppercase text-center mb-2 font-light">{role}</p>
          <div className="flex items-center justify-center">
            <a href="#" className="mx-2">
              <Icon.FaFacebook />
            </a>
            <a href="#" className="mx-2">
              <Icon.FaTwitter />
            </a>
            <a href="#" className="mx-2">
              <Icon.FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
