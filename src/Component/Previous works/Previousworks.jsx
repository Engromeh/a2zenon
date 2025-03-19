import React from "react";
import work from "../../assets/WORK.svg";
import logocard from "../../assets/logoprevious.svg";
import more from "../../assets/more.svg";

const previousWorksData = [
  {
    id: 1,
    title: "شركة بتوع ميديا",
    service: "خدمة البرمجة",
    description:
      "نقدم خدمات تسويق رقمي شاملة تتضمن تحسين محركات البحث، إدارة الإعلانات، وإدارة وسائل التواصل الاجتماعي.",
    image: work,
    logo: logocard,
  },
  {
    id: 2,
    title: "وكالة التسويق الذكي",
    service: "تصميم الجرافيك",
    description:
      "نقوم بتصميم شعارات وهويات بصرية احترافية تناسب علامتك التجارية وتزيد من تميزك في السوق.",
    image: work,
    logo: logocard,
  },
  {
    id: 3,
    title: "شركة برمجيات المستقبل",
    service: "تطوير التطبيقات",
    description:
      "نطور تطبيقات ويب وتطبيقات موبايل بميزات متقدمة وأداء عالٍ لضمان تجربة مستخدم ممتازة.",
    image: work,
    logo: logocard,
  },
  {
    id: 4,
    title: "شركة حلول السوشيال ميديا",
    service: "إدارة وسائل التواصل",
    description:
      "نساعدك في بناء استراتيجيات فعالة لزيادة التفاعل مع جمهورك وتحقيق نتائج ملموسة.",
    image: work,
    logo: logocard,
  },
  {
    id: 4,
    title: "شركة حلول السوشيال ميديا",
    service: "إدارة وسائل التواصل",
    description:
      "نساعدك في بناء استراتيجيات فعالة لزيادة التفاعل مع جمهورك وتحقيق نتائج ملموسة.",
    image: work,
    logo: logocard,
  },
  {
    id: 4,
    title: "شركة حلول السوشيال ميديا",
    service: "إدارة وسائل التواصل",
    description:
      "نساعدك في بناء استراتيجيات فعالة لزيادة التفاعل مع جمهورك وتحقيق نتائج ملموسة.",
    image: work,
    logo: logocard,
  },
];

const Previousworks = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2 className="titel-all">اعمالنا السابقة</h2>
        <p
          style={{
            direction: "rtl",
            textAlign: "center",
            fontSize: "21px",
            color: "#555555",
          }}
        >
          اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال. نحن
          نقدم لك فرصة
          <br />
          استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق
        </p>
      </div>

      <div className="row g-3 justify-content-center">
        {previousWorksData.map((work) => (
          <div key={work.id} className="col-md-6">
            <div
              className="card mb-3"
              style={{
                maxWidth: "100%",
                border: "none",
                backgroundColor: "#634AFF0D",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={work.image}
                    className="img-fluid rounded-start w-100 h-100"
                    alt={work.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-end">
                    <img src={work.logo} alt="logo" className=" p-2" />
                    <br />
                    <p className="card-text">
                      <small className="text-muted">{work.service}</small>
                    </p>
                    <h5 className="card-title">{work.title}</h5>
                    <p className="card-text">{work.description}</p>
                    <div className="d-flex gap-2 justify-content-end">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#634AFF0D",
                          color: "#4318FF",
                        }}
                      >
                        تفاصيل أكثر
                      </button>
                      <button
                        className="btn"
                        style={{ backgroundColor: "#4318FF", color: "white" }}
                      >
                        مشاهدة الديمو
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn previous-button">
        <img src={more} alt="more" className="me-2" />
        عرض المزيد
      </button>
    </div>
  );
};

export default Previousworks;
