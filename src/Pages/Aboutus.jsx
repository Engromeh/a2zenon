import React from "react";
import about1 from "../assets/aboutuslogo1.svg";
import line from "../assets/line.svg";
import about2 from "../assets/aboutus logo2.svg";
import TeamSection from "../Component/TeamSection/TeamSection";
import about3 from "../assets/about3.svg";
import about4 from "../assets/aboutbig.svg";

const Aboutus = () => {
  const Aboutusdata = [
    {
      id: 1,
      title: "تصميم",
      description:
        "نشارك معرفتنا من خلال مقالات تقنية وخرائط تعليمية لمساعدة المهتمين في تطوير مهاراتهم البرمجية والتسويقية.",
      image: about1,
    },
    {
      id: 2,
      title: "مهمتنا",
      description:
        "نقوم ببرمجة تطبيقات ويب متقدمة تلبي احتياجات العملاء باستخدام أحدث التقنيات.",
      image: about1,
    },
    {
      id: 3,
      title: "تسويق",
      description:
        "نقدم حلول تسويقية مبتكرة لمساعدتك في تحقيق أهدافك وزيادة وصولك إلى الجمهور المستهدف.",
      image: about1,
    },
  ];

  return (
    <>
      <div className=" container mt-5">
        <div className=" text-center">
          <h3 className="titel-all">حول A2Zenon</h3>
          <p> حلول برمجية متكاملة لعالم رقمي</p>
        </div>

        <section>
          <div className="container mb-2 mt-4">
            <div className="row justify-content-center gap-3">
              {Aboutusdata.map((about) => (
                <div key={about.id} className="col-md-3">
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
                        src={about.image}
                        alt={about.title}
                        className=" mb-3"
                      />
                      <h5
                        className="card-title mt-3"
                        style={{ fontSize: "14px" }}
                      >
                        {about.title}
                      </h5>

                      <p
                        className="card-text mt-3"
                        style={{ color: "#6B7280", fontSize: "14px" }}
                      >
                        {about.description}
                      </p>
                      <div className="d-flex gap-2">
                        <button
                          className="btn"
                          style={{ backgroundColor: "#4318FF", color: "white" }}
                        >
                          يتعلم أكثر{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div>
          <h3 className="titel-all text-center fw-bold mt-3">قيمنا الأساسية</h3>
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
            </div>
          </div>
        </div>

        <section>
          <div className=" text-center">
            <h3 className="titel-all mt-4"> تاسيس الشركة</h3>
            <p>
              "تأسست شركتنا برؤية طموحة لتقديم حلول متكاملة في البرمجة والتسويق
              والتصميم
              <br />
              والاستضافة، بهدف تمكين الشركات والأفراد من النجاح في العالم
              الرقمي."
            </p>
          </div>

          <div className="container py-5">
            <div
              className="row align-items-center bg-light p-4 rounded-4 shadow-sm"
              style={{ backgroundColor: "#634AFF0F" }}
            >
              <div className="col-md-5">
                <div className="position-relative">
                  <div className="bg-aboutus position-absolute top-0 start-0  rounded-4"></div>
                  <img src={about3} alt="صورة" className=" img-about" />
                </div>
              </div>

              <div className="col-md-7 text-end ms-auto">
                <img src={about2} alt="about2" className=" mb-4" />
                <h3 className="fw-bold text-dark">
                  تـــأســـيـــس الــــــشركة انــــطلاقــة نحــــو الـــنجــاح
                </h3>
                <p className="text-muted">
                  منذ اللحظة الأولى، كانت رؤيتنا واضحة وطموحنا لا حدود له،
                  فأسسنا شركتنا على مبادئ الابتكار، الجودة، والالتزام بتقديم
                  أفضل الحلول لعملائنا. جاءت فكرة التأسيس استجابة للحاجة
                  المتزايدة إلى خدمات البرمجة، التسويق الإلكتروني، التصميم،
                  والاستضافة، بهدف مساعدة الأفراد والشركات على تحقيق أهدافهم
                  الرقمية بكل كفاءة. بدأنا رحلتنا بفريق من الخبراء المتخصصين
                  الذين جمعوا بين الخبرة والشغف، واضعين نصب أعينهم تقديم خدمات
                  عالية الجودة تلبي احتياجات السوق المتطورة. ومع مرور الوقت،
                  توسع نطاق أعمالنا، ونجحنا في بناء علاقات قوية مع عملائنا في
                  مختلف أنحاء العالم، مما عزز مكانتنا كشركة موثوقة ورائدة في
                  المجال. نواصل اليوم مسيرتنا بروح الابتكار، مستخدمين أحدث
                  التقنيات والاستراتيجيات لضمان تقديم حلول رقمية متكاملة، تساعد
                  عملاءنا على التميز والنجاح في عالم الأعمال المتسارع.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="container ">
            <div
              className="position-relative bg-light p-4 rounded-4 shadow-sm"
              style={{ backgroundColor: "#F5F3FF" }}
            >
              <div className="position-absolute top-0 end-0 m-3">
                <img src={about2} alt="Star Icon" width="30" height="30" />
              </div>

              <div className="text-center mb-4">
                <img src={about4} alt="Services" className="img-fluid" />
              </div>

              <div className="text-center px-4">
                <h3 className="fw-bold text-dark mb-3">
                  تأسيس شركتنا: حلول متكاملة في البرمجة والتسويق والتصميم
                  والاستضافة
                </h3>
                <p
                  style={{
                    color: "#38404F",
                    direction: "rtl",
                    fontSize: "26px",
                  }}
                >
                  انطلقت شركتنا برؤية واضحة لتقديم حلول متكاملة تلبي احتياجات
                  الأفراد والشركات في عالم التكنولوجيا المتسارع. منذ البداية،
                  حرصنا على تقديم خدمات متكاملة وعالية الجودة في مجالات البرمجة،
                  التسويق الرقمي، التصميم، والاستضافة، مما ساعد عملاءنا على
                  تحقيق أهدافهم بكفاءة واحترافية.
                </p>

                <h4 className="fw-bold text-dark mt-4">رؤيتنا</h4>
                <p
                  style={{
                    color: "#38404F",
                    direction: "rtl",
                    fontSize: "26px",
                  }}
                >
                  نطمح إلى أن نكون الخيار التقني الأول لكل من ينشئ أو يتطور في
                  المجال الرقمي، من خلال توفير حلول إبداعية تلائم السوق الحديث
                  وتعزز من تواجد المشاريع عبر الإنترنت.
                </p>

                <h4 className="fw-bold text-dark mt-4">خدماتنا</h4>
                <div
                  style={{
                    color: "#38404F",
                    direction: "rtl",
                    fontSize: "26px",
                  }}
                >
                  <p>
                    1-البرمجة: تطوير مواقع إلكترونية وتطبيقات مخصصة وفق أحدث
                    التقنيات.
                  </p>
                  <p>
                    2-التسويق الرقمي: استراتيجيات تسويقية مبتكرة لزيادة الانتشار
                    وتحقيق الأهداف التجارية.
                  </p>
                  <p>
                    3-التصميم الإبداعي: تصميم هويات بصرية ومواقع جذابة تعكس هوية
                    العلامة التجارية.{" "}
                  </p>
                  <p>
                    4-الاستضافة: خدمات استضافة موثوقة وآمنة لضمان استمرارية
                    وأداء المواقع بأفضل شكل.{" "}
                  </p>
                </div>

                <p
                  className="text-muted mt-4"
                  style={{
                    color: "#38404F",
                    direction: "rtl",
                    fontSize: "26px",
                  }}
                >
                  فضل فريق عمل محترف وخبرة تمتد لسنوات، نعمل بكل جهد لنكون جزءًا
                  من نجاح عملائنا، ونسعى
                  <br />
                  دائمًا للابتكار والتطوير لمواكبة أحدث الاتجاهات الرقمية.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
      </div>
    </>
  );
};

export default Aboutus;
