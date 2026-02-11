import React, { useState } from "react";
import { useParams } from "react-router-dom";
import packages from "../data/packages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaCreditCard,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";
import '../styles/Booking.css'
import { MdOutlineCalendarToday } from "react-icons/md";

const BookingPage = () => {
  const { id } = useParams();
  const dest = packages.find((p) => p.id.toString() === id);

  const [step, setStep] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
 
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    date: "",
    address: "",
    specialRequest: "",
    paymentMethod: "card",
  });

  if (!dest) return <h2 className="text-center mt-5">Package not found</h2>;

  const serviceFee = 250;
  const total = dest.price * form.travelers + serviceFee;

  
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Email
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    // Phone
    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone";
    }

    // Date
    if (!form.date) {
      newErrors.date = "Travel date required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const confirmPayment = () => {
    setTimeout(() => setPaymentSuccess(true), 1200);
  };

  return (
    <div className="container py-5">
      {/* ---------- STEP HEADER ---------- */}
      <div
        data-aos="fade-down"
        className="stepper mb-5 text-white p-4 rounded-3"
        style={{ backgroundColor: "#1d1d3f" }}
      >
        <div className={`step ${step >= 1 ? "active" : ""}`}> Traveller</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>Review</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>Payment</div>
      </div>

      <div className="row">
        {/* LEFT SIDE FORM */}
        <div className="col-lg-8">
          {/* ---------- STEP 1 ---------- */}
          {step === 1 && (
            <div
              data-aos="fade-up"
              className="card p-4 shadow-lg border-0 rounded-4"
            >
              <h4 className="mb-4 fw-bold" style={{ color: "#1d1d3f" }}>
                Traveller Information
              </h4>

              {/* NAME */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name *</label>
                <div className="input-group-modern">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={`form-control modern-input ${
                      errors.name && "is-invalid"
                    }`}
                  />
                </div>
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email Address *
                </label>
                <div className="input-group-modern">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    className={`form-control modern-input ${
                      errors.email && "is-invalid"
                    }`}
                  />
                </div>
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              {/* PHONE */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number *</label>
                <div className="input-group-modern">
                  <FaPhoneAlt className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className={`form-control modern-input ${
                      errors.phone && "is-invalid"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </div>

              {/* DATE */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Travel Date *</label>
                <div className="input-group-modern">
                  <MdOutlineCalendarToday className="input-icon" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={`form-control modern-input ${
                      errors.date && "is-invalid"
                    }`}
                  />
                </div>
                {errors.date && (
                  <small className="text-danger">{errors.date}</small>
                )}
              </div>

              {/* TRAVELERS */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Number of Travelers
                </label>
                <div className="input-group-modern">
                  <FaUsers className="input-icon" />
                  <select
                    name="travelers"
                    value={form.travelers}
                    onChange={handleChange}
                    className="form-select modern-input"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} Traveler{n > 1 && "s"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="btn w-100 mt-3 rounded-pill fw-semibold"
                onClick={handleNext}
              >
                Continue →
              </button>
            </div>
          )}

          {/* ---------- STEP 2 ---------- */}
          {step === 2 && (
            <div data-aos="zoom-in" className="card p-4 shadow-sm rounded-4">
              <h4 style={{ color: "#1d1d3f" }} className="text-center">
                Review Booking
              </h4>

              <ul className="list-group list-group-flush">
                <li className="">
                  {" "}
                  <b>Name: </b>
                  {form.name}
                </li>
                <li className="">
                  <b>Email:</b> {form.email}
                </li>
                <li className="">
                  <b>Phone:</b> {form.phone}
                </li>
                <li className="">
                  <b>Date:</b> {form.date}
                </li>
                <li className="">
                  <b>Travelers:</b> {form.travelers}
                </li>
                <li className="mb-2">
                  <b>Request:</b> {form.specialRequest || "None"}
                </li>
              </ul>

              <div className="d-flex gap-2 mt-3">
                <button
                  className="btn w-50"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button className="btn  w-50" onClick={nextStep}>
                  Proceed to Payment →
                </button>
              </div>
            </div>
          )}

          {/* ---------- STEP 3 ---------- */}
          {step === 3 && (
            <div data-aos="fade-left" className="card p-4 shadow-sm rounded-4">
              <h4 className="mb-4">Payment</h4>

              <div
                className=" p-2 rounded-4"
                style={{ backgroundColor: "#bbb8b833" }}
              >
                <div className="p-2">
                  <h5 className="mb-3">Payment Summary</h5>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <div>
                      <p className="m-0">Package Price</p>
                      <p className="mt-1">Service Fee</p>
                    </div>
                    <div className="m-0">
                      <p className="m-0">
                        ₹{dest.price} × {form.travelers}
                      </p>
                      <p className="mt-1">₹{serviceFee}</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center p-2">
                  <p className="m-0 fs-5 fw-bold">Total</p>
                  <p className="mt-1 fs-5 fw-bold">₹{total}</p>
                </div>
              </div>

              <button className="btn w-100 mt-3" onClick={confirmPayment}>
                <FaCreditCard /> Confirm Payment
              </button>

              <button className="btn w-100 mt-2" onClick={prevStep}>
                ← Back
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SUMMARY */}
        <div className="col-lg-4 mt-3">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="card p-3 shadow  rounded-4"
          >
            <img src={dest.image} alt={dest.title} className="rounded mb-3" />
            <h5>{dest.title}</h5>
            <p>{dest.duration}</p>

            <div className="d-flex justify-content-between border-bottom py-2">
              <div>
                <p className="m-1 fw-bold text-muted">Travellers</p>
                <p className="m-1 fw-bold text-muted">Travel Price</p>
                <p className="m-1 fw-bold text-muted">Service Fee</p>
              </div>
              <div>
                <p className="m-0">{form.travelers}</p>
                <p className="m-0">
                  ₹{dest.price} × {form.travelers}
                </p>
                <p className="m-1">₹{serviceFee}</p>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-3">
              <h5>Total</h5>
              <h5>₹{total}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- SUCCESS OVERLAY ---------- */}
      {paymentSuccess && (
        <div className="payment-overlay">
          <div data-aos="zoom-in" className="payment-box text-center">
            <img src="/images/payment.jpg" alt="" width="150px" />
            <h4>Booking Confirmed!</h4>
            <p>Your trip is successfully booked.</p>
            <h6>Booking ID: TRVL{Math.floor(Math.random() * 100000)}</h6>
            <button
              className="btn mt-3"
              onClick={() => (window.location.href = "/")}
            >
              Go Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
