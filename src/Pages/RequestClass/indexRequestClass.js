import React, { useState, useEffect } from "react";
import { get } from "../../Utils/request";

const IndexRequestClass = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await get("courses/registrations", true);
        console.log("Pending registrations:", response.pendingRegistrations);
        setCourses(
          response.pendingRegistrations.map((reg) => ({
            id: reg.registrationId,
            subject: reg.course.subject,
            grade: reg.course.grade,
            salary: reg.course.salary,
            address: reg.course.address,
            sexTutor: reg.course.sexTutor,
            requirements: reg.course.requirements,
          }))
        );
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-5">
      {courses && courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {course.subject} - {course.grade}
              </h3>
              <p className="mb-1">
                <b>Lương:</b> <span className="price">{course.salary}</span>
              </p>
              <p className="mb-1">
                <b>Địa chỉ:</b> {course.address}
              </p>
              <p className="mb-1">
                <b>Giới tính yêu cầu:</b> {course.sexTutor}
              </p>
              <p className="mb-2">
                <b>Yêu cầu:</b> {course.requirements}
              </p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => handlePayment(course.id)}
              >
                Thanh toán
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Không có lớp học nào được nhận.</p>
      )}
    </div>
  );
};

// Hàm xử lý thanh toán
const handlePayment = (courseId) => {};

export default IndexRequestClass;
