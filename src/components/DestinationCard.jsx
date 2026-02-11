import React from "react";
import destinations from "../data/destinations";
import { FaStar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const DestinationCard = ({filteredData}) => {
  return (
    <div className="row g-4">
      {filteredData.map((dest, index) => (
        <div key={index} className="col-11 col-md-4 col-lg-3">
          <div
            className="custom-card-container position-relative overflow-hidden rounded-4"
            style={{ height: "400px" }}
          >
            {/* Image */}
            <img src={dest.image} alt={dest.name} className="zoom-img" />

            {/* Overlay */}
            <div className="card-overlay d-flex flex-column justify-content-end p-3 text-white">
              <span
                className="badge-top px-3 py-1 rounded-5 text-dark fw-bold mb-2"
                style={{ backgroundColor: "#ffd600", width: "fit-content" }}
              >
                {dest.category}
              </span>

              <p className="mb-1">
                <FaLocationPin /> {dest.country}
              </p>

              <h5 className="fw-bold mb-0">{dest.attractions}</h5>
              <h4 className="mb-2">{dest.name}</h4>

              <p className="d-flex gap-2 align-items-center mb-1">
                <FaStar className="text-warning" />
                <strong>{dest.rating}</strong>
                <small>({dest.reviews} reviews)</small>
              </p>

              {/* Hover Reveal Text */}
              <p className="hover-text">{dest.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationCard;
