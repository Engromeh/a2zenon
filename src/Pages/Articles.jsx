import React, { useState } from "react";
import search from "../assets/search.svg";
import artical1 from "../assets/artical1.svg";
import artical2 from "../assets/artical2.svg";
import artical3 from "../assets/artical3.svg";
import Like from "../assets/like.svg";
import Love from "../assets/love.svg";
import pepole from "../assets/pepole.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {  Pagination } from "swiper/modules";

const Articles = () => {
  const [activeButton, setActiveButton] = useState(0);

  const btnWork = [
    "جميع الخدمات",
    "تصميم المواقع",
    "تطوير التطبيقات",
    "التسويق الرقمي",
    "استضافة المواقع",
    "تحليل البيانات",
  ];
  const articles = [
    {
      id: 1,
      image: artical1,
      date: "30 يناير, 2025",
      title: "مشكلة responsive في CSS",
      description:
        "تعرف على أهم تقنيات تحسين الأداء في JavaScript لتسريع تحميل الموقع وتحسين تجربة المستخدم.",
      views: "1.900 رؤية",
    },
    {
      id: 2,
      image: artical1,
      date: "15 فبراير, 2025",
      title: "تحسين أداء JavaScript",
      description:
        "تعرف على أهم تقنيات تحسين الأداء في JavaScript لتسريع تحميل الموقع وتحسين تجربة المستخدم.",
      views: "2.500 رؤية",
    },
    {
      id: 3,
      image: artical1,
      date: "5 مارس, 2025",
      title: "أساسيات UI/UX للمبتدئين",
      description:
        "مقدمة شاملة جهات المستخدم وتجربة المستخدم، وأفضل الممارسات لإنشاء مواقع رائعة.",
      views: "3.200 رؤية",
    },
    {
      id: 4,
      image: artical1,
      date: "20 مارس, 2025",
      title: "أفضل مكتبات React لعام 2025",
      description:
        "استكشف أفضل مكتبات React التي تساعد في بناء تطبيقات قوية وحديثة بسرعة.",
      views: "4.100 رؤية",
    },
    {
      id: 3,
      image: artical1,
      date: "5 مارس, 2025",
      title: "أساسيات UI/UX للمبتدئين",
      description:
        "مقدمة شاملة حول تصميم واجهات المستخدم وتجربة المستخدم، وأفضل الممارسات لإنشاء مواقع رائعة.",
      views: "3.200 رؤية",
    },
    {
      id: 3,
      image: artical1,
      date: "5 مارس, 2025",
      title: "أساسيات UI/UX للمبتدئين",
      description:
        "مقدمة شاملة حول تصميم واجهات المستخدم وتجربة المستخدم، وأفضل الممارسات لإنشاء مواقع رائعة.",
      views: "3.200 رؤية",
    },
  ];
  const articles2 = [
    {
      id: 1,
      title: "واجهة المستخدم وتجربة المستخدم",
      description: "دور الذكاء الاصطناعي في تحسين تجربة المستخدم.",
    },
    {
      id: 2,
      title: "تحسين أداء JavaScript",
      description: "دور الذكاء الاصطناعي في تحسين تجربة المستخدم.",
    },
    {
      id: 3,
      title: "أساسيات تطوير الويب",
      description: "دور الذكاء الاصطناعي في تحسين تجربة المستخدم.",
    },
    {
      id: 4,
      title: "تصميم الواجهات الحديثة",
      description: "دور الذكاء الاصطناعي في تحسين تجربة المستخدم.",
    },
    {
      id: 5,
      title: "الذكاء الاصطناعي في تطوير الويب",
      description: "دور الذكاء الاصطناعي في تحسين تجربة المستخدم.",
    },
    {
      id: 6,
      title: "أفضل أدوات المطورين",
      description: "دور الذكاء الاصطناعي في تحسين تجربة المستخدم.",
    },
  ];

  return (
    <>
      <div className=" container">
        <h3 className="titel-all text-center mt-4 ">المدونة </h3>
        <p className=" text-center">
          اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال. نحن
          نقدم لك فرصة
          <br />
           استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق
        </p>

        <div className="text-center mb-4">
          <div className="input-group w-50 mx-auto position-relative">
         
            <input
              type="text"
              className="form-control  text-end"
              placeholder="ابحث عن خدمة"
              style={{
                direction: "ltr",
                borderRadius: "20px",
                border: "1px solid #6B7280",
              }}
            />
            <img
              src={search}
              alt="بحث"
              className="position-absolute top-50 start-0 translate-middle-y mx-3 z-2"
              width="20"
            />
          </div>
        </div>

       
        <div className="d-flex justify-content-center gap-3 container mb-4">
          {btnWork.map((btnWork, index) => (
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
              {btnWork}
            </button>
          ))}
        </div>

        <div className="row justify-content-center">
          {articles.map((article, index) => (
            <div key={article.id} className="col-md-4 mb-4">
              <div
                className="card  rounded-4 border-0 text-end p-4"
                style={{ maxWidth: "300px", backgroundColor: "#634AFF0F" }}
              >
                <img
                  src={article.image}
                  alt="Article"
                  className="img-fluid mx-auto d-block"
                  style={{ width: "100px" }}
                />

                <div className="d-flex justify-content-end align-items-center gap-2 mt-2">
                  <span className="text-muted" style={{ direction: "rtl" }}>
                    {article.date}
                  </span>
                  <img src={artical2} alt="artical2" />
                  <img src={artical3} alt="artical3" />
                </div>

                <h5 className="mt-3 fw-bold" style={{ direction: "rtl" }}>
                  {article.title}
                </h5>

                <p className="text-muted px-3" style={{ fontSize: "14px" }}>
                  {article.description}
                </p>

                <div className="d-flex justify-content-around align-items-center text-muted mt-3">
                  <div>
                    <img src={Love} alt="Love" /> اعجبتني
                  </div>
                  <div>
                    <img src={Like} alt="Like" /> جيدة
                  </div>
                  <div>
                    <img
                      src={pepole}
                      alt="Views"
                      style={{ direction: "rtl" }}
                    />{" "}
                    {article.views}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>


          <h3 className=" text-end fw-bold mb-3">الموضوعات شعبية</h3>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={false}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {articles2.map((article) => (
              <SwiperSlide key={article.id}>
                <div
                  className="card text-end border-0 p-3 mb-5"
                  style={{
                    backgroundColor: "#634AFF0D",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="card-body">
                    <h6 className="card-title fw-bold">{article.title}</h6>
                    <p className="card-text text-muted">
                      {article.description}
                    </p>
                    <button
                      className="btn"
                      style={{ backgroundColor: "#634AFF0D", color: "#4318FF" }}
                    >
                      عرض المقالات
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Articles;
