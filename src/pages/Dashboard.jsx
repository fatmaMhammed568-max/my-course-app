import React, { useState, useEffect } from "react";
import DashboardNavbar from "../components/DashboardNavbar";

function Dashboard() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem("Reservations")) || [];
    setReservations(savedReservations);
  }, []);

  return (
    <>
      <DashboardNavbar /> {/* ناف بار خاص بالداش بورد */}
      <div className="container my-5">
        <h2 className="mb-4 text-center text-primary">كل الحجوزات</h2>
        {reservations.length === 0 ? (
          <p className="text-center text-info">لا توجد حجوزات حتى الآن.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th>اسم الطالب</th>
                  <th>الإيميل</th>
                  <th>رقم الهاتف</th>
                  <th>الكورس</th>
                  <th>طريقة الدفع</th>
                  <th>ايصال الدفع</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((res, index) => (
                  <tr key={index}>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>{res.courseTitle}</td>
                    <td>{res.payment}</td>
         <td>
  {res.payment === "انستا باي" && res.receipt ? (
    <a
      href={res.receipt}
      download="receipt.png" // كمان ممكن ينزلها كملف
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-sm btn-outline-primary"
    >
      عرض الايصال
    </a>
  ) : (
    "-"
  )}
</td>



                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
