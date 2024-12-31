import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../../Component/imgCourse";
import { getCourseDetail } from "../../Services/courseService";
import { post } from "../../Utils/request";
const randomImage = images[Math.floor(Math.random() * images.length)];
function CourseDetail() {
  const { slug } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const data = await getCourseDetail(slug);
        setCourse(data.course);
      } catch (error) {
        console.error(
          "There was a problem with fetching course detail:",
          error
        );
      }
    };

    fetchCourseDetail();
  }, [slug]);
  const handleClick = async () => {
    // const courseData = await post("courses/register-Course", true, course._id);
    // console.log(courseData);
  };
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="teacher-details d-md-flex">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${randomImage})`,
                      }}
                    />
                    <div className="text">
                      <h3>
                        {course.subject} - Lớp {course.grade}
                      </h3>
                      <span className="position">
                        Lương: {course.salary} - Phí: {course.fee}
                      </span>
                      <p>
                        <b>Hình thức: </b>
                        Dạy {course.teachingMode}
                      </p>
                      <p>
                        <b>Thời gian: </b> {course.schedule}
                      </p>
                      <p>
                        <b>Giới tính: </b> {course.sexTutor}
                      </p>
                      <p>
                        <b>Địa chỉ: </b>
                        {course.address}
                      </p>
                      <p>
                        <b>Thông tin: </b>
                        {course.studentInfo}
                      </p>
                      <p>
                        <b>Yêu cầu: </b>
                        {course.requirements}
                      </p>
                      <p>
                        <b>Liên hệ: </b>
                        {course.contact}
                      </p>
                      <button className="btn btn-danger" onClick={handleClick}>
                        Đăng ký nhận lớp
                      </button>
                      <div className="mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CourseDetail;
