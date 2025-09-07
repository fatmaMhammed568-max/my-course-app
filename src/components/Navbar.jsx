import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // مسح بيانات المستخدم
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src="/assets/2.png" alt="Smart Skills Academy" className="me-2" />
          Smart Skills Academy
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">الرئيسية</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">الكورسات</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">تواصل معنا</Link></li>
          </ul>

          <div className="d-flex">
            {!user ? (
              <>
                <Link className="btn btn-light ms-2" to="/login">دخول</Link>
                <Link className="btn btn-warning ms-2" to="/register">إنشاء حساب</Link>
              </>
            ) : (
              <button className="btn btn-danger ms-2" onClick={handleLogout}>
                تسجيل خروج
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
