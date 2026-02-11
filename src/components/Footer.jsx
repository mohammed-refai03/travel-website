import React from "react";
import {
  FaLocationDot,
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer
      className="text-light w-100  py-5 px-5 "
      style={{ backgroundColor: "#1D1D3F", color: "#fff" }}
    >
      <div className="">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-7">
            <h4 className="mb-4">GoTrip</h4>
            <p className="text-emphasis footer-link">
              Discover the world with us. We create unforgettable travel
              experiences that inspire and transform. Your adventure awaits.
            </p>

            <p className="mb-2 d-flex align-items-center gap-2">
              <FaLocationDot /> 123 A street, Mexi City
            </p>

            <p className="mb-2 d-flex align-items-center gap-2">
              <FaPhone /> (+91 123 456 7890)
            </p>

            <p className="mb-3 d-flex align-items-center gap-2">
              <MdOutlineMail /> gotrip@gmail.com
            </p>

            {/* Social icons */}
            <div className="d-flex gap-3">
              <FaInstagram className="social-link" />
              <FaFacebookF className="social-link" />
              <FaXTwitter className="social-link" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-5">
            <h5 className="mb-4">Top Destinations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="footer-link">
                  Maldives
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Dubai
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Paris
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Bali
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-7">
            <h5 className="mb-4">Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-lg-2 col-md-5">
            <h5 className="mb-4">Support</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <hr className="border-secondary mt-4" />

        <div className="text-center small text-emphasis">
          © {new Date().getFullYear()} GoTrip. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
