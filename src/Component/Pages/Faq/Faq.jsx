import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const faqData = [
  {
    question: "كيف أبدأ ؟",
    answer: "يمكنك البدء بالتسجيل في موقعنا واتباع الخطوات.",
  },
  {
    question: "ما هي شركة AZZENON؟",
    answer: "شركة متخصصة في التسويق الإبداعي والبرمجة.",
  },
  {
    question: "ما هي رؤية AZZENON؟",
    answer: "نهدف إلى تحسين تجربة العملاء بأفضل الحلول الرقمية.",
  },
  {
    question: "ما هي الخدمات التي تقدمها؟",
    answer: "نقدم حلول تسويقية، تطوير مواقع وتطبيقات، وتحسين محركات البحث.",
  },
  {
    question: "ما هي شروط وأحكام افتتاح الشركة؟",
    answer: "تختلف الشروط حسب الدولة والقوانين المحلية.",
  },
  {
    question: "كيف يعمل موقع AZZENON؟",
    answer: "يعمل من خلال تسجيل الدخول وإدارة خدماتك بسهولة.",
  },
  {
    question: "ما هي أهداف AZZENON؟",
    answer: "تحقيق النجاح الرقمي لعملائنا عبر حلول مبتكرة.",
  },
  {
    question: "ما هي المزايا التي تقدمها الشركة؟",
    answer: "أسعار تنافسية، دعم فني متواصل، وتقنيات متطورة.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="container p-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">الأسئلة الشائعة</h2>
          <div className=" d-flex gap-3 justify-content-center">
            <button
              className="btn btn-outline-secondary mt-2"
              style={{ borderRadius: "30px" }}
            >
              أسئلة أخرى؟
            </button>
            <span
              className=" fw-bold"
              style={{ color: "#67E9F0", fontSize: "35px" }}
            >
              الأسئلة
            </span>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-3">
          {faqData.map((item, index) => (
            <div key={index} className="col">
              <div className="card border-0 shadow-sm">
                <div className="card-faq">
                  <h6 className="d-flex justify-content-between align-items-center">
                    <span>
                      <button
                        className="btn "
                        onClick={() =>
                          setActiveIndex(activeIndex === index ? null : index)
                        }
                      >
                        {activeIndex === index ? "−" : "+"}
                      </button>
                    </span>
                    <button
                      className="btn w-100 text-end"
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                    >
                      {item.question}
                    </button>
                  </h6>
                  {activeIndex === index && (
                    <p className="mt-2 text-muted">{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" text-center">
        <h1 className=" fw-bold">هل تحتاج إلى مساعدة؟</h1>
        <p>
          نحن هنا لمساعدتك! لا تتردد في التواصل مع أحد أعضاء فريقنا الودودين
          <br />
          دعم التطبيق أو فكر في التحدث مع فريق المخططين لدينا.
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "25px",
          }}
        >
          احجز عرضًا توضيحيًا
        </button>
      </div>
    </>
  );
};

export default FAQ;
