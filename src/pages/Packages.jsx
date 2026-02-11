import React, { useState, useMemo, useEffect } from "react";
import PackageCard from "../components/PackageCard";
import { FaFilter, FaSearch, FaSort } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilterCircleDollar, FaFilterCircleXmark } from "react-icons/fa6";
// optional for sticky css

const Packages = ({ packages = [] }) => {
  const filters = ["All packages", "Budget", "Luxury", "Adventure", "Family"];

  const [selectedFilter, setSelectedFilter] = useState("All packages");
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("Featured");
const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  /* ---------------- FILTER + SEARCH + SORT ---------------- */
  const filteredPackages = useMemo(() => {
    let data = [...packages];

    // Filter by category
    if (selectedFilter !== "All packages") {
      data = data.filter(
        (item) => item.category?.toLowerCase() === selectedFilter.toLowerCase(),
      );
    }

    // Search by title
    if (searchInput.trim() !== "") {
      data = data.filter((item) =>
        (item.title || "").toLowerCase().includes(searchInput.toLowerCase()),
      );
    }

    // Sorting
    if (sortOption === "Price Low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price High") {
      data.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Top Rated") {
      data.sort((a, b) => b.rating - a.rating);
    }

    return data;
  }, [packages, selectedFilter, searchInput, sortOption]);

  return (
    <div>
      {/* HERO */}
      <div
        className="text-center py-5"
        style={{ backgroundColor: "#1D1D3F", color: "#fff" }}
      >
        <h1 className="display-5 fw-bold" data-aos="fade-down">
          Tour Packages
        </h1>
        <p className="display-7" data-aos="fade-up">
          Expertly crafted travel experiences for every budget and adventure
          style.
        </p>
      </div>

      {/* ---------------- STICKY FILTER BAR ---------------- */}
      <div className="sticky-wrapper">

        {/* MOBILE / TABLET FILTER ICON */}
        <div className="d-lg-none p-3 bg-white shadow-sm d-flex justify-content-between align-items-center">
          <h6 className="m-0">Filters</h6>

           <button
                        className="btn filter-toggle ms-2 d-lg-none"
                        onClick={() => setShowFilter(!showFilter)}
                      >
                        <FaFilter />
                      </button>
        </div>

        {/* FILTER PANEL */}
        <div
          className={`filter-panel bg-white ${showFilter ? "show" : ""} d-lg-flex`}
        >
          {/* SEARCH */}
          <div className="position-relative">
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search packages..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <FaSearch className="position-absolute start-0 ms-3 text-muted top-50 translate-middle-y" />
          </div>

          {/* FILTER BUTTONS */}
          <div className="d-flex flex-wrap gap-2">
            {filters.map((fil, index) => (
              <span
                key={index}
                className={`py-2 px-3 rounded-5 fw-bold ${
                  selectedFilter === fil
                    ? "bg-primary text-white"
                    : "bg-light text-dark"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedFilter(fil)}
              >
                {fil}
              </span>
            ))}
          </div>

          {/* SORT */}
          <div style={{ minWidth: "200px" }}>
            <select
              className="form-control"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Featured">Featured</option>
              <option value="Price Low">Price: Low to High</option>
              <option value="Price High">Price: High to Low</option>
              <option value="Top Rated">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* ---------------- PACKAGE LIST ---------------- */}
      <div className="bg-light py-5">
        <div className="container">
          <p className="fw-semibold mb-4" data-aos="fade-right">
            Showing {filteredPackages.length} Packages
          </p>

          <div className="row g-4">
            {filteredPackages.map((pack, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 col-xl-3"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <PackageCard pack={pack} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
