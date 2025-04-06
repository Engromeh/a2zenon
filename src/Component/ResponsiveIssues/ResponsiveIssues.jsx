import React from "react";
import css from "../../assets/css3.svg";
import artical2 from "../../assets/artical2.svg";
import artical3 from "../../assets/artical3.svg";
import Like from "../../assets/like.svg";
import Love from "../../assets/love.svg";
import pepole from "../../assets/pepole.svg";
import isseuse1 from "../../assets/isseuse1.svg";
import isseuse2 from "../../assets/issues2.svg";

const ResponsiveIssues = () => {
  return (
    <div className="container py-5">
      <section
        className="mb-5 p-4  rounded shadow-sm text-end"
        style={{ backgroundColor: "#634AFF0F" }}
      >
        <div className="d-flex  justify-content-between  mb-3">
          <img
            src={css}
            alt="CSS Logo"
            width={50}
            className="me-3 d-flex justify-content-center align-items-center"
          />
          <h4 className=" text-start" style={{ direction: "rtl" }}>
            مشكلة الـ responsive في الـ CSS
          </h4>
        </div>
        <p className="text-muted">
          "كون الموقع يظهر بشكل جيد على جميع الشاشات يعتبر من أهم
          <br />
          التحديات عند تصميم صفحات الويب،
          <br />
          تعرّف على أبرز المشكلات وكيفية التعامل معها"
        </p>
        <div className=" d-flex gap-3 justify-content-end">
          <div className=" d-flex gap-2 align-items-center text-muted mt-3">
            <div>
              <img src={Love} alt="Love" /> اعجبتني
            </div>
            <div>
              <img src={Like} alt="Like" /> جيدة
            </div>
            <div>
              <img src={pepole} alt="Views" /> 78787
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-2 mt-2">
            <span className="text-muted" style={{ direction: "rtl" }}>
              30,يناير,2025
            </span>
            <img src={artical2} alt="artical2" />
            <img src={artical3} alt="artical3" />
          </div>
        </div>
      </section>

      <section
        className="mb-5 p-4 rounded shadow-sm"
        style={{ backgroundColor: "#634AFF0F" }}
      >
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={isseuse1}
              alt="responsive issue"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8 text-end">
            <div className="d-flex align-items-start gap-2 text-end">
              <h5 className=" flex-grow-1" style={{ direction: "rtl" }}>
                مشكلة الـ Responsive في CSS وكيفية التعامل معها
              </h5>

              <img
                src={isseuse2}
                alt="responsive issue"
                className="img-fluid rounded"
              />
            </div>

            <p>
              مع تطور الويب وتنوع الأجهزة المستخدمة لتصفح المواقع أصبحت
              <br />
              قابلية التوافق مع مختلف الشاشات (Responsive Design) من أهم
              التحديات.
              <br />
              والتي يتطلب من المصمم استخدام تقنيات مناسبة تعتمد على
              <br />
              CSS مثل flexbox والـ grid، بالإضافة إلى استخدام التقنيات الأخرى
              كتصغير الصور الكبيرة.
            </p>
          </div>
        </div>
      </section>
      <section
        className="mb-5 p-4 rounded shadow-sm"
        style={{ backgroundColor: "#634AFF0F" }}
      >
        <div className="row align-items-center">
          <div className="col-md-8 text-end">
            <p>
              مع تطور الويب وتنوع الأجهزة المستخدمة لتصفح المواقع أصبحت
              <br />
              قابلية التوافق مع مختلف الشاشات (Responsive Design) من أهم
              التحديات.
              <br />
              والتي يتطلب من المصمم استخدام تقنيات مناسبة تعتمد على
              <br />
              CSS مثل flexbox والـ grid، بالإضافة إلى استخدام التقنيات الأخرى
              كتصغير الصور الكبيرة.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={isseuse1}
              alt="responsive issue"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      <section
        className="mb-5 p-4 rounded shadow-sm"
        style={{ backgroundColor: "#634AFF0F" }}
      >
        <div className=" text-end">
          <div className="d-flex align-items-start gap-2 text-end">
            <h5 className=" flex-grow-1" style={{ direction: "rtl" }}>
              مشكلة الـ Responsive في CSS وكيفية التعامل معها
            </h5>

            <img
              src={isseuse2}
              alt="responsive issue"
              className="img-fluid rounded"
            />
          </div>

          <p>
            عدم تناسب العناصر مع أحجام الشاشات المختلفة
            <br/>
              عند تصميم موقع باستخدام
            وحدات قياس ثابتة مثل px، قد يظهر التصميم جيدًا على شاشة معينة
            <br/>
             ولكنه
            يتسبب في مشاكل على شاشات أخرى ذات أحجام مختلفة.
            <br/>
            <br/>
             النصوص والصور غير
            القابلة للتكيف  
            <br/>
            قد تبدو النصوص كبيرة جدًا أو صغيرة جدًا على بعض
            الأجهزة، وقد تمتد الصور خارج حدود الشاشة إذا لم يتم
            <br/>
             ضبطها بشكل صحيح.
             <br/>    

              <br/>
            مشاكل في استخدام الـ Media Queries 
            <br/>
             عدم تحديد نقاط توقف
            (breakpoints) مناسبة قد يؤدي إلى ظهور التصميم غير متناسق على بعض
            <br/>
            الأجهزة. 
            <br/>
            <br/>
            عدم استخدام وحدات قياس مرنة 
            <br/>
             الاعتماد على وحدات مثل px

            بدلاً من em, rem, %, أو vw/vh يمكن أن يؤدي إلى تجربة مستخدم غير
            مرضية 
            <br/>
            على الشاشات المختلفة.
            <br/>     <br/>
             القوائم والتخطيطات المعقدة 
             <br/>
              قد تكون بعض
            التخطيطات غير قابلة للتكيف بسهولة، مما يجعل من الصعب تقديم تجربة
            متناسقة على جميع الأجهزة.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResponsiveIssues;
