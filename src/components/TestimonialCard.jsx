import React, { useRef } from "react";
import testimonialData from "../data/testimonialData";
import { FaStar, FaQuoteRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-light py-5">
      <div className="container">
     
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          onBeforeInit={(swiper) => {
          
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {testimonialData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="d-flex justify-content-center">
                <div
                  className="bg-white rounded-4 shadow-sm p-4 position-relative"
                  style={{ maxWidth: "720px", width: "100%" }}
                >
           
                  <div className="text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  
                  <FaQuoteRight
                    className="position-absolute"
                    style={{
                      top: "20px",
                      right: "25px",
                      color: "#d1d5db",
                      fontSize: "26px",
                    }}
                  />

                 
                  <p className="mt-3 text-dark">"{data.message}"</p>

        
                  <h6 className="text-primary">{data.title}</h6>

                  <div className="d-flex align-items-center gap-3 mt-3">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="rounded-circle object-fit-cover"
                      width={50}
                      height={50}
                    />

                    <div className="text-start">
                      <h6 className="mb-0">{data.name}</h6>
                      <small className="text-muted">{data.location}</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

   
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4 text-center">
          <button
            ref={prevRef}
            className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
            style={{ width: "42px", height: "42px" }}
          >
            ‹
          </button>

          <div className="custom-pagination"></div>

          <button
            ref={nextRef}
            className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
            style={{ width: "42px", height: "42px" }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
