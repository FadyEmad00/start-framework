import React from "react";
import { FaStar } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="text-center mb-2">
          <h2 className="text-uppercase ">CONATCT SECTION</h2>
          <div>
            <span className="line bg-dark"></span>
            <span className="text-dark">
              <FaStar />
            </span>
            <span className="line bg-dark "></span>
          </div>
        </div>

        <form>
          <div class="group">
            <input type="text" required />
            <label>Name:</label>
          </div>

          <div class="group">
            <input type="number" required />
            <label>Age:</label>
          </div>
          <div class="group">
            <input type="email" required />
            <label>Email:</label>
          </div>
          <div class="group">
            <input type="password" required />
            <label>Password:</label>
          </div>

          <div className="submit-btn">
            <button type="submit" className="btn btn-danger">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
