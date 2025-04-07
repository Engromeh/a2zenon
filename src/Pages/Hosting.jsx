import React from "react";
import videoicon from "../assets/videoicon.svg";
import Hostinghero from "../assets/Hostinghero.svg";
import line from "../assets/Line 11.svg";
import Hosting1 from "../assets/hosting1.svg";
import Hosting2 from "../assets/hosting2.svg";
import Hosting3 from "../assets/hosting3.svg";
import Hosting4 from "../assets/hosting4.svg";
import Hosting5 from "../assets/hosting5.svg";

const Hosting = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#4318FF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6 text-end text-white">
              <h3 className="fw-bold" style={{ fontSize: "40px" }}>
                استضافة المواقع
              </h3>
              <p style={{ fontSize: "26px" }}>
                نوفر خدمات استضافة موثوقة وآمنة مع
                <br />
                دعم فني على مدار الساعة لضمان
                <br />
                استمرارية عمل موقعك بدون انقطاع.
              </p>

              <div className="d-flex gap-3 justify-content-end pb-3">
                <button
                  className="btn d-flex align-items-center justify-content-between  py-2"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#4318FF",
                    direction: "rtl",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  فيديو توضيحي بالخدمة{" "}
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

                <button
                  className="btn me-2"
                  style={{
                    backgroundColor: "#6A4CFF",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  طلب دعم تعريفي
                </button>
              </div>
            </div>

            <div className="col-md-6 pb-5 text-center">
              <img src={Hostinghero} alt="Hostinghero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <div className="Hosting-card shadow-lg">
        <h3 className=" text-center text-black fw-bold pt-4">حجز النطاقات</h3>
        <p className=" text-center" style={{ color: "#6B7280" }}>
          خطوتك الاولى لبدء مشروعك الخاص والتسويق له الكترونياً عبر شبكة
          الانترنت، الآن انشأ موقعك الخاص
          <br />
          وروج لمشروعك بأفضل الطرق وأوسعها انتشاراً
        </p>

        <div className="relative d-flex justify-content-center">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2  text-white border-0 p-2 "
            style={{ backgroundColor: "#4318FF", width: "7%" }}
          >
            ابحث
          </button>
          <input
            type="text"
            placeholder="ابحث "
            style={{ direction: "rtl", width: "35%" }}
            className="pl-10 pr-4  p-2 border border-gray-300 rounded-md w-64"
          />
        </div>

        <div
          className=" container d-flex gap-3 text-center justify-content-center pt-5"
          style={{ fontSize: "36px" }}
        >
          <p>
            a2zenon
            <span className=" fw-bold" style={{ color: "#4318FF" }}>
              .com
            </span>
          </p>
          <img src={line} alt="line" />

          <p>
            a2zenon
            <span className=" fw-bold" style={{ color: "#4318FF" }}>
              .net
            </span>
          </p>

          <img src={line} alt="line" />

          <p>
            a2zenon
            <span className=" fw-bold" style={{ color: "#4318FF" }}>
              .org
            </span>
          </p>
        </div>
      </div>

      <section className=" container">
        <h3 className="titel-all text-center mt-4 ">
          ماذا ستحصل عليه إذا انضممت إلينا؟
        </h3>
        <p className=" text-center">
          احصل على أفضل خدمة استضافة بالسعر الذي يمكنك تحمله
        </p>
        <div className=" d-flex justify-content-center justify-content-between">
          <div>
            <img
              src={Hosting5}
              alt="video"
              style={{
                backgroundColor: "#4318FF",
                borderRadius: "50%",
                width: "110px",
                padding: "20px",
                height: "102px",
              }}
            />
            <p className=" text-center pt-2">
              Tire 3 <br />
              مركز بيانات معتمد
            </p>
          </div>

          <div>
            <img
              src={Hosting4}
              alt="video"
              style={{
                backgroundColor: "#4318FF",
                borderRadius: "50%",
                width: "110px",
                padding: "20px",
                height: "102px",
              }}
            />
            <p className=" text-center pt-2">
              Tire 3 <br />
              مركز بيانات معتمد
            </p>
          </div>

          <div>
            <img
              src={Hosting3}
              alt="video"
              style={{
                backgroundColor: "#4318FF",
                borderRadius: "50%",
                width: "110px",
                padding: "20px",
                height: "102px",
              }}
            />
            <p className=" text-center pt-2">
              Tire 3 <br />
              مركز بيانات معتمد
            </p>
          </div>

          <div>
            <img
              src={Hosting2}
              alt="video"
              style={{
                backgroundColor: "#4318FF",
                borderRadius: "50%",
                width: "110px",
                padding: "24px",
                height: "102px",
              }}
            />
            <p className=" text-center pt-2">
              Tire 3 <br />
              مركز بيانات معتمد
            </p>
          </div>

          <div>
            <img
              src={Hosting1}
              alt="video"
              style={{
                backgroundColor: "#4318FF",
                borderRadius: "50%",
                width: "110px",
                padding: "20px",
                height: "102px",
              }}
            />
            <p className=" text-center pt-2">
              Tire 3 <br />
              مركز بيانات معتمد
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hosting;
