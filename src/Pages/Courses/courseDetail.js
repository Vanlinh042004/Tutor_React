import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../../Component/imgCourse";
import { getCourseDetail } from "../../Services/courseService";
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
                        {course.subject} {course.grade}
                      </h3>
                      <span className="position">
                        Lương ${course.salary} - Phí ${course.fee}
                      </span>
                      <p>
                        {course.teachingMode} - {course.schedule}
                      </p>
                      <p>Gia sư {course.sexTutor}</p>
                      <p>{course.address}</p>
                      <p>{course.studentInfo}</p>
                      <p>{course.requirements}</p>
                      <p>{course.contact}</p>
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
