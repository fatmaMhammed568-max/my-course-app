import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={course.image} className="card-img-top" alt={course.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text text-muted">{course.description}</p>
          <div className="mt-auto d-flex align-items-center justify-content-between">
            <span className={`badge ${course.price === 0 ? "badge-free" : "badge-paid"}`}>
              {course.price === 0 ? "مجاني" : `${course.price} ج`}
            </span>
            <Link to={`/course/${course.slug}`} className="btn btn-primary btn-round">
              عرض التفاصيل
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
