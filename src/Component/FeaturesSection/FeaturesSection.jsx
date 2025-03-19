import React from "react";
import mobile from "../../assets/mobile.svg";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
const FeaturesSection = () => {
  return (
    <>
      <section className="container py-5 mt-5">
        <div className=" text-end">
          <h3
            className="titel-all"
            style={{ fontSize: "35px", fontWeight: "bold" }}
          >
            ما المميزات
          </h3>
          <p>
            اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال.
            نحن نقدم لك فرصة
            <br />
            استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق
          </p>
        </div>
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "#4318FF",
            height: "22rem",
            borderRadius: "20px",
          }}
        >
          <div className="col-md-6 ">
            <img
              src={mobile}
              alt="Mobile App"
              className="img-fluid"
              style={{ position: "relative", bottom: "163px" }}
            />
          </div>

          <div
            className=" col-md-6 text-end text-white "
            style={{ marginBottom: "10rem" }}
          >
            <h4 className=" text-end fw-bold" style={{ fontSize: "60px" }}>
              نصنع نظام أساسي أبسط وأذكى
            </h4>
            <p style={{ fontSize: "32px" }}>مع انظمة دفع وسهل الاستخدام</p>
            <p>
              رفيقك القوي على طريق النجاح المالي! اكتشف إدارة الميزانية الشخصية
              وفرص الاستثمار.
            </p>
            <div className=" d-flex gap-5 justify-content-end">
              <div className="d-flex align-items-center gap-2">
                <div className="position-relative">
                  <img
                    src={user1}
                    alt="User 1"
                    className="rounded-circle border border-white"
                    style={{
                      width: "50px",
                      height: "50px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                  <img
                    src={user2}
                    alt="User 2"
                    className="rounded-circle border border-white position-absolute"
                    style={{
                      width: "50px",
                      height: "50px",
                      left: "30px",
                      zIndex: 2,
                    }}
                  />
                  <img
                    src={user3}
                    alt="User 3"
                    className="rounded-circle border border-white position-absolute"
                    style={{
                      width: "50px",
                      height: "50px",
                      left: "60px",
                      zIndex: 3,
                    }}
                  />
                </div>
                <div>
                  <h5
                    className="text-info fw-bold "
                    style={{ marginLeft: "6rem" }}
                  >
                    24K+
                  </h5>
                  <p className="text-light ">Active User</p>
                </div>
              </div>
              <button
                className=" btn mt-3"
                style={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  height: "40px",
                }}
              >
                الإدارة المالية
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
