import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="d-flex justify-content-center align-items-center ">
        <div className="container row">
          <div className="col-md-4 text-light mb-4">
            <h2 className=" text-uppercase ">LOCATION</h2>
            <p className="mb-2">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4 text-light mb-4">
            <h2 className="mb-2">AROUND THE WEB</h2>

            <div className="mt-3 d-flex gap-2 justify-content-center ">
              <span className="link-icon ">
                <FaFacebook />
              </span>
              <span className="link-icon ">
                <FaTwitter />
              </span>
              <span className="link-icon ">
                <FaLinkedinIn />
              </span>
              <span className="link-icon ">
                <FaGlobe />
              </span>
            </div>
          </div>

          <div className="col-md-4 text-light mb-4 ">
            <h2 className="text-uppercase">ABOUT FREELANCER</h2>

            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>

      <p className="copyright">
        Copyright © Your Website {new Date().getFullYear()}
      </p>
    </>
  );
}

export default Footer;
