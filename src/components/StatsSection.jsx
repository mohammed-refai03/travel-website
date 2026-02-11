import { useEffect, useRef, useState } from "react";
import { FaClock, FaGlobe, FaSmile, FaSuitcaseRolling } from "react-icons/fa";

function Stat({ target, label,icon }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting){
           setVisible(true);
         if(!started.current) {
          started.current = true;
          startCount();
        }
      }},
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const startCount = () => {
    let current = 0;
    const increment = Math.ceil(target / 100);

    const interval = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);
  };

  return (
    <div
      ref={ref}
      style={{ textAlign: "center" }}
      className={`fade-item ${visible ? "show" : ""}`}
    >
      <i className="fs-1 mb-4">
        {icon}
      </i>
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          borderBottom: "3px solid #FFD600",
        
          
        }}
        className="text-center"
      >
        {count}+
      </h2>
      <p>{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        backgroundColor: "#0c0c30ed",
        color: "#fff",
        width: "100%",
      }}
      className="rounded-4 p-4 mx-3"
    >
      <div className="container">
        <div className="row text-center align-items-center gy-4">
          {/* Laptop 4 | Tablet 2 | Mobile 1 */}
          <div className="col-lg-3 col-md-6 col-12">
            <Stat target={7500} label="Happy Travelers" icon={<FaSmile />} />
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <Stat
              target={800}
              label="Tours Completed"
              icon={<FaSuitcaseRolling />}
            />
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <Stat target={10} label="Year of Experience" icon={<FaClock />} />
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <Stat target={45} label="Countries Served" icon={<FaGlobe />} />
          </div>
        </div>
      </div>
    </section>
  );
}
