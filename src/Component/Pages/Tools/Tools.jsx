import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import go from "../../../assets/go.svg";
import back from "../../../assets/back.svg";
import tool1 from "../../../assets/tool1.svg";

const toolsData = [
  {
    id: 1,
    title: "تصميم النظام",
    description: "UML، الإطارات السلكية، النماذج الأولية",
    image: tool1,
  },
  {
    id: 2,
    title: "تحليل البيانات",
    description: "SQL، Power BI، تحليل البيانات الإحصائي",
    image: tool1,
  },
  {
    id: 3,
    title: "إدارة المشاريع",
    description: "Agile، Scrum، أدوات التخطيط",
    image: tool1,
  },
  {
    id: 4,
    title: "الذكاء الاصطناعي",
    description: "Machine Learning، تحليل البيانات التنبؤية",
    image: tool1,
  },
  {
    id: 5,
    title: "الأمن السيبراني",
    description: "تشفير البيانات، اختبار الاختراق",
    image: tool1,
  },
  {
    id: 6,
    title: "تطوير الويب",
    description: "React، Node.js، تصميم الواجهات",
    image: tool1,
  },
];

const Tools = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="container p-4"
      style={{ border: "1px solid #4318FF", borderRadius: "25px" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#4318FF",
            }}
            onClick={() => scroll("left")}
          >
            <img src={back} alt="back" />
          </button>

          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#4318FF",
            }}
            onClick={() => scroll("right")}
          >
            <img src={go} alt="go" />
          </button>
        </div>
        <h2 style={{ fontSize: "35px" }}>أدواتنا في التحليل والتخطيط</h2>
      </div>

      <div
        className="d-flex gap-3 mt-3 p-4"
        ref={scrollRef}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          flexWrap: "nowrap",
          borderRadius: "25px",
        }}
      >
        {toolsData.map((tool) => (
          <div
            key={tool.id}
            className="card mx-2"
            style={{
              width: "auto",
              minWidth: "18rem",
              border: "1px solid #4318FF",
              borderRadius: "25px",
            }}
          >
            <div className="card-body">
              <img src={tool.image} alt={tool.title} />
              <h6 className="card-subtitle mt-3 text-black">{tool.title}</h6>
              <p className="card-text">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
