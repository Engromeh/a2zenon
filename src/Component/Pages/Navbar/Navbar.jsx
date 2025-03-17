import logonave from "../../../assets/logonav.svg";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{
        backgroundColor: "white",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
      }}
    >
      <div className="d-flex align-items-center ms-2">
        <form className="button-nav d-flex gap-2">
          <a
            type="submit"
            to={"/login"}
            className="button-nav btn w-100 w-lg-auto"
            style={{
              color: "#FFFFFF",
              backgroundColor: "#4318FF",
              padding: "5px 12px",
              fontSize: "15px",
              whiteSpace: "nowrap",
              display: "flex",
              gap: "20px",
            }}
          >
            <img src={logonave} alt="logo" />
            طلب خدمة
          </a>
          <a
            type="submit"
            to={"/register"}
            className="button-nav btn w-100 w-lg-auto"
            style={{
              color: "#4318FF",
              backgroundColor: "#634AFF0F",
              fontWeight: "bold",
              padding: "5px 12px",
              fontSize: "15px",
              whiteSpace: "nowrap",
            }}
          >
            تسجيل دخول
          </a>
          <button
            type="submit"
            className="button-nav btn w-100 w-lg-auto"
            style={{
              color: "#4318FF",
              backgroundColor: "#634AFF0F",
              fontWeight: "bold",
              padding: "5px 12px",
              fontSize: "15px",
              whiteSpace: "nowrap",
            }}
          >
            EN
          </button>
        </form>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <button
          className="navbar-toggler ms-1 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ width: "auto", padding: "5px 8px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center w-100"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0  gap-5 p-0 d-flex align-items-center">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#192335B2",
                }}
              >
                المقالات
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#192335B2",
                }}
              >
                احصل علي سعر{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#192335B2",
                }}
              >
                تواصل معنا{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#192335B2",
                }}
              >
                معلومات عنا{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#192335B2",
                }}
              >
                الخدمات{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#192335B2",
                }}
              >
                الاعمال{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#192335B2",
                }}
              >
                الرئيسية{" "}
              </a>
            </li>
          </ul>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>A2ZENON</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
