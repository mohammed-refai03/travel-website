import React from 'react'
import whyChooseData from '../data/whyChooseData'

const WhyChoose = () => {
  return (
    <div className="container">
      <div className="row g-4 justify-content-center">
        {whyChooseData.map((data) => {
          const Icon = data.icon;

          return (
            <div key={data.id} className="col-12 col-sm-6 col-lg-4 d-flex">
              <div className="whychoose-card w-100 text-center p-4 rounded-4 bg-white">
                <div className="icon-circle mx-auto mb-3 d-flex justify-content-center align-items-center">
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

export default WhyChoose