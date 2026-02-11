import React, { useEffect } from "react";
import teamData from "../data/teamData";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamMemberCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animate only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="row g-4">
      {teamData.map((mem, index) => (
        <div
          key={mem.id}
          className="col-lg-3 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay={index * 150} // stagger animation
        >
          <div className="card border-0 shadow-sm team-card h-100 text-center">
            {/* Image */}
            <div className="position-relative overflow-hidden">
              <img
                src={mem.image}
                alt={mem.name}
                className="img-fluid w-100 team-img"
              />

              {/* Social Overlay */}
              <div className="social-overlay d-flex justify-content-center align-items-center gap-3">
                  <FaInstagram className="social-icon" /> 
                  <FaFacebookF className="social-icon" />
                  <FaXTwitter className="social-icon" />
              </div>
            </div>

            {/* Content */}
            <div className="card-body">
              <h5 className="fw-bold mb-1">{mem.name}</h5>
              <p className="text-primary mb-2">{mem.role}</p>
              <p className="text-muted small">{mem.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberCard;
