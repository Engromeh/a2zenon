import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // استيراد Bootstrap

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "CEO & Founder",
    description:
      "With over 15 years in software development and business strategy, Alex leads our vision and growth initiatives.",
    image: "", // يمكنك إضافة رابط صورة هنا
  },
  {
    id: 2,
    name: "Alex Johnson",
    title: "CEO & Founder",
    description:
      "With over 15 years in software development and business strategy, Alex leads our vision and growth initiatives.",
    image: "",
  },
  {
    id: 3,
    name: "Alex Johnson",
    title: "CEO & Founder",
    description:
      "With over 15 years in software development and business strategy, Alex leads our vision and growth initiatives.",
    image: "",
  },
];

const TeamSection = () => {
  return (
    <section className="py-5 text-center bg-light">
      <div className="container">
        <div>
          <div className=" d-flex justify-content-center align-items-center  mt-4">
            <button
              className="btn mx-2"
              style={{
                border: "1px soild",
                borderRadius: "30px",
                backgroundColor: "#4318FF",
                color: "white",
                padding: "10px",
                width: "10%",
              }}
            >
              اريد التعلم
            </button>
            <button
              className="btn btn-outline-secondary mx-2"
              style={{ border: "1px soild", borderRadius: "30px" }}
            >
              اريد الانضمام
            </button>
            <h2 className="text-primary fw-bold">فريق العمل</h2>
          </div>
          <p className="text-muted mx-auto w-75">
            اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال.
            نحن نقدم لك فرصة
            <br />
            استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق يمكنك ايضا
            التعلم والانضمام الينا{" "}
          </p>
        </div>

        <div className="row mt-5 g-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-md-4 text-white">
              <div
                className="card text-white  shadow-lg border-0 rounded-4 overflow-hidden position-relative"
                style={{
                  backgroundColor: "#4318FF",
                  borderRadius: "0 0 30px 30px",
                }}
              >
                <div
                  className="bg-white d-flex align-items-center justify-content-center"
                  style={{
                    height: "140px",
                  }}
                ></div>
              </div>
              <div
                className="card-body  shadow-lg border-0 overflow-hidden position-relative mt-2 text-end p-3"
                style={{
                  backgroundColor: "#4318FF",
                  borderRadius: "0 0 30px 30px",
                }}
              >
                <div className="d-flex justify-content-between">
                  <h6 className="text-uppercase small ">{member.title}</h6>
                  <button
                    className="btn  text-white btn-sm text-primary fw-bold rounded-pill px-3 justify-content-end"
                    style={{ backgroundColor: "#60A8FF" }}
                  >
                    Connect
                  </button>
                </div>
                <h5 className="fw-bold text-start">{member.name}</h5>

                <p className="small text-start">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
