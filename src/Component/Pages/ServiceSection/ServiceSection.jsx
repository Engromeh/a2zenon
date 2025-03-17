import React from "react";
import service1 from "../../../assets/service1.svg";

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
    id: 3,
    title: "تسويق",
    subtitle: "خدمات التسويق الإلكتروني",
    description:
      "نقدم حلول تسويقية مبتكرة لمساعدتك في تحقيق أهدافك وزيادة وصولك إلى الجمهور المستهدف.",
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
    id: 3,
    title: "تسويق",
    subtitle: "خدمات التسويق الإلكتروني",
    description:
      "نقدم حلول تسويقية مبتكرة لمساعدتك في تحقيق أهدافك وزيادة وصولك إلى الجمهور المستهدف.",
    image: service1,
  },
];

const ServiceSection = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="titel-service">خدماتنا</h2>
        <p
          style={{
            direction: "rtl",
            textAlign: "center",
            fontSize: "21px",
            color: "#555555",
          }}
        >
          نقدم حلول برمجية متكاملة لتلبية احتياجات
          <br />
          عملائنا في العالم الرقمي
        </p>
      </div>

      <div className="container mb-2 mt-3">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
