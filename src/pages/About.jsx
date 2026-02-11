import React, { useEffect } from "react";
import StatsSection from "../components/StatsSection";
import WhyChoose from "../components/WhyChoose";
import Values from "../components/Values";
import TeamMemberCard from "../components/TeamMemberCard";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        className="text-center p-5"
        style={{ backgroundColor: "#1D1D3F", color: "#fff" }}
        data-aos="fade-down"
      >
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="display-7">
          We've been crafting extraordinary travel experiences that inspire,
          transform, and create memories that last a lifetime.
        </p>
      </div>

      {/* Journey Section */}
      <div className="row p-5 min-vh-100 align-items-center container mx-auto">
        {/* Text */}
        <div className="col-12 col-md-6" data-aos="fade-right">
          <h4 className="fw-bold mb-3">Our Journey</h4>
          <div className="text-muted">
            <p>
              GoTrip began with a simple belief: that travel has the power to
              transform lives. Founded by Alexandra Rivera after her
              life-changing backpacking trip through Southeast Asia, we set out
              to share that transformative power with travelers around the
              world.
            </p>

            <p>
              What started as a small team of passionate travelers has grown
              into a global family of over 200 experts, each bringing their
              unique perspectives and local knowledge to craft experiences that
              go beyond the ordinary.
            </p>

            <p>
              Today, we've helped over 15,000 travelers discover the world's
              most beautiful destinations, from pristine beaches to ancient
              temples, from mountain peaks to bustling city streets. Every
              journey is an opportunity to learn, grow, and connect.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="col-12 col-md-6 text-center" data-aos="fade-left">
          <img
            src="images/about-img.jpg"
            alt="About GoTrip"
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>

      {/* Values Section */}
      <section className="values bg-light min-vh-100 p-5 text-center">
        <h1 className="fw-bold mb-2" data-aos="fade-up">
          Our Values
        </h1>

        <p
          className="mb-5 text-muted display-7"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          The principles that guide everything we do
        </p>

        <div data-aos="fade-up" data-aos-delay="300">
          <Values />
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="stat d-flex align-items-center justify-content-center p-5"
        data-aos="zoom-in"
      >
        <StatsSection />
      </section>

      {/* Team Section */}
      <section className="team-members bg-light min-vh-100 p-5">
        <h1 className="text-center fw-bold mb-2" data-aos="fade-up">
          Meet Our Team
        </h1>

        <p
          className="text-center text-muted mb-5 display-7"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Passionate people behind unforgettable journeys
        </p>

        <div data-aos="fade-up" data-aos-delay="300">
          <TeamMemberCard />
        </div>
      </section>
    </div>
  );
};

export default About;
