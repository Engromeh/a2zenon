const Footer = () => {
  return (
    <>
      <footer
        className="text-white py-5 px-5 w-100 text-center text-md-start d-none d-md-block"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div className="container-fluid">
          <div className="row text-center ">
            <br />
            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-md-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                الدعم
              </p>
              <ul
                className="list-unstyled "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                <li className="liinfooter">الحساب</li>

                <li className="liinfooter">مركز الدعم</li>

                <li className="liinfooter">تواصل معنا</li>

                <li className="liinfooter">الشات بوت </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-md-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                الوصول السريع{" "}
              </p>
              <ul
                className="list-unstyled "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                <li className="liinfooter">حجز معاد </li>

                <li className="liinfooter">خرائط التعلم</li>

                <li className="liinfooter">الوظائف المتاحة</li>

                <li className="liinfooter">التحليل والتخطيط</li>
              </ul>
            </div>
            <br />
            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                الشركة{" "}
              </p>
              <ul
                className="list-unstyled "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                <li className="liinfooter">بوبات الدفع</li>

                <li className="liinfooter">الاعمال</li>

                <li className="liinfooter">الفلوجات</li>

                <li className="liinfooter">احدث الTools</li>
              </ul>
            </div>
            <br />
            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                عن
              </p>

              <ul
                className="list-unstyled "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                <li className="liinfooter">معلومات عنا</li>

                <li className="liinfooter">المميزات</li>

                <li className="liinfooter">المقالات</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                A2ZENON
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  color: "#D9D9D9",
                }}
              >
                "نحن شركة متخصصة في البرمجة والتسويق والتصميم والاستضافات، نقدم
                حلولًا إبداعية ومبتكرة لتطوير أعمالك وتحقيق نجاحك الرقمي."
              </p>
              <div
                className="d-flex align-items-center justify-content-center px-3 py-2"
                style={{ border: "2px #D9D9D933 solid", borderRadius: "20px" }}
              >
                <button className="btn">ابحث</button>
                <input
                  type="email"
                  placeholder="Send Email"
                  className="border-0 bg-transparent text-white fw-bold me-2 p-2 w-100 text-center"
                  style={{
                    outline: "none",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "#D9D9D9",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
