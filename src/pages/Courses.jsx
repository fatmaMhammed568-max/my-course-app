import React from "react";
import courses from "../utils/data";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div>
      <h3 className="mb-4">كل الكورسات</h3>
      <div className="row">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
