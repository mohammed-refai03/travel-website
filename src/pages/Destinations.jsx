import React, { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";
import { FaFilter, FaSearch } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Destinations = ({ destinations }) => {
  const filters = [
    "All Destinations",
    "Mountain",
    "Beach",
    "Adventure",
    "City",
  ];

  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All Destinations");
 const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const filteredData = (destinations || []).filter((item) => {
    const matchesCategory =
      selectedFilter === "All Destinations" ||
      item.category?.toLowerCase() === selectedFilter.toLowerCase();

    const matchesSearch = item.name
      ?.toLowerCase()
      .includes(searchInput.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });


  return (
    <div>
      {/* HERO */}
      <div
        className="text-center p-5"
        style={{
          backgroundColor: "#1D1D3F",
          color: "#fff",
          minHeight: "250px",
        }}
      >
        <h1 className="display-4 fw-bold" data-aos="fade-down">
          Explore Destinations
        </h1>

        <p className="display-7" data-aos="fade-up">
          Discover amazing places around the world, from tropical paradises to
          bustling cities and serene mountain retreats.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="sticky-wrapper">
        <div
          className="sticky-filter d-flex flex-column flex-md-row gap-3 p-3 p-md-3"
          data-aos="fade-up"
        >
          {/* TOP ROW (Search + Filter Icon) */}
          <div className="d-flex justify-content-between align-items-center">
            {/* SEARCH */}
            <div className="position-relative ">
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search packages..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <FaSearch className="position-absolute start-0 ms-3 text-muted top-50 translate-middle-y" />
            </div>

            {/* FILTER ICON (Mobile & Tablet only) */}
            <button
              className="btn filter-toggle ms-2 d-lg-none"
              onClick={() => setShowFilter(!showFilter)}
            >
              <FaFilter />
            </button>
          </div>

          {/* FILTER PANEL */}
          <div className={`filter-panel w-50 ${showFilter ? "show" : ""}`}>
            {filters.map((fil, index) => (
              <span
                key={index}
                className={`display-8 py-2 px-3 rounded-5 fw-bold filter-chip ${
                  selectedFilter === fil
                    ? "bg-primary text-white"
                    : "bg-light text-dark"
                }`}
                onClick={() => {
                  setSelectedFilter(fil);
                  setShowFilter(false); // auto close in mobile
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                {fil}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* DESTINATION CARDS */}
      <div className="min-vh-100 p-5 bg-light" data-aos="fade-up">
        <DestinationCard filteredData={filteredData} />
      </div>
    </div>
  );
};

export default Destinations;
