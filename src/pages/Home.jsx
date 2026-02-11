import React, { useEffect } from "react";
import "../styles/Home.css";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import WhyChoose from "../components/WhyChoose";
import StatsSection from "../components/StatsSection";
import TestimonialCard from "../components/TestimonialCard";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ packages }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <header className="hero-section container-fluid py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-12 col-md-6" data-aos="fade-right">
              <div
                className="animate-left p-4 rounded-4 text-white h-100"
                style={{ backgroundColor: "#ffffff25" }}
              >
                <h3 className="display-5">
                  Explore The{" "}
                  <span style={{ color: "#FFD600" }}>World With Us</span>
                </h3>

                <p style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}>
                  Discover beautiful destinations unforgettable experiences and
                  affordable tour packages tailored just for you.
                </p>

                <button
                  className="btn mt-2"
                  onClick={() => navigate(`/packages`)}
                >
                  Explore Tour
                </button>
              </div>
            </div>

            <div className="col-12 col-md-6" data-aos="fade-left">
              <div className="animate-right d-flex justify-content-center justify-content-md-end gap-3 flex-wrap">
                <img
                  src="/images/bali-potrait.jpg"
                  alt=""
                  className="hero-img"
                />
                <img
                  src="/images/dubai-potrait.jpg"
                  alt=""
                  className="hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DESTINATIONS */}
      <section className="popular-destinations container-fluid py-5">
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="fade-up">
          Popular Destinations
        </h2>

        <div className="container mt-4">
          <div className="row g-3">
            <div className="col-12 col-md-4" data-aos="zoom-in">
              <div
                className="custom-card-container position-relative overflow-hidden rounded"
                style={{ height: "510px" }}
              >
                <img
                  src="images/bali-potrait.jpg"
                  className="zoom-img"
                  alt="Bali"
                />
                <div className="card-overlay d-flex flex-column justify-content-end p-3 text-white">
                  <h4 className="fw-bold">Bali</h4>
                  <p className="hover-text">
                    Experience the thrill of Bali with volcano trekking, water
                    sports, and beautiful temples surrounded by tropical
                    paradise.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div className="row g-3">
                <div className="col-12 col-sm-6" data-aos="fade-up">
                  <div
                    className="custom-card-container position-relative overflow-hidden rounded"
                    style={{ height: "250px" }}
                  >
                    <img src="images/Kerala.jpg" className="zoom-img" alt="" />
                    <div className="card-overlay d-flex flex-column justify-content-end p-3 text-white">
                      <h4 className="fw-bold">Kerala</h4>
                      <p className="hover-text">
                        Explore the beauty of Kerala, lakes, Nature, and
                        beautiful temples surrounded by tropical paradise.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-12 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div
                    className="custom-card-container position-relative overflow-hidden rounded"
                    style={{ height: "250px" }}
                  >
                    <img
                      src="images/Southkorea.jpg"
                      className="zoom-img"
                      alt=""
                    />
                    <div className="card-overlay d-flex flex-column justify-content-end p-3 text-white">
                      <h4 className="fw-bold">South Korea</h4>
                      <p className="hover-text">
                        A vibrant blend of ancient traditions, cutting-edge
                        technology, and stunning landscapes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                  <div
                    className="custom-card-container position-relative overflow-hidden rounded"
                    style={{ height: "250px" }}
                  >
                    <img
                      src="/images/hero-bg.jpg"
                      className="zoom-img"
                      alt=""
                    />
                    <div className="card-overlay d-flex flex-column justify-content-end p-3 text-white">
                      <h4 className="fw-bold">Vietnam</h4>
                      <p className="hover-text">
                        A Southeast Asian gem offering breathtaking natural
                        scenery, bustling cities, and rich history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="package min-vh-100 bg-light d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="text-center display-5 fw-bold" data-aos="fade-up">
          Tour Packages
        </h1>

        <p className="text-center p-2 mb-3" data-aos="fade-up">
          Carefully curated experiences for every type of traveler
        </p>

        <div className="row g-4 p-5 mx-0">
          {packages.map(
            (pack) =>
              pack.id <= 4 && (
                <div
                  key={pack.id}
                  className="col-12 col-md-6 col-lg-3"
                  data-aos="zoom-in"
                >
                  <PackageCard pack={pack} />
                </div>
              ),
          )}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="services min-vh-100 px-4 py-4">
        <h1 className="text-center display-5 fw-bold mb-3" data-aos="fade-up">
          Why Choose Us
        </h1>

        <p className="text-center mb-5" data-aos="fade-up">
          we make your travel experience smooth, safe, and unforgettable with
          our expert planning and customer-first service.
        </p>

        <div data-aos="fade-up">
          <WhyChoose />
        </div>
      </section>

      {/* STATS */}
      <section
        className="d-flex justify-content-center align-items-center py-4"
        data-aos="zoom-in"
      >
        <StatsSection />
      </section>

      {/* TESTIMONIAL */}
      <section className="min-vh-100 bg-light px-4 py-4">
        <div className="text-center my-4">
          <h4 className="m-1" style={{ color: "#FFD600" }} data-aos="fade-up">
            Testimonials
          </h4>

          <h1 className="m-1 display-4 fw-bold" data-aos="fade-up">
            What Our Travelers Say
          </h1>

          <p className="m-1" data-aos="fade-up">
            Real stories from real adventurers who explored the world with us
          </p>
        </div>

        <div data-aos="fade-up">
          <TestimonialCard />
        </div>
      </section>
    </>
  );
};

export default Home;
