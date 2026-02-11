import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PackageCard = ({ pack }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/packages/${pack.id}`);
  };

  return (
    <div className="card h-100 border-0 shadow-sm d-flex flex-column rounded-4 overflow-hidden">
      {/* Image */}
      <div className="position-relative">
        <img
          src={pack.image}
          className="img-fluid w-100"
          style={{ height: "200px", objectFit: "cover" }}
          alt={pack.title}
        />
        <span className="position-absolute top-0 end-0 bg-light px-2 py-1 m-2 rounded-3 small">
          {pack.category}
        </span>
      </div>

      {/* Body */}
      <div className="card-body d-flex flex-column">
        {/* Title + Price */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="bg-light px-2 py-1 rounded-3 mb-0">{pack.title}</h6>
          <h6 className="bg-light px-2 py-1 rounded-3 mb-0 fw-bold">
            Rs.{pack.price}
          </h6>
        </div>

        {/* Description */}
        <p className="small text-muted">{pack.description}</p>

        {/* Rating + Duration */}
        <div className="d-flex flex-wrap gap-2 mb-2">
          <span className="bg-light px-2 py-1 rounded-3 small d-flex align-items-center gap-1">
            <FaStar /> {pack.rating}
          </span>
          <span className="bg-light px-2 py-1 rounded-3 small">
            {pack.duration}
          </span>
        </div>

        {/* Highlights */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {pack.highlights?.map((h, i) => (
            <span key={i} className="bg-light px-2 py-1 small rounded-3">
              {h}
            </span>
          ))}
        </div>

        {/* ⭐ Button always at bottom */}
        <div className="mt-auto">
          <button
            className="btn btn-warning w-100 rounded-pill fw-bold"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
