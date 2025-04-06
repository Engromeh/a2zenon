import React, { useState } from "react";
import html from "../assets/html5.svg";
const Maps = () => {
  const [activeButton, setActiveButton] = useState(0);

  const timelineData = [
    {
      img: html,
      title: "HTML",
      desc: "نقدم حلول برمجية متكاملة لتلبية احتياجات عملائنا في العالم الرقمي",
    },
    {
      img: html,
      title: "CSS",
      desc: "نقدم حلول برمجية متكاملة لتلبية احتياجات عملائنا في العالم الرقمي",
    },
    {
      img: html,
      title: "JS",
      desc: "نقدم حلول برمجية متكاملة لتلبية احتياجات عملائنا في العالم الرقمي",
    },
    {
      img: html,
      title: "React",
      desc: "نقدم حلول برمجية متكاملة لتلبية احتياجات عملائنا في العالم الرقمي",
    },
  ];
  const btnMaps = [
    "frontend",
    "backend",
    "backend",
    "التسويق الرقمي",
    "backend",
    "backend",
  ];
  return (
    <div className=" container">
      <h3 className="titel-all text-center mt-4 ">المدونة </h3>
      <p className=" text-center">
        اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال. نحن
        نقدم لك فرصة
        <br />
         استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق
      </p>

      <div className="d-flex justify-content-center gap-3 container mb-4">
        {btnMaps.map((btnMaps, index) => (
          <button
            key={index}
            className="btn fw-bold px-3"
            style={{
              backgroundColor: activeButton === index ? "#4318FF" : "#F8F9FA",
              color: activeButton === index ? "white" : "#6D7079",
              borderRadius: "8px",
              transition: "0.3s ease-in-out",
            }}
            onClick={() => setActiveButton(index)}
          >
            {btnMaps}
          </button>
        ))}
      </div>

      <div className="map2 py-5 position-relative">
        <div
          className="border-start   position-absolute top-0 bottom-0 start-50 translate-middle-x"
          style={{ border: "3px dashed #4318FF94" }}
        ></div>
        {timelineData.map((item, index) => (
          <div key={index} className="Map3 mb-5 align-items-center">
            {index % 2 === 0 ? (
              <>
                <div
                  className="col-md-6  "
                  style={{
                    backgroundColor: "#634AFF0D",
                    width: "25%",
                    padding: "25px",
                    borderRadius: "10px",
                    marginLeft: "18%",
                  }}
                >
                  <div className=" d-flex justify-content-between gap-3">
                    <img src={item.img} alt={item.title} width={80} />
                    <p className="mt-2 text-end">{item.desc}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn text-white"
                      style={{
                        backgroundColor: "#4318FF ",
                        borderRadius: "5px",
                      }}
                    >
                      الكورس
                    </button>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </>
            ) : (
              <>
                <div className="col-md-6"></div>
                <div
                  className="col-md-6  "
                  style={{
                    backgroundColor: "#634AFF0D",
                    width: "25%",
                    padding: "25px",
                    borderRadius: "10px",
                    marginLeft: "55%",
                  }}
                >
                  <div className=" d-flex justify-content-between gap-3">
                    <img src={item.img} alt={item.title} width={80} />
                    <p className="mt-2 text-end">{item.desc}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn text-white"
                      style={{
                        backgroundColor: "#4318FF ",
                        borderRadius: "5px",
                      }}
                    >
                      الكورس
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
