import { NavLink } from "react-router-dom";
import "./header.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    if (document.documentElement.scrollTop > 20) {
      document.querySelector("nav").classList.remove("py-4");
    } else {
      document.querySelector("nav").classList.add("py-4");
    }
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 20) {
        document.querySelector("nav").classList.remove("py-4");
      } else {
        document.querySelector("nav").classList.add("py-4");
      }
    });
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <h2 className="navbar-brand">
            <NavLink to="/" className=" text-white text-uppercase fw-bolder ">
              START FRAMEWORK
            </NavLink>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse text-lg-end ms-auto mb-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav_active nav-link text-uppercase fw-bold text-white text-uppercase  mt-3 mt-md-0 px-2"
                      : "nav-link text-uppercase fw-bold text-white text-uppercase  mt-3 mt-md-0 px-2"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive
                      ? "nav_active nav-link text-uppercase fw-bold text-white text-uppercase  mt-3 mt-md-0 px-2"
                      : "nav-link text-uppercase fw-bold text-white text-uppercase  mt-3 mt-md-0 px-2"
                  }
                >
                  portfolio
                </NavLink>
              </li>

              <li className="nav-item me-2">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav_active nav-link text-uppercase fw-bold text-white text-uppercase  mt-3 mt-md-0 px-2"
                      : "nav-link text-uppercase fw-bold text-white text-uppercase  mt-3 mt-md-0 px-2"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
