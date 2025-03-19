import logonave from "../../assets/logonavbar.svg";
import logoservice from "../../assets/logonav.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white z-2 px-3 shadow-sm">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <button className="btn text-white" style={{ backgroundColor: "#4318FF" }}>
            <img src={logoservice} alt="طلب خدمة" /> طلب خدمة
          </button>

          <button className="btn" style={{ backgroundColor: "#634AFF0F", color: "#4318FF" }}>
            تسجيل الدخول
          </button>
          <button className="btn" style={{ backgroundColor: "#634AFF0F", color: "#4318FF" }}>
            EN
          </button>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex" style={{ gap: "45px", direction: "rtl" }}>
            {[
              { path: "/", label: "الرئيسية" },
              { path: "/layout/Work", label: "الأعمال" },
              { path: "#", label: "الخدمات" },
              { path: "/layout/Aboutus", label: "معلومات عنا" },
              { path: "#", label: "احصل على سعر" },
              { path: "/layout/Artical", label: "المقالات" },
              { path: "#", label: "تواصل معنا" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link fw-bold position-relative ${
                    location.pathname === item.path ? "active-link" : ""
                  }`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <img src={logonave} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
