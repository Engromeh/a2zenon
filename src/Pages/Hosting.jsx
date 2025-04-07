import React, { useState } from "react";
import videoicon from "../assets/videoicon.svg";
import Hostinghero from "../assets/Hostinghero.svg";
import line from "../assets/Line 11.svg";
import Hosting1 from "../assets/hosting1.svg";
import Hosting2 from "../assets/hosting2.svg";
import Hosting3 from "../assets/hosting3.svg";
import Hosting4 from "../assets/hosting4.svg";
import Hosting5 from "../assets/hosting5.svg";
import Hosting6 from "../assets/hosting6.svg";
import Hosting7 from "../assets/hosting7.svg";
import Hosting8 from "../assets/hosting8.svg";
import Hosting9 from "../assets/hosting9.svg";
import icone1 from "../assets/icone1.svg";
import icone2 from "../assets/icone2.svg";
import icone3 from "../assets/icone3.svg";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Hosting = () => {
  const cardDataHosting = [
    {
      title: "Loading Speed",
      text: "Our super-fast network with latest and modern technology ensures accelerated response time and processing along with swift website page loading speed.",
      img: Hosting7,
    },
    {
      title: "Loading Speed",
      text: "Our super-fast network with latest and modern technology ensures accelerated response time and processing along with swift website page loading speed.",
      img: Hosting7,
    },
    {
      title: "Loading Speed",
      text: "Our super-fast network with latest and modern technology ensures accelerated response time and processing along with swift website page loading speed.",
      img: Hosting7,
    },
  ];
  const cardDataHosting2 = [
    {
      title: "SSL Certificate",
      text: "Secure your transactions, website's communication and internet browser with SSL encryption certificates of HOST.CO.IN",
      price: "2499/Yr",
      icon: Hosting8,
      priceIcon: Hosting9,
    },
    {
      title: "SSL Certificate",
      text: "Secure your transactions, website's communication and internet browser with SSL encryption certificates of HOST.CO.IN",
      price: "2499/Yr",
      icon: Hosting8,
      priceIcon: Hosting9,
    },
    {
      title: "SSL Certificate",
      text: "Secure your transactions, website's communication and internet browser with SSL encryption certificates of HOST.CO.IN",
      price: "2499/Yr",
      icon: Hosting8,
      priceIcon: Hosting9,
    },
  ];

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

      {/* لسه في شغل لوجيك */}
      <section className=" container">
        <h3 className="titel-all text-center mt-4 fw-bold ">خطط التسعير</h3>
        <p className=" text-center">تسعير بسيط وشفاف ينمو معك.</p>

        <div className=" d-flex justify-content-center gap-2 py-3 ">
          <div style={{ border: "1px solid black", borderRadius: "20px" }}>
            <button className=" btn">Monthly</button>
            <button className=" btn">Yearly</button>
          </div>
        </div>
        <Row className="justify-content-center d-none d-md-flex">
          {[
            {
              title: "Wordpress Hosting",
              price: "99/Mo",
              services: 7,
              features: [true, true, true, true, true, true, false],
            },
            {
              title: "Shared Hosting",
              price: "125/Mo",
              services: 5,
              features: [true, true, true, true, true, true, true],
            },
            {
              title: "VPS Hosting",
              price: "999/Mo",
              services: 3,
              features: [true, true, true, true, true, true, true],
            },
          ].map((plan, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex">
              <Card
                className={`pricing-card flex-fill ${
                  plan.title === "مميز" ? "featured" : ""
                }`}
                style={{ borderRadius: "20px" }}
              >
                <Card.Body>
                  <Card.Title className=" text-muted">{plan.title}</Card.Title>
                  <Card.Text className=" fw-bold" style={{ fontSize: "40px" }}>
                    <img src={Hosting6} alt="Hosting6" />
                    {plan.price}
                  </Card.Text>
                  <Card.Text
                    className="plan-duration"
                    style={{ fontSize: "18px", fontFamily: "Cairo" }}
                  >
                    All inclusive WordPress Hosting with 24/7 live support and
                    pre-installed WP, theme and plugins.{" "}
                  </Card.Text>
                  <ul className="plan-features text-start ps-0">
                    {plan.features.map((enabled, idx) => (
                      <li key={idx} className="d-flex align-items-center">
                        <FaCheckCircle
                          style={{
                            color: enabled ? "background: #4318FF;" : "white",
                          }}
                        />
                        <span
                          className="ms-2"
                          style={{ fontSize: "20px", fontFamily: "Cairo" }}
                        >
                          ميزة {idx + 1}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className=" btn  buttn-plan text-white fw-bold  ">
                    View Plans
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className=" container">
        <h2 className=" text-center fw-bold">Why Choose Host.Co.In ?</h2>
        <p className=" text-center">
          With Host.co.in stand apart in the sphere of World Wide Web with
          maximum flexibility offering elevated packages
          <br />
          for all your business needs ensuring smooth execution of your business
          activities.
        </p>

        <div className=" pt-5">
          <div className="row">
            {cardDataHosting.map((card, index) => (
              <div
                key={index}
                className="col-md-4 mb-4 d-flex justify-content-center"
              >
                <div
                  className="card border-0"
                  style={{
                    width: "18rem",
                    backgroundColor: "#634AFF0F",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body ">
                    <img src={card.img} alt="video" className="img-hosting7 " />
                    <h3 className="card-subtitle p-0 mb-3 fw-bold">
                      {card.title}
                    </h3>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" container">
        <h2 className=" text-center fw-bold">Web Hosting Add-Ons</h2>
        <p className=" text-center">
          HOST.CO.IN. offers several Add-Ons services that you can use to
          increase your web site's functionality, security, and more.
        </p>

        <div className="my-5">
          <div className="row">
            {cardDataHosting2.map((card, index) => (
              <div
                key={index}
                className="col-md-4 mb-4 d-flex justify-content-center"
              >
                <div
                  className="card text-center"
                  style={{
                    width: "20rem",
                    backgroundColor: "#4318FF",
                    borderRadius: "15px",
                  }}
                >
                  <div className="d-flex justify-content-center pt-4">
                    <img
                      src={card.icon}
                      alt="icon"
                      style={{ width: "80px", height: "65px" }}
                    />
                  </div>
                  <div className="card-body text-white">
                    <h5 className="card-title fw-bold">{card.title}</h5>

                    <br />
                    <p className="card-text" style={{ fontSize: "16px" }}>
                      {card.text}
                    </p>
                    <p style={{ fontSize: "32px" }}>
                      <img
                        src={card.priceIcon}
                        alt="price icon"
                        style={{ marginRight: "10px" }}
                      />
                      {card.price}
                    </p>
                    <button
                      className="btn px-5 mb-3"
                      style={{
                        backgroundColor: "#6EE8FC",
                        borderRadius: "20px",
                        position: "relative",
                        top: "50px",
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className=" text-center fw-bold">
          احصل على موقع الويب الخاص بك اليوم
        </h2>
        <p className=" text-center">
          احصل على كل ما تحتاجه لإنشاء موقعك الشخصي/التجاري وتعزيز حضورك على
          الإنترنت. تشمل الخدمة
          <br />
          استضافة مواقع في الهند، وتسجيل نطاق مجاني، ودعمًا فنيًا على مدار
          الساعة.
        </p>
        <div
          className="d-flex  justify-content-center align-items-center px-5 py-5"
          style={{ direction: "rtl", position: "relative", gap: "20%" }}
        >
          <div className="text-center" style={{ zIndex: 1 }}>
            <div
              className="d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "80px",
                height: "80px",
                background: "#4318FF",
                borderRadius: "50%",
              }}
            >
              <img
                src={icone3}
                alt="تسجيل"
                style={{ width: "32px", height: "32px" }}
              />
            </div>
            <p className="mt-2 fw-bold">شاهد موقعك بعد رفعه</p>
          </div>

          <div className="text-center" style={{ zIndex: 1 }}>
            <div
              className="d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "80px",
                height: "80px",
                background: "#4318FF",
                borderRadius: "50%",
              }}
            >
              <img
                src={icone2}
                alt="اختار الخطة"
                style={{ width: "32px", height: "32px" }}
              />
            </div>
            <p className="mt-2 fw-bold">اختار الخطة</p>
          </div>

          <div className="text-center" style={{ zIndex: 1 }}>
            <div
              className="d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "80px",
                height: "80px",
                background: "#4318FF",
                borderRadius: "50%",
              }}
            >
              <img
                src={icone1}
                alt="شاهد موقعك"
                style={{ width: "32px", height: "32px" }}
              />
            </div>
            <p className="mt-2 fw-bold">تسجيل</p>
          </div>
        </div>

        <h3 className=" text-center fw-bold">ابتداءً من 125 جنيه فقط شهريًا</h3>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn buttun-hosting2  px-4 py-2">ابدأ الآن</button>
        </div>
      </section>
    </>
  );
};

export default Hosting;
