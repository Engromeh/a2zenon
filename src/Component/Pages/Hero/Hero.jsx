import React from "react";
import videoicon from "../../../assets/videoicon.svg";
import idea from "../../../assets/idea.svg";
import Briefcase from "../../../assets/Briefcase.svg";
import markating from "../../../assets/markating.svg";
const Hero = () => {
  return (
    <section className="container py-5  " style={{ marginTop: "6%" }}>
      <div className="hero-bg-gold"></div>
      <div className="hero-bg-blue"></div>
      <div className="row align-items-center">
        <div className="col-md-6 position-relative text-center">
          <div className="position-relative d-inline-block">
            <img
              src="https://via.placeholder.com/200"
              alt="Person"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="position-absolute top-0 start-0 bg-white p-3 shadow rounded">
            <strong>5K+</strong>
            <p className="mb-0">سنوات الخبرة</p>
          </div>
          <div className="position-absolute top-50 start-0 bg-white p-3 shadow rounded">
            <strong>2K+</strong>
            <p className="mb-0">المشاريع المنجزة</p>
          </div>
          <div className="position-absolute bottom-0 start-50 bg-white p-3 shadow rounded">
            <strong>250+</strong>
            <p className="mb-0">الجوائز المكتسبة</p>
          </div>
        </div>

        <div className="col-md-6 text-md-end text-center">
          <h2 style={{ fontSize: "65px" }}>
            حلول <span style={{ color: "#4318FF" }}>برمجية</span>
            <br />
            متكاملة لعالم <span style={{ color: "#4318FF" }}>رقمي</span>
          </h2>
          <p>
            نحن نقدم حلول برمجية متكاملة لتطوير الأنظمة ومواقع الويب والتطبيقات
            والتسويق الرقمي لمساعدتك على النجاح في العصر الرقمي.
          </p>
          <div className="mt-4 d-flex gap-2 justify-content-end">
            <div className=" d-flex ">
              <button
                className="btn  d-flex gap-2  "
                style={{
                  backgroundColor: "#4318FF",
                  color: "white",
                  direction: "rtl",
                }}
              >
                فيديو تعريفي بنا
                <img
                  src={videoicon}
                  alt="oo"
                  style={{ backgroundColor: "white" }}
                />
              </button>
            </div>
            <button
              className="btn me-2"
              style={{ backgroundColor: "#4318FF0F", color: "#4318FF" }}
            >
              مشاهدة أعمالنا
            </button>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <p className="fw-bold mb-0">تسويق الأعمال</p>

              <img
                src={markating}
                alt="تسويق الأعمال"
                className="me-2"
                width="40"
              />
            </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <p className="fw-bold mb-0">إنشاء الأعمال</p>

              <img
                src={Briefcase}
                alt="إنشاء الأعمال"
                className="me-2"
                width="40"
              />
            </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <p className="fw-bold mb-0">التفكير الإبداعي</p>

              <img
                src={idea}
                alt="التفكير الإبداعي"
                className="me-2"
                width="40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
