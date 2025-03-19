import React, { useRef } from "react";
import go from "../../assets/go.svg";
import back from "../../assets/back.svg";
import stars from "../../assets/stars.svg";
import logocustomer from "../../assets/logocustomer.svg";

const customerData = [
  {
    id: 1,
    name: "هدرا نجيب اقلاديوس",
    service: "خدمة التصميم",
    review: "الخدمة كويسة جداااااا ياريت كل الشركات تبقي زيكم بجد",
    stars: stars,
    logo: logocustomer,
  },
  {
    id: 2,
    name: "أحمد محمد",
    service: "إدارة الحملات",
    review: "خدمة ممتازة وسرعة في التنفيذ، أوصي بالتعامل معهم!",
    stars: stars,
    logo: logocustomer,
  },
  {
    id: 3,
    name: "فاطمة علي",
    service: "تحليل البيانات",
    review: "احترافية في العمل ودقة في التفاصيل، شكرًا لكم.",
    stars: stars,
    logo: logocustomer,
  },
  {
    id: 4,
    name: "محمد سمير",
    service: "التسويق الإلكتروني",
    review: "نتائج رائعة وتحقيق أهدافي التسويقية بكل دقة!",
    stars: stars,
    logo: logocustomer,
  },
  {
    id: 4,
    name: "محمد سمير",
    service: "التسويق الإلكتروني",
    review: "نتائج رائعة وتحقيق أهدافي التسويقية بكل دقة!",
    stars: stars,
    logo: logocustomer,
  },
  {
    id: 4,
    name: "محمد سمير",
    service: "التسويق الإلكتروني",
    review: "نتائج رائعة وتحقيق أهدافي التسويقية بكل دقة!",
    stars: stars,
    logo: logocustomer,
  },
];

const CustomerOpinions = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex gap-2 justify-content-end">
          <button
            className="btn"
            style={{ border: "1px solid #E1E2E5", borderRadius: "25px" }}
          >
            اضف رايك
          </button>
          <h2 className="titel-all">آراء العملاء</h2>
        </div>

        <div className="d-flex justify-content-between text-end">
          <div className="d-flex gap-3">
            <button
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "#4318FF",
              }}
              onClick={() => scroll("left")}
            >
              <img src={back} alt="back" />
            </button>

            <button
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "#4318FF",
              }}
              onClick={() => scroll("right")}
            >
              <img src={go} alt="go" />
            </button>
          </div>
          <p>
            اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الإبداعي والفعّال.
            نحن نقدم لك فرصة 
            <br />
            استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="d-flex gap-3 overflow-auto"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {customerData.map((customer) => (
            <div
              key={customer.id}
              className="card text-end"
              style={{
                width: "18rem",
                backgroundColor: "#634AFF0D",
                border: "none",
                flex: "0 0 auto",
              }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <img src={customer.stars} alt="rating" className="mb-3" />
                  <img src={customer.logo} alt="logo" className="mb-3" />
                </div>
                <h6 className="card-subtitle mb-2 text-muted">
                  {customer.service}
                </h6>
                <h5>{customer.name}</h5>
                <p className="card-text">{customer.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomerOpinions;
