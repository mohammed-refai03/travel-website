import React, { useEffect } from "react";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-center p-5"
        style={{ backgroundColor: "#1D1D3F", color: "#fff" }}
        data-aos="fade-down"
      >
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <p className="display-7">
          Have questions about your trip? We're here to help you plan your
          perfect journey.
        </p>
      </div>

      {/* Contact Section */}
      <div className="min-vh-100 w-100 p-5 container">
        <div className="row g-4 align-items-start">
          {/* Contact Info */}
          <div className="col-lg-5" data-aos="fade-right">
            <h3 className="mb-4 mt-4">Contact Information</h3>

            <div className="d-flex gap-3 mb-3">
              <div className="contact-icon d-flex justify-content-center align-items-center">
                <FiPhone size={26} />
              </div>
              <div>
                <h6 className="fw-bold">Visit Us</h6>
                <p className="m-0">123 A Street, Mexi City</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-3">
              <div className="contact-icon d-flex justify-content-center align-items-center">
                <MdOutlineEmail size={26} />
              </div>
              <div>
                <h6 className="fw-bold">Email Us</h6>
                <p className="m-0">gotrip@gmail.com</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-3">
              <div className="contact-icon d-flex justify-content-center align-items-center">
                <FaPhone size={26} />
              </div>
              <div>
                <h6 className="fw-bold">Call Us</h6>
                <p className="m-0">(+91) 1234567890</p>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div className="contact-icon d-flex justify-content-center align-items-center">
                <FaRegClock size={26} />
              </div>
              <div>
                <h6 className="fw-bold">Working Hours</h6>
                <p className="m-0">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="m-0">Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="bg-white contact p-4 rounded-3 shadow-sm">
              <h3 className="mb-3 display-5">Send Us a Message</h3>

              <form className="d-flex flex-column gap-3">
                <div data-aos="fade-up" data-aos-delay="100">
                  <label className="input-label fw-bold text-muted">
                    Your Name *
                  </label>
                  <input type="text" className="input-field w-100" />
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="input-label fw-bold text-muted">
                    Your Email *
                  </label>
                  <input type="email" className="input-field w-100" />
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="input-label fw-bold text-muted">
                    Subject *
                  </label>
                  <input type="text" className="input-field w-100" />
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <label className="input-label fw-bold text-muted">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    className="input-field msg w-100"
                  ></textarea>
                </div>

                <button
                  className="mt-2 btn rounded"
                  style={{ background: "#FFD600", fontWeight: "600" }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
