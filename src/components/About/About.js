import React from "react";
import "./about.css";
import { FaStar } from "react-icons/fa";

function About() {
  return (
    <div className="bg-main d-flex flex-column  justify-content-center align-items-center text-light ">
      <h2 className=" text-uppercase ">about component</h2>

      <div>
        <span className="line bg-light "></span>
        <span className="text-light">
          <FaStar />
        </span>
        <span className="line bg-light "></span>
      </div>

      <div className="d-flex w-50 gap-5 mt-2">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>

        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}

export default About;
