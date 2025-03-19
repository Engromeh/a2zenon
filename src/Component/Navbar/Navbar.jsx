import logonave from "../../assets/logonavbar.svg";
import logoservice from "../../assets/logonav.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white z-2 px-3">
      <div className=" w-100 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <button
            className="btn text-white "
            style={{ backgroundColor: "#4318FF" }}
          >
            <img src={logoservice} alt="d" /> طلب خدمة{" "}
          </button>

          <button
            className="btn "
            style={{ backgroundColor: "#634AFF0F", color: "#4318FF" }}
          >
            تسجيل الدخول
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "#634AFF0F", color: "#4318FF" }}
          >
            EN
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul
            className="navbar-nav mx-auto d-flex"
            style={{ gap: "45px", direction: "rtl" }}
          >
            <li className="nav-item">
              <a className="nav-link  fw-bold" href="#">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                الأعمال
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                الخدمات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                معلومات عنا
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                احصل على سعر
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                المقالات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                تواصل معنا
              </a>
            </li>
          </ul>

          <img src={logonave} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
