import React, { useState } from 'react'
import search from "../assets/search.svg"
import work1 from "../assets/work1.svg"
import work2 from "../assets/work2.svg"
import { useNavigate } from 'react-router-dom'

const Work = () => {

    const [activeButton, setActiveButton] = useState(0); 

    const btnWork = [
      "جميع الخدمات",
      "تصميم المواقع",
      "تطوير التطبيقات",
      "التسويق الرقمي",
      "استضافة المواقع",
      "تحليل البيانات",
    ];
    const workData = [
        {
          id: 1,
          title: "شركة بتوع ميديا",
          service: "خدمة البرمجة",
          description: "نقدم خدمات تطوير البرمجيات المتكاملة، بدءًا من التخطيط إلى التنفيذ والدعم الفني المستمر.",
        },
        {
          id: 2,
          title: "شركة XYZ",
          service: "خدمة التصميم",
          description: "تصميم واجهات استخدام جذابة وتجربة مستخدم فريدة تضمن تحسين التفاعل مع العملاء.",
        },
        {
          id: 3,
          title: "شركة ABC",
          service: "التسويق الرقمي",
          description: "إدارة الحملات الإعلانية وتحليل البيانات للوصول إلى الجمهور المستهدف بأفضل الطرق.",
        },
        {
          id: 4,
          title: "شركة LMN",
          service: "تطوير التطبيقات",
          description: "بناء تطبيقات عالية الأداء لأنظمة Android و iOS تلبي احتياجات السوق المتغيرة.",
        },
        {
          id: 5,
          title: "شركة DEF",
          service: "استضافة المواقع",
          description: "نوفر حلول استضافة آمنة وسريعة تضمن تشغيل موقعك بكفاءة عالية دون انقطاع.",
        },
        {
          id: 6,
          title: "شركة GHI",
          service: "تحليل البيانات",
          description: "تحليل البيانات الضخمة لاستخراج رؤى قيمة تساعد الشركات على اتخاذ قرارات استراتيجية.",
        },
      ];
      const navigate = useNavigate();

      const handleClick = () => {
        navigate('/layout/Work/media');
      };
  return (
    <>
    <div className=' container'>
    <h3 className='titel-all text-center mt-4 '>اعمالنا السابقة</h3>
    <p className=' text-center'>اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال. نحن نقدم لك فرصة
    <br/>
     استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق</p>


    <div className="text-center mb-4">
      <div className="input-group w-50 mx-auto position-relative">
      <input
          type="text"
          className="form-control  text-end"
          placeholder="ابحث عن خدمة"
          style={{ direction: "ltr" , borderRadius:"20px"  , border:"1px solid #6B7280"}}
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


    <div className="row g-4">
        {workData.map((work) => (
          <div key={work.id} className="col-md-4">
            <div className="card h-100" style={{ backgroundColor: "#634AFF0D" }}>
              <div style={{ backgroundColor: "white", border: "1px solid #4318FF", borderRadius: "10px", padding: "10px" }}>
                <img src={work1} className="card-img-top" alt="..." />
              </div>
              <div className="card-body text-end">
                <img src={work2} alt="..." />
                <p className="mt-3">{work.service}</p>
                <h4 className="fw-bold mt-3">{work.title}</h4>
                <p className="card-text">{work.description}</p>
                <div className="d-flex gap-2 justify-content-end">
                  <button className="btn" style={{ backgroundColor: "#634AFF0D", color: "#4318FF" }}       onClick={handleClick}
>
                    تفاصيل أكثر
                  </button>
                  <button className="btn" style={{ backgroundColor: "#4318FF", color: "white" }}>
                    مشاهدة الديمو
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default Work
