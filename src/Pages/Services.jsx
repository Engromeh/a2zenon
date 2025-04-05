import React from "react";
import search from "../assets/search.svg";
import ServiceSection from "../Component/ServiceSection/ServiceSection";
import line from "../assets/line.svg";
import service1 from "../assets/service1.svg";
import js from "../assets/js.svg";
import more from "../assets/more.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "تصميم",
      subtitle: "تصميم وتنفيذ المواقع",
      description:
        "نشارك معرفتنا من خلال مقالات تقنية وخرائط تعليمية لمساعدة المهتمين في تطوير مهاراتهم البرمجية والتسويقية.",
      image: service1,
    },
    {
      id: 2,
      title: "تطوير",
      subtitle: "تطوير تطبيقات الويب",
      description:
        "نقوم ببرمجة تطبيقات ويب متقدمة تلبي احتياجات العملاء باستخدام أحدث التقنيات.",
      image: service1,
    },
    {
      id: 3,
      title: "تسويق",
      subtitle: "خدمات التسويق الإلكتروني",
      description:
        "نقدم حلول تسويقية مبتكرة لمساعدتك في تحقيق أهدافك وزيادة وصولك إلى الجمهور المستهدف.",
      image: service1,
    },
    {
      id: 4,
      title: "تحليل",
      subtitle: "تحليل البيانات",
      description:
        "نساعدك في فهم بياناتك بشكل أعمق لاتخاذ قرارات مبنية على معطيات دقيقة.",
      image: service1,
    },
    {
      id: 5,
      title: "هوية بصرية",
      subtitle: "تصميم شعارات وهوية متكاملة",
      description:
        "نعزز حضورك الرقمي من خلال هوية بصرية تعكس شخصية علامتك التجارية.",
      image: service1,
    },
    {
      id: 6,
      title: "استشارات",
      subtitle: "استشارات تقنية وتسويقية",
      description:
        "نقدم دعم واستشارات متخصصة لمساعدتك في تجاوز التحديات وتحقيق النجاح.",
      image: service1,
    },
    {
      id: 7,
      title: "استشارات",
      subtitle: "استشارات تقنية وتسويقية",
      description:
        "نقدم دعم واستشارات متخصصة لمساعدتك في تجاوز التحديات وتحقيق النجاح.",
      image: service1,
    },
    {
      id: 8,
      title: "استشارات",
      subtitle: "استشارات تقنية وتسويقية",
      description:
        "نقدم دعم واستشارات متخصصة لمساعدتك في تجاوز التحديات وتحقيق النجاح.",
      image: service1,
    },
    {
      id: 9,
      title: "استشارات",
      subtitle: "استشارات تقنية وتسويقية",
      description:
        "نقدم دعم واستشارات متخصصة لمساعدتك في تجاوز التحديات وتحقيق النجاح.",
      image: service1,
    },
  ];
  const servicesImages = [
    { id: 1, src: js, alt: "Work Image 1" },
    { id: 2, src: js, alt: "Work Image 2" },
    { id: 3, src: js, alt: "Work Image 3" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
    { id: 4, src: js, alt: "Work Image 4" },
  ];

  return (
    <>
      <div className="container">
        <section>
          <h3 className="titel-all text-center mt-4">الخدمات</h3>
          <p className="text-center">
            نقدم حلول برمجية متكاملة لتلبية احتياجات عملائنا في العالم الرقمي
          </p>

          <div className="text-center mb-4">
            <div className="input-group w-50 mx-auto position-relative d-flex gap-2">
              <div className="d-flex gap-2">
                <button
                  className="btn"
                  style={{ border: "1px solid #4318FF", borderRadius: "20px" }}
                >
                  استشارة
                </button>
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#4318FF", borderRadius: "20px" }}
                >
                  تواصل معنا
                </button>
              </div>
              <input
                type="text"
                className="form-control text-end"
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
                className="position-absolute top-50 translate-middle-y mx-3 z-2"
                style={{ left: "33%" }}
                width="20"
              />
            </div>
          </div>
        </section>

        <section>
          <ServiceSection />
        </section>

        <section>
          <div>
            <h3 className="titel-all text-center fw-bold mt-3">عملية العمل</h3>
            <div
              className=" container  p-4 text-end h-auto w-auto"
              style={{ backgroundColor: "#4318FF", borderRadius: "10px" }}
            >
              <div className=" d-flex justify-content-between">
                <div className=" text-white">
                  <h3 className=" fw-bold">الابتكار</h3>
                  <p>
                    الاستكشاف المستمر
                    <br />
                    للتقنيات والأساليب الجديدة
                  </p>
                </div>
                <img src={line} alt="line" />
                <div className=" text-white">
                  <h3 className=" fw-bold">الابتكار</h3>
                  <p>
                    الاستكشاف المستمر
                    <br />
                    للتقنيات والأساليب الجديدة
                  </p>
                </div>
                <img src={line} alt="line" />
                <div className=" text-white">
                  <h3 className=" fw-bold">الابتكار</h3>
                  <p>
                    الاستكشاف المستمر
                    <br />
                    للتقنيات والأساليب الجديدة
                  </p>
                </div>
                <img src={line} alt="line" />
                <div className=" text-white">
                  <h3 className=" fw-bold">الابتكار</h3>
                  <p>
                    الاستكشاف المستمر
                    <br />
                    للتقنيات والأساليب الجديدة
                  </p>
                </div>
                <img src={line} alt="line" />
                <div className=" text-white">
                  <h3 className=" fw-bold">الابتكار</h3>
                  <p>
                    الاستكشاف المستمر
                    <br />
                    للتقنيات والأساليب الجديدة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="titel-all text-center mt-4">الخدمات الفرعية</h3>
          <p className="text-center">
            ي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال.
            نحن نقدم لك فرصة
            <br />
            استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق
          </p>

          <div className="container mb-2 mt-4">
            <div className="row justify-content-center gap-3">
              {services.map((service) => (
                <div key={service.id} className="col-md-3">
                  <div
                    className="card card-bodye"
                    style={{
                      width: "18rem",
                      backgroundColor: "#634AFF0D",
                      border: "none",
                    }}
                  >
                    <div className="card-body p-0" style={{ direction: "rtl" }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="mb-3"
                      />
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
                          style={{
                            backgroundColor: "#634AFF0D",
                            color: "#4318FF",
                          }}
                        >
                          تفاصيل أكثر
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="titel-all text-center mt-4">التقنيات التي نستخدمها</h3>
          <p className="text-center">
            "نستخدم أحدث التقنيات وأفضل الأدوات في مجالات البرمجة، التسويق،
            التصميم،
            <br />
            والاستضافة، لضمان تقديم حلول رقمية مبتكرة تلبي احتياجات عملائنا
            بكفاءة واحترافية."{" "}
          </p>

          <div className="row">
            {servicesImages.map((img) => (
              <div key={img.id} className="col-12 col-md-3 mb-3">
                <div
                  style={{
                    backgroundColor: "#634AFF0D",

                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <img src={img.src} className="card-img-top " alt={img.alt} />
                </div>
              </div>
            ))}
          </div>
          <button className="btn previous-button">
            <img src={more} alt="more" className="me-2" />
            عرض المزيد
          </button>
        </section>
      </div>
    </>
  );
};

export default Services;
