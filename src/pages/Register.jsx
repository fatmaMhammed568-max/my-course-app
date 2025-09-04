import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!form.email) {
      newErrors.email = "الإيميل مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "الإيميل غير صحيح";
    }
    if (!form.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (form.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("user", JSON.stringify(form));
      alert("تم إنشاء الحساب بنجاح ");
      navigate("/login");
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow w-50">
        <h2 className="text-center mb-4">إنشاء حساب</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={form.name}
            onChange={handleChange}
            className="form-control mb-2"
            required
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="الإيميل"
            value={form.email}
            onChange={handleChange}
            className="form-control mb-2"
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={form.password}
            onChange={handleChange}
            className="form-control mb-2"
            required
          />
          {errors.password && (
            <p className="text-danger">{errors.password}</p>
          )}

          <button type="submit" className="btn btn-primary w-100 mt-3">
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
