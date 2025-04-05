import React, { useRef } from "react";
import work1 from "../../assets/work1.svg";
import media1 from "../../assets/media1.svg";
import media2 from "../../assets/media 2.svg";
import stars from "../../assets/stars.svg";
import media3 from "../../assets/media3.svg";
import about2 from "../../assets/aboutus logo2.svg";


const Media = () => {
    const customerData = [
      {
        id: 1,
        name: "تطوير الأنظمة",
        service: "تطوير",
        review: "نقوم بتطوير أنظمة برمجية متكاملة مخصصة لتلبية احتياجات عملك بأحدث التقنيات وأفضل الممارسات البرمجية.",
        stars: stars,
        logo: media3,
      },
      {
        id: 2,
        name: "تطوير الأنظمة"
        ,
        service: "إدارة الحملات",
        review: "نقوم بتطوير أنظمة برمجية متكاملة مخصصة لتلبية احتياجات عملك بأحدث التقنيات وأفضل الممارسات البرمجية.",
        stars: stars,
        logo: media3,
      },
      {
        id: 3,
        name: "تطوير الأنظمة",
        service: "تحليل البيانات",
        review: "نقوم بتطوير أنظمة برمجية متكاملة مخصصة لتلبية احتياجات عملك بأحدث التقنيات وأفضل الممارسات البرمجية.",
        stars: stars,
        logo: media3,
      },
      
    ];
    const workImages = [
        { id: 1, src: work1, alt: "Work Image 1" },
        { id: 2, src: work1, alt: "Work Image 2" },
        { id: 3, src: work1, alt: "Work Image 3" },
        { id: 4, src: work1, alt: "Work Image 4" },
        { id: 4, src: work1, alt: "Work Image 4" },
        { id: 4, src: work1, alt: "Work Image 4" },
        { id: 4, src: work1, alt: "Work Image 4" },
        { id: 4, src: work1, alt: "Work Image 4" },

      ];
      

  return (
    <div className=" container">
    <section>
      <h3 className="titel-all text-center mt-4 ">شركة بتوع ميديا</h3>
      <p className=" text-center">
        نقدم خدمات تسويق رقمي شاملة تتضمن تحسين محركات البحث، إدارة
        <br />
        الإعلانات، وإدارة وسائل التواصل الاجتماعي.{" "}
      </p>

      <div class="card mb-3 border-0" style={{ backgroundColor: "#634AFF0D" , borderRadius:"20px" }}>
        <div class="row g-0">
          <div class="col-md-4" style={{padding:"15px"}}>
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #4318FF",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <img src={work1} className="card-img-top" alt="..." />
            </div>{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body text-end">
              <div className="d-flex justify-content-end align-items-center gap-2 mt-2">
                <span style={{ direction: "rtl", color: "#4318FF" }}>
                  30,يناير,2025
                </span>
                <img src={media1} alt="artical2" />
                <img src={media2} alt="artical3" />
              </div>

              <h5 class="card-title pt-3">خدمة البرمجة</h5>
              <p class="card-text " style={{color:"#6B7280" , fontSize:"20px"}}>
                قد تمر عليك بعض المشاكل من العميل ويجب التعامل معها بشكل جيد حتى
                <br/>
                تتجنب بعض المشاكل وتكسبها في صالحك بالنسبة لما بعدالشراء يمكن أن
                <br/>

                يشعر المستهلك بالتنافر وقد يظن أن شراء منتج آخر كان سيكون أفضل.
                <br/>

                لذلك يؤدي نشر نصائح جيدة حول المنتج إلى معالجة هذا الشعور وزيادة
                فرص إعادة
                <br/>

                 الشراء والولاء لعلامتك التجارية ، لذلك تقوم الشركات
                العالمية باختيار موظفيها 
                <br/>

                بحرص شديد بقدر إهتمامهم بعملائهم
                وإكتساب ولائهم.{" "}
              </p>
             
            </div>
          </div>
        </div>
      </div>
      </section>


      <section>
      <h3 className="titel-all text-center mt-4 ">الخدمات المقدمة</h3>
      <p className=" text-center">
        نقدم خدمات تسويق رقمي شاملة تتضمن تحسين محركات البحث، إدارة
        <br />
        الإعلانات، وإدارة وسائل التواصل الاجتماعي.{" "}
      </p>


      <div
          
          className="d-flex gap-3 overflow-auto"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {customerData.map((customer) => (
            <div
              key={customer.id}
              className="card text-end"
              style={{
                width: "25rem",
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
              <div className="d-flex gap-2 justify-content-end p-3">
                    
                    <button
                      className="btn"
                      style={{ backgroundColor: "#634AFF0D", color: "#4318FF" }}
                    >
                      تفاصيل أكثر
                    </button>
                    <button
                      className="btn"
                      style={{ backgroundColor: "#4318FF", color: "white" }}
                    >
                      اطلب الخدمة
                    </button>
                  </div>
            </div>

          ))}
        </div>
   
      </section>

<section>
  <div className="container py-5">
             <div
               className="row align-items-center bg-light p-4 rounded-4 shadow-sm"
               style={{ backgroundColor: "#634AFF0D" }}
             >
               
 
               <div className=" text-end ms-auto">
                 <img src={about2} alt="about2" className=" mb-4" />
                 
                 <p className="text-black text-center" style={{fontSize:"25px"}}>
                 تتقدم شركتنا بخالص الشكر والتقدير على الخدمات المميزة التي قدمتموها لنا، والتي كان لها أثر إيجابي كبير في 
                 <br/>
                 تعزيز أعمالنا. نثمن جهودكم واحترافية فريقكم، ونتطلع إلى مزيد من التعاون والنجاح المشترك.
                 </p>
               </div>
             </div>
           </div>
</section>

<section>
<h3 className="titel-all text-center mb-3 ">صور العمل</h3>

<div className="row">
    {workImages.map((img) => (
      <div key={img.id} className="col-12 col-md-3 mb-3">
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #4318FF",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <img src={img.src} className="card-img-top" alt={img.alt} />
        </div>
      </div>
    ))}
  </div>

</section>
      
    </div>
  );
};

export default Media;
