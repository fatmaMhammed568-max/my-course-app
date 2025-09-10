import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // البحث عن المستخدم المدخل
    const matchedUser = savedUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (matchedUser) {
      setUser(matchedUser); // تخزين المستخدم الحالي في الحالة
      alert("تم تسجيل الدخول بنجاح");
      navigate("/"); // العودة للصفحة الرئيسية
    } else {
      setError("الإيميل أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow w-50">
        <h2 className="text-center mb-4">تسجيل الدخول</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="الإيميل"
            value={form.email}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={form.password}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />

          {error && <p className="text-danger text-center">{error}</p>}

          <button type="submit" className="btn btn-success w-100">
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
