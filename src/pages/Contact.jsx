import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح ");
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow w-50">
        <h3 className="mb-3 text-center">تواصل معنا</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="ادخل اسمك"
            required
          />
          <input
            className="form-control mb-2"
            type="email"
            placeholder="ادخل بريدك الإلكتروني"
            required
          />
          <textarea
            className="form-control mb-3"
            rows={5}
            placeholder="اكتب رسالتك هنا"
            required
          ></textarea>
          <button type="submit" className="btn btn-success w-100">
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
