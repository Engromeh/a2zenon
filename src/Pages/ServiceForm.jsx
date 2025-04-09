import React, { useState } from "react";
import Designbg from "../assets/hostingbg.svg";
import videoicon from "../assets/videoicon.svg";
import Serviceimg from "../assets/serviceform.svg";
import ai from "../assets/aiform.svg";

const ServiceForm = () => {
  const [active, setActive] = useState("basic");
  return (
    <>
      <section>
        <img src={Designbg} alt=" Designbg" className=" w-100 h-100" />
        <div style={{ position: "absolute", right: "35rem", bottom: "29rem" }}>
          <h3 className=" text-center text-white fw-bold">طلب خدمة </h3>
          <p className=" text-center text-white">
            للحصول على تجربة احترافية ودعم متخصص، لا تتردد في طلب
            <br />
            خدمتنا الآن لتحقيق أهدافك بسرعة وكفاءة! 🚀{" "}
          </p>
          <div className="d-flex gap-3 justify-content-center ">
            <button
              className="btn d-flex align-items-center justify-content-between gap-2 px-4 "
              style={{
                backgroundColor: "#FFFFFF",
                color: "#4318FF",
                direction: "rtl",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              الشروط والاحكام{" "}
              <img
                src={videoicon}
                alt="video"
                style={{
                  backgroundColor: "#4318FF",
                  borderRadius: "50%",
                  width: "30px",
                  padding: "3px",
                  height: "25px",
                }}
              />
            </button>
          </div>
        </div>
      </section>

      <div className="serviceform-card shadow-lg px-5">
        <div className=" d-flex justify-content-between py-3">
          <div
            className="d-flex gap-2"
            style={{
              border: "1px solid #60A8FF",
              borderRadius: "35px",
              padding: "5px",
            }}
          >
            <button
              className="btn"
              onClick={() => setActive("basic")}
              style={{
                backgroundColor: active === "basic" ? "#4D2CFF" : "transparent",
                color: active === "basic" ? "white" : "black",
                borderRadius: "35px",
              }}
            >
              خدمة اساسية
            </button>

            <button
              className="btn"
              onClick={() => setActive("sub")}
              style={{
                backgroundColor: active === "sub" ? "#4D2CFF" : "transparent",
                color: active === "sub" ? "white" : "black",
                borderRadius: "35px",
              }}
            >
              خدمة فرعية
            </button>
          </div>
          <h3 className=" text-end text-black fw-bold pt-4">طلب خدمة</h3>
        </div>

        <p className=" text-end" style={{ color: "#6B7280" }}>
          للحصول على تجربة احترافية ودعم متخصص، لا تتردد في طلب خدمتنا الآن
          لتحقيق
          <br />
          أهدافك بسرعة وكفاءة! 🚀{" "}
        </p>

        <div className=" d-flex gap-4">
          <img src={Serviceimg} alt="Serviceimg" />

          <form>
            <input
              type="text"
              className=" input-service  form-control "
              id="exampleFormControlInput1"
              placeholder="اسمك"
            />

            <div style={{ position: "relative" }} className="mb-3" dir="rtl">
              <input
                type="text"
                className="input-service form-control"
                id="exampleFormControlInput1"
                placeholder="اسم المشروع"
                style={{ paddingleft: "40px" }}
              />
              <img
                src={ai}
                alt="icon"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  pointerEvents: "none",
                }}
              />
            </div>

            <div className=" d-flex gap-3">
              <input
                type="date"
                className="input-service form-control"
                id="exampleFormControlInput1"
                placeholder="التاريخ"
              />

              <input
                type="time"
                className="input-service form-control"
                id="exampleFormControlInput1"
                placeholder="الوقت المحدد"
              />
            </div>
            <input
              type="email"
              className="input-service form-control"
              id="exampleFormControlInput1"
              placeholder="رقم الهاتف"
            />
            <select name="serviceType" className="select-service">
              <option value="">نوع الخدمة</option>
              <option value="basic">خدمة أساسية</option>
              <option value="sub">خدمة فرعية</option>
            </select>

            <textarea
              class="input-service form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="ملحوظه"
            ></textarea>

            <button
              className=" input-service btn  text-white w-100 "
              style={{ backgroundColor: "#4318FF" }}
            >
              ارسال الطلب
            </button>

            <span className=" text-end" style={{ marginLeft: "6rem" }}>
              هل تريد مساعدة في تحديد نوع الخدمة؟
              <a href="#">اضغط هنا</a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
