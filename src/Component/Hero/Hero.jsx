import React from "react";
import videoicon from "../../assets/videoicon.svg";
import idea from "../../assets/idea.svg";
import Briefcase from "../../assets/Briefcase.svg";
import markating from "../../assets/markating.svg";
import heroimg from "../../assets/heroimg.svg";
import hero3 from "../../assets/hero1.svg";
import hero4 from "../../assets/HERO2.svg";
import hero1 from "../../assets/hero3.svg";
import hero2 from "../../assets/hero4.svg";

const Hero = () => {
  return (
    <section className="container  " style={{ marginTop: "4%" }}>
      <div className="hero-bg-gold"></div>
      <div className="hero-bg-blue"></div>
      <div className="row align-items-center d-flex">
        <div
          className="col-md-6  position-relative text-center"
          style={{ right: "34px" }}
        >
          <div className=" d-flex justify-content-center align-items-center  position-relative">
            <div className=" bg-hero2 position-absolute"></div>
            <div className=" bg-hero3 position-absolute"></div>
            <div className=" bg-hero4 position-absolute"></div>
            <div className="bg-hero1 d-flex justify-content-center align-items-center position-relative shadow">
              <img src={heroimg} alt="صورة" className="img-hero" />
            </div>
            <div
              className="position-absolute"
              style={{ top: "10%", left: "10%", zIndex: "2" }}
            >
              <div
                className="card1-hero  shadow d-flex align-items-center"
                style={{ borderRadius: "12px" }}
              >
                <div className="card-body text-center d-flex gap-2 align-items-center">
                  <img
                    src={hero1}
                    alt="Icon"
                    style={{ width: "80px", height: "80px", marginTop: "10px" }}
                  />
                  <div>
                    <h6 className="text-muted mb-1"> الثقة المكتسبة</h6>
                    <h5 className="fw-bold">250+</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="position-absolute"
              style={{ top: "10%", right: "10%", zIndex: "2" }}
            >
              <div className="card2-hero p-2 shadow ">
                <div className="card-body text-center">
                  <img src={hero2} alt="dd" className=" me-4" />
                  <h6 className="text-muted mt-1">سنوات الخبرة</h6>
                  <h5>5K+</h5>
                </div>
              </div>
            </div>
            <div
              className="position-absolute"
              style={{ bottom: "10%", left: "10%", zIndex: "2" }}
            >
              <div
                className="card3-hero  shadow d-flex align-items-center"
                style={{ borderRadius: "12px" }}
              >
                <div className="card-body text-center d-flex gap-2 align-items-center">
                  <img
                    src={hero3}
                    alt="Icon"
                    style={{ width: "80px", height: "80px", marginTop: "10px" }}
                  />
                  <div>
                    <h6 className="text-muted mb-1">الجوائز المكتسبة</h6>
                    <h5 className="fw-bold">+250k</h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="position-absolute"
              style={{ bottom: "10%", left: "10%", zIndex: "2" }}
            >
              <div
                className="card4-hero p-1 shadow d-flex align-items-center"
                style={{ borderRadius: "12px" }}
              >
                <div className="card-body text-center d-flex gap-2 align-items-center">
                  <img
                    src={hero4}
                    alt="Icon"
                    style={{ width: "80px", height: "80px", marginTop: "10px" }}
                  />
                  <div>
                    <h5 className="fw-bold">+250k</h5>

                    <h6 className="text-muted mb-1">المشاريع المنجزة</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 text-md-end text-center"></div>

        <div className="col-md-5 text-md-end text-center">
          <h2 style={{ fontSize: "60px" }}>
            حلول <span style={{ color: "#4318FF" }}>برمجية</span>
            <br />
            متكاملة لعالم <span style={{ color: "#4318FF" }}>رقمي</span>
          </h2>
          <p>
            نحن نقدم حلول برمجية متكاملة لتطوير الأنظمة ومواقع الويب والتطبيقات
            والتسويق الرقمي لمساعدتك على النجاح في العصر الرقمي.
          </p>
          <div className="mt-4 d-flex gap-2 justify-content-end">
          <div className="d-flex">
  <button
    className="btn d-flex align-items-center justify-content-between gap-2 px-4 py-2"
    style={{
      backgroundColor: "#4318FF",
      color: "white",
      direction: "rtl",
      borderRadius: "8px", 
    }}
  >
    فيديو تعريفي بنا
    <img
      src={videoicon}
      alt="oo"
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        width: "30px", 
        padding:"3px" ,
        height: "25px",
      }}
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
