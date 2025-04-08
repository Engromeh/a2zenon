import React from "react";
import Designbg from "../assets/hostingbg.svg";
import videoicon from "../assets/videoicon.svg";
import dashindesign from "../assets/dashindesign.svg";
import design1 from "../assets/design1.svg";

const Design = () => {
    const Designservices = [
        {
          title: "استضافة",
          subtitle: "استضافة المواقع",
          description: "نوفر خدمات استضافة موثوقة وآمنة مع دعم فني على مدار الساعة لضمان استمرارية عمل موقعك بدون انقطاع.",
        },
        {
          title: "تصميم",
          subtitle: "تصميم المواقع",
          description: "نصمم مواقع عصرية ومتجاوبة تعكس هوية مشروعك وتجذب الزوار.",
        },
        {
          title: "برمجة",
          subtitle: "تطوير الأنظمة",
          description: "نقوم بتطوير أنظمة ذكية حسب احتياجاتك، باستخدام أحدث التقنيات.",
        },

      ];
      
  return (
    <>
      <section>
        <img src={Designbg} alt=" Designbg" className=" w-100 h-100" />
        <div style={{ position: "absolute", right: "35rem", bottom: "25rem" }}>
          <h3 className=" text-center text-white fw-bold">
            تصميم وتنفيذ المواقع
          </h3>
          <p className=" text-center text-white">
            نصمم مواقع إلكترونية عصرية وجذابة مع واجهات
            <br />
            مستخدم سهلة الاستخدام ومتوافقة مع جميع الأجهزة.
          </p>
          <div className="d-flex gap-3 justify-content-center pt-5">
            <button
              className="btn d-flex align-items-center justify-content-between gap-2 px-4 py-2"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#4318FF",
                direction: "rtl",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              فيديو توضيحي بالخدمة{" "}
              <img
                src={videoicon}
                alt="video"
                style={{
                  backgroundColor: "#4318FF",
                  borderRadius: "50%",
                  width: "30px",
                  padding: "3px",
                  height: "25px",
                }}
              />
            </button>

            <button
              className="btn me-2"
              style={{
                backgroundColor: "#6A4CFF",
                color: "white",
                fontWeight: "bold",
              }}
            >
              طلب دعم تعريفي
            </button>
          </div>
        </div>
        <img
          src={dashindesign}
          alt="dashindesign"
          style={{ position: "absolute", right: "12rem", top: "26rem" }}
        />
      </section>


      <section
  style={{ backgroundColor: "#4318FF0F", marginTop: "22rem" }}
>
  <div className="row align-items-center flex-row-reverse">
   

    <div className="col-md-6 text-end px-5" style={{fontSize:"24px"}}>
      <h3 className="fw-bold z-3">لوريم إيبسوم (Lorem Ipsum)</h3>
      <p>
        هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
        <br />
        ويُستخدم في صناعات المطابع ودور النشر.
        <br />
        كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
        <br />
        عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،
        <br />
        لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
        <br />
        خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً.
      </p>
    </div>
    <div className="col-md-6 text-center">
      <img src={design1} alt="design1" className="img-fluid" />
    </div>
  </div>
</section>

<section>
<h3 className="titel-all text-center mt-4 ">الخدمات </h3>
        <p className=" text-center">
          اي تو زينون المصدر الأمثل لكل ما يتعلق بالتسويق الابداعي والفعّال. نحن
          نقدم لك فرصة
          <br />
           استثنائية لاكتساب نجاح كبير لأعمالك في عالم التسويق
        </p>
        <div className="container mt-5">
  <div className="row">
    {Designservices.map((service, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div
          className="card border-0 h-100"
          style={{ width: "100%", backgroundColor: "#634AFF0D" }}
        >
          <div className="card-body text-end">
            <h6 className="card-title">{service.title}</h6>
            <h5 className="card-subtitle mb-2 text-black fw-bold">
              {service.subtitle}
            </h5>
            <p className="card-text">{service.description}</p>
            <button
              className="btn text-white fw-bold"
              style={{ backgroundColor: "#4318FF", borderRadius: "15px" }}
            >
              اطلب الخدمة
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


</section>


      <section
  style={{ backgroundColor: "#4318FF0F" }}

>
  <div className="row align-items-center flex-row-reverse">
    <div className="col-md-6 text-center">
      <img src={design1} alt="design1" className="img-fluid" />
    </div>

    <div className="col-md-6 text-end px-5" style={{fontSize:"24px"}}>
      <h3 className="fw-bold z-3">لوريم إيبسوم (Lorem Ipsum)</h3>
      <p>
        هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
        <br />
        ويُستخدم في صناعات المطابع ودور النشر.
        <br />
        كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
        <br />
        عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،
        <br />
        لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
        <br />
        خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً.
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default Design;
