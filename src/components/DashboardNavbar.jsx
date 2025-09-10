import React from "react";
import { Link } from "react-router-dom";

function DashboardNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          لوحة التحكم
        </Link>
        <div className="collapse navbar-collapse" id="navDashboard">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">الحجوزات</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">الصفحة الرئيسية</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;

