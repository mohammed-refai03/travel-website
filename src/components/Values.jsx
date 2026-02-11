import React from 'react'
import {valuesData } from '../data/whyChooseData';
import { FaRegHeart } from "react-icons/fa";

const Values = () => {
  return (
    <div className="container py-5">
      <div className="row g-4 ">
        {valuesData.map((data) => {
          const Icon = data.icon;
          return (
            <div key={data.id} className="col-12 col-sm-6 col-lg-3 d-flex">
              <div className="value-card w-100  p-4 rounded-4 bg-white">
                <div className="value-icon mb-3 d-flex justify-content-center align-items-center">
                  <Icon size={32} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: "#0c0c30ed" }}>
                  {data.title}
                </h5>
                <p className="text-muted small mb-0">{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Values