import React from "react";
import "./hero.css";
import { FaStar } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero bg-main d-flex justify-content-center align-items-center ">
      <div className=" container text-center">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          width={140}
          alt="avatar"
        />

        <h2 className="text-uppercase text-light mt-4 mb-3 fs-1 fw-bolder">
          start Framework
        </h2>

        <div>
          <span className="line bg-light "></span>
          <span className="text-light">
            <FaStar />
          </span>
          <span className="line bg-light "></span>
        </div>

        <p className="text-light mt-2">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}

export default Hero;
