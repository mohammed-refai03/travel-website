import React, { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PackageBookingForm = ({ dest }) => {
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState("");
  const serviceFee = 250;

  const navigate = useNavigate();

  const total = dest.price * travelers + serviceFee;

  return (
    <div className="mt-4 border p-4 rounded-4  bg-white" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
      {/* Travel Date */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Travel Date</label>

        <div className="position-relative">
          <input
            type="date"
            className="form-control ps-5"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Icon */}
          <MdOutlineCalendarToday
            className="position-absolute"
            style={{
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />
        </div>
      </div>
      {/* Travelers Dropdown */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Number of Travelers</label>

        <div className="position-relative">
          <select
            className="form-select ps-5"
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} Traveler{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>

          {/* Icon */}
          <RxPerson
            className="position-absolute"
            style={{
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />
        </div>
      </div>
      {/* Price Breakdown */}
      <div className="mb-3 border-top pt-3">
        <h6>Travel Price - 
          ₹{dest.price} × {travelers} Traveler{travelers > 1 ? "s" : ""}
        </h6>
        <p className="text-muted mb-1">Service Fee - ₹{serviceFee}</p>
      </div>
      {/* Total */}
      <div className="d-flex justify-content-between align-items-center border-top pt-3 mb-3">
        <h4 className="mb-0">Total: ₹{total}</h4>
      </div>
      <button
        className="btn px-5 rounded-3"
        onClick={() => navigate(`/booking/${dest.id}`)}
      >
        Book Now
      </button>{" "}
    </div>
  );
};

export default PackageBookingForm;
