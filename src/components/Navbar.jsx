import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar-custom w-100 position-sticky  top-0 bg-white">
      <div className="container-fluid d-flex justify-content-between align-items-center p-2">
        {/* LOGO */}
        <div className="fw-bold fs-4 d-flex align-items-center"> <span className="fs-3" style={{color:'#ffd600'}}>Go</span>  Trip</div>

        {/* HAMBURGER → visible below lg ( < 992px ) */}
        <button
          className="btn border-0 d-lg-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <RxHamburgerMenu size={24} /> : <RxCross2 size={26} />}
        </button>

        {/* MENU */}
        <div className={`menu-container ${isOpen ? "open" : ""} d-lg-flex`}>
          <ul className="nav flex-column flex-lg-row gap-3 gap-lg-4 align-items-center mb-0">
            <li>
              <NavLink
                to="/"
                end
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/destinations"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/packages"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* BOOK BUTTON */}
          <button
            className="btn book-btn mt-3 mt-lg-0"
            onClick={() => {
              navigate("/packages");
              setIsOpen(false);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
