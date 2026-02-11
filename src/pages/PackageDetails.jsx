import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PackageBookingForm from "../components/PackageBookingForm";

import AOS from "aos";
import "aos/dist/aos.css";

const PackageDetails = ({ packages }) => {
  const { id } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const dest = packages.find((item) => item.id.toString() === id);

  if (!dest) {
    return <h2 className="text-center mt-5">Package not found</h2>;
  }

  return (
    <div className="row p-4 align-items-center justify-content-center">
      <div className="col-11 col-lg-8 py-3">
        {/* Hero Image */}
        <div className="mb-4" data-aos="fade-up">
          <img
            src={dest.image}
            alt={dest.title}
            className="w-100 rounded-4"
            style={{ height: "420px", objectFit: "cover" }}
          />
        </div>

        {/* Title + Price */}
        <div
          className="d-block d-md-flex justify-content-between align-items-center flex-wrap mb-3"
          data-aos="fade-right"
        >
          <div>
            <h2 className="fw-bold">{dest.title}</h2>
            <p className="text-muted">{dest.location}</p>
          </div>

          <h3 className="fw-bold" style={{ color: "#ffb300" }}>
            ₹{dest.price}
          </h3>
        </div>

        {/* Info Bar */}
        <div className="row text-center mb-4" data-aos="fade-up">
          <div className="col-md-3 col-6 mb-2">
            <div className="p-2 border rounded-3">
              <h6>Duration</h6>
              <p className="fw-bold">{dest.duration}</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-2">
            <div className="p-2 border rounded-3">
              <h6>Category</h6>
              <p className="fw-bold">{dest.category}</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-2">
            <div className="p-2 border rounded-3">
              <h6>Rating</h6>
              <p className="fw-bold d-flex align-items-center justify-content-center gap-2">
                <FaStar style={{ color: "#ffb300" }} /> {dest.rating}
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-2">
            <div className="p-2 border rounded-3">
              <h6>Reviews</h6>
              <p className="fw-bold">{dest.reviews || 120}</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-5" data-aos="fade-up">
          <h4 className="fw-bold mb-2">Overview</h4>
          <p className="text-muted">
            {dest.description ||
              "Experience an unforgettable journey with this beautifully crafted travel package. Enjoy scenic views, local culture, exciting activities, and comfortable stays designed to give you the best travel experience."}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-5" data-aos="fade-up">
          <h4 className="fw-bold mb-2">Highlights</h4>

          <ul className="d-flex gap-3 flex-wrap">
            {dest.highlights?.map((item, index) => (
              <li
                key={index}
                className="bg-light py-2 px-3 rounded-5"
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                {item}
              </li>
            )) || (
              <>
                <li>Comfortable hotel stay</li>
                <li>Guided sightseeing tour</li>
                <li>Adventure & fun activities</li>
                <li>Local food experience</li>
              </>
            )}
          </ul>
        </div>

        {/* Includes */}
        <div className="mb-5" data-aos="fade-up">
          <h4 className="fw-bold">Package Includes</h4>

          <ul className="d-flex gap-3 flex-wrap">
            {dest.includes?.map((item, index) => (
              <li
                key={index}
                className="bg-light py-2 px-3 rounded-5"
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Itinerary */}
        <div className="mb-3" data-aos="fade-up">
          <h4 className="fw-bold mb-4">Day-wise Itinerary</h4>

          <div className="timeline">
            {dest.itinerary.map((day, index) => (
              <div
                key={index}
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="timeline-circle">{index + 1}</div>

                <div className="timeline-content shadow-sm">
                  <h6 className="fw-bold mb-1">Day {index + 1}</h6>
                  <p className="mb-0 text-muted">{day}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOOKING SIDEBAR */}
      <div className="col-11 col-lg-4  py-5">
        <div className="sticky-booking" data-aos="fade-left">
          <PackageBookingForm dest={dest} />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
