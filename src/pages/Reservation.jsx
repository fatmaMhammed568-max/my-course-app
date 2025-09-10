import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courses from "../utils/data";

function Reservation() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "",
    receipt: null,
  });
  const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (name === "receipt" && files && files[0]) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, receipt: reader.result }); // Base64 string
    };
    reader.readAsDataURL(files[0]); // يحول الصورة Data URL
  } else {
    setForm({ ...form, [name]: value });
  }
};



  const handleSubmit = (e) => {
    e.preventDefault();

    let Reservations = JSON.parse(localStorage.getItem("Reservations")) || [];

    Reservations.push({
      ...form,
      courseId: course.id,
      courseTitle: course.title,
    });

    localStorage.setItem("Reservations", JSON.stringify(Reservations));

    alert("تم الحجز بنجاح!");
    setForm({ name: "", email: "", phone: "", payment: "", receipt: null });

    
  };

  if (!course) return <h2>الكورس غير موجود</h2>;

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow w-50">
        <h3 className="mb-3 text-center">حجز الكورس: {course.title}</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            placeholder="الاسم"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-2"
            placeholder="الإيميل"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-2"
            placeholder="رقم الهاتف"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <select
            className="form-control mb-3"
            name="payment"
            value={form.payment}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              اختر طريقة الدفع
            </option>
            <option value="كاش">كاش</option>
            <option value="انستا باي">انستا باي</option>
          </select>

          {form.payment === "انستا باي" && (
            <input
              type="file"
              name="receipt"
              accept="image/*"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />
          )}

          <button className="btn btn-primary w-100">تأكيد الحجز</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
