import ai from "../../assets/Ai.svg";
import face from "../../assets/face.svg";
import twiter from "../../assets/twiter.svg";
import gogal from "../../assets/gogal.svg";
import youtube from "../../assets/youtube.svg";
import linkid from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div
        className=" container  mt-5 text-center"
        style={{
          backgroundColor: "#4318FF",
          height: "15rem",
          borderRadius: "50px 50px 0px 0px",
        }}
      >
        <div className=" text-center text-white align-content-center ">
          <h3 className=" fw-bold" style={{ marginTop: "6%" }}>
            هل أنت مستعد لبدء مشروعك؟
          </h3>
          <p>اتصل بنا اليوم لمناقشة كيفية تحقيق رؤيتك</p>
        </div>
        <div className=" d-flex gap-4 justify-content-center align-items-center">
          <button
            className="btn  d-flex gap-2 fw-bold"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px soild",
              color: "#11181CB8",
            }}
          >
            المساعد الذكي
            <img src={ai} alt="ai" />
          </button>
          <button
            className="btn fw-bold"
            style={{ backgroundColor: "#FFFFFF", color: "#11181CB8" }}
          >
            طلب استشارة مجانية
          </button>
        </div>
      </div>
      <footer class="bg-light  rounded shadow-lg mx-3  p-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3 text-center">
              <h5 class="fw-bold">الدعم</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    الحساب
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    مركز الدعم
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter  text-decoration-none">
                    <img src={ai} alt="ff" className=" me-1" />
                    الشات بوت{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-2 text-center">
              <h5 class="fw-bold">الوصول السريع</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    حجز مقعد
                  </a>
                </li>
                <li>
                  <a href="#" class=" liinfooter text-decoration-none">
                    خرائط التعلم
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    الوظائف المتاحة
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    التحليل والتخطيط
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 text-center">
              <h5 class="fw-bold">الشركة</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="liinfooter text-decoration-none pb-4">
                    بوابات الدفع
                  </a>
                </li>

                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    الأعمال
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    العروضات
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    أحدث الـ Tools
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 text-center">
              <h5 class="fw-bold">عن</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    معلومات عنا
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    المميزات
                  </a>
                </li>
                <li>
                  <a href="#" class="liinfooter text-decoration-none">
                    المقالات
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 text-end">
              <h5 class="fw-bold">A2ZENON</h5>
              <p class="text-dark">
                "نحن شركة متخصصة في البرمجة والتسويق والتصميم والاستشارات، نقدم
                حلول إبداعية ومبتكرة لتطوير أعمالك وتحقيق نجاحك الرقمي."
              </p>
              <form className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="ابحث"
                />
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#4318FF" }}
                >
                  ابحث
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div class="row mt-4 d-flex justify-content-between px-3 ">
        <div class="col-md-6 d-flex gap-2">
          <img src={linkid} alt="ss" className="img-footer" />

          <img src={twiter} alt="ss" className="img-footer" />
          <img src={youtube} alt="ss" className="img-footer" />
          <img src={gogal} alt="ss" className="img-footer" />
          <img src={face} alt="ss" className="img-footer" />
        </div>
        <div class="col-md-6  text-end d-flex justify-content-end">
          <p class="text-muted">© A2ZENON حقوق الملكية الفكرية 2025</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
