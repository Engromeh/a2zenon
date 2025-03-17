import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import service1 from "../../../assets/service1.svg";

const services = [
  {
    id: 1,
    title: "تصميم",
    subtitle: "تصميم وتنفيذ المواقع",
    description: "نشارك معرفتنا من خلال مقالات تقنية وخرائط تعليمية.",
    image: service1,
  },
  {
    id: 2,
    title: "تطوير",
    subtitle: "تطوير تطبيقات الويب",
    description: "نقوم ببرمجة تطبيقات ويب متقدمة تلبي احتياجات العملاء.",
    image: service1,
  },
  {
    id: 3,
    title: "تسويق",
    subtitle: "خدمات التسويق الإلكتروني",
    description: "نقدم حلول تسويقية مبتكرة لزيادة وصولك إلى الجمهور المستهدف.",
    image: service1,
  },
  {
    id: 3,
    title: "تسويق",
    subtitle: "خدمات التسويق الإلكتروني",
    description: "نقدم حلول تسويقية مبتكرة لزيادة وصولك إلى الجمهور المستهدف.",
    image: service1,
  },

  {
    id: 3,
    title: "تسويق",
    subtitle: "خدمات التسويق الإلكتروني",
    description: "نقدم حلول تسويقية مبتكرة لزيادة وصولك إلى الجمهور المستهدف.",
    image: service1,
  },
];

const SubServices = () => {
  const [selectedService, setSelectedService] = useState(1);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex flex-wrap gap-2">
          <button
            className={`btn ${
              selectedService === 1
                ? "text-white fw-bold px-3"
                : "btn-light text-dark fw-bold px-3"
            }`}
            style={
              selectedService === 1
                ? { backgroundColor: "#4318FF", borderColor: "#4318FF" }
                : {}
            }
            onClick={() => setSelectedService(1)}
          >
            تطوير الأنظمة
          </button>
          <button
            className={`btn ${
              selectedService === 2
                ? "text-white fw-bold px-3"
                : "btn-light text-dark fw-bold px-3"
            }`}
            style={
              selectedService === 2
                ? { backgroundColor: "#4318FF", borderColor: "#4318FF" }
                : {}
            }
            onClick={() => setSelectedService(2)}
          >
            تصميم وتنفيذ المواقع
          </button>
          <button
            className={`btn ${
              selectedService === 3
                ? "text-white fw-bold px-3"
                : "btn-light text-dark fw-bold px-3"
            }`}
            style={
              selectedService === 3
                ? { backgroundColor: "#4318FF", borderColor: "#4318FF" }
                : {}
            }
            onClick={() => setSelectedService(3)}
          >
            التسويق الرقمي
          </button>
          <button
            className={`btn ${
              selectedService === 4
                ? "text-white fw-bold px-3"
                : "btn-light text-dark fw-bold px-3"
            }`}
            style={
              selectedService === 4
                ? { backgroundColor: "#4318FF", borderColor: "#4318FF" }
                : {}
            }
            onClick={() => setSelectedService(4)}
          >
            تطوير التطبيقات
          </button>
          <button
            className={`btn ${
              selectedService === 5
                ? "text-white fw-bold px-3"
                : "btn-light text-dark fw-bold px-3"
            }`}
            style={
              selectedService === 5
                ? { backgroundColor: "#4318FF", borderColor: "#4318FF" }
                : {}
            }
            onClick={() => setSelectedService(5)}
          >
            استضافة المواقع
          </button>
        </div>

        <div className="col-md-6 text-end">
          <h2 className="subservice-titel">
            الخدمات <span className="">الفرعية</span>
          </h2>
          <p className="text-muted">
            أي تو زيون المصدر الأمثل لكل ما يتعلق بالتسويق الإبداعي والفعال. نحن
            نقدم لك فرصة استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق.
          </p>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mt-5"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div key={service.id} className="col-md-3 mb-5">
              <div
                className="card card-bodye"
                style={{
                  width: "18rem",
                  backgroundColor: "#634AFF0D",
                  border: "none",
                }}
              >
                <div className="card-body p-0" style={{ direction: "rtl" }}>
                  <img src={service.image} alt={service.title} />
                  <h5 className="card-title" style={{ fontSize: "14px" }}>
                    {service.title}
                  </h5>
                  <h6
                    className="card-subtitle mb-2 fw-bold"
                    style={{ color: "black", fontSize: "20px" }}
                  >
                    {service.subtitle}
                  </h6>
                  <p
                    className="card-text"
                    style={{ color: "#6B7280", fontSize: "14px" }}
                  >
                    {service.description}
                  </p>
                  <div className="d-flex gap-2">
                    <button
                      className="btn"
                      style={{ backgroundColor: "#4318FF", color: "white" }}
                    >
                      اطلب الخدمة
                    </button>
                    <button
                      className="btn"
                      style={{ backgroundColor: "#634AFF0D", color: "#4318FF" }}
                    >
                      تفاصيل أكثر
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #D3D3D3;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background-color: #4318FF;
            width: 30px;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default SubServices;
