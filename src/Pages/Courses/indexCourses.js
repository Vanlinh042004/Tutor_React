import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../Style/course.scss";
import images from "../../Component/imgCourse";
import { getCourses } from "../../Services/courseService";
function Courses() {
  const [courses, setCourses] = useState([]);
  const [totalPages, setTotalCourses] = useState(0);
  const [pageActive, setCurrentPage] = useState(1);
  const assignRandomImages = (courses) => {
    return courses.map((course) => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      return { ...course, image: randomImage };
    });
  };
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses(pageActive);
        setCourses(assignRandomImages(data.courses));
        setTotalCourses(data.totalPages);
      } catch (error) {
        console.error(
          "There was a problem with the get courses operation:",
          error
        );
      }
    };
    fetchCourses();
  }, [pageActive]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(0, pageActive - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow);

    for (let i = startPage; i < endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`pagination__item ${
            i === pageActive ? "pagination__item--active" : ""
          }`}
        >
          <button
            className="pagination__link"
            onClick={() => handlePageChange(i)}
          >
            {i + 1}
          </button>
        </li>
      );
    }

    if (startPage > 0) {
      pages.unshift(
        <li
          key="start-ellipsis"
          className="pagination__item pagination__item--disabled"
        >
          <span className="pagination__link">...</span>
        </li>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <li
          key="end-ellipsis"
          className="pagination__item pagination__item--disabled"
        >
          <span className="pagination__link">...</span>
        </li>
      );
    }

    return pages;
  };
  return (
    <>
      <section className="ftco-search-course">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full-wrap d-flex ">
                <div className="one-third order-last p-5">
                  <h3 className=" text-center mb-4">Bạn muốn tìm kiếm ?</h3>

                  <div className="d-flex justify-content-end align-items-center">
                    <p className="mb-0 me-3 text-warning">Hoặc đăng nhu cầu</p>
                    <Link to="/registerCourse" className="btn btn-warning">
                      TẠI ĐÂY
                    </Link>
                  </div>

                  <form action="#" className="course-search-form">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập lớp học bạn muốn tìm kiếm"
                      />
                      <input
                        type="submit"
                        value="Tìm kiếm"
                        className="submit ml-2"
                      />
                    </div>
                  </form>
                  <form action="#" className="course-search-form">
                    <div className="form-group d-flex">
                      <select className="form-control" defaultValue="">
                        <option value="" disabled>
                          Chọn môn học
                        </option>
                        <option value="math">Toán</option>
                        <option value="literature">Văn</option>
                        <option value="english">Tiếng Anh</option>
                        <option value="science">Khoa học</option>
                      </select>
                      <input
                        type="submit"
                        value="Tìm kiếm"
                        className="submit ml-2"
                      />
                    </div>
                  </form>
                </div>
                <div
                  className="one-forth order-first img"
                  style={{
                    backgroundImage: `url(${require("../../images/image_1.jpg")})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {courses.map((course) => (
              <div className="col-md-4 d-flex" key="course._id">
                <div className="course align-self-stretch">
                  <a
                    href="#"
                    className="img"
                    style={{
                      backgroundImage: `url(${course.image})`,
                    }}
                  />
                  <div className="text p-4">
                    <p className="category">
                      <span className="price">${course.salary}</span>
                    </p>
                    <h3 className="mb-3">
                      <p className="text-decoration-none">
                        {course.subject} {course.grade}
                      </p>
                    </h3>
                    <p>{course.address}</p>
                    <p>Gia sư {course.sexTutor}</p>
                    <p>{course.requirements}</p>

                    <p className="d-flex justify-content-around">
                      <Link
                        to={`/courses/${course.slug}`}
                        className="btn btn-primary"
                      >
                        Xem chi tiết
                      </Link>
                      <Link to="" className="btn btn-danger">
                        Nhận lớp
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ftco-page">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <nav>
              <ul className="pagination">
                <li
                  className={`pagination__item ${
                    pageActive === 0 ? "pagination__item--disabled" : ""
                  }`}
                >
                  <button
                    className="pagination__link"
                    onClick={() => handlePageChange(pageActive - 1)}
                  >
                    Previous
                  </button>
                </li>
                {renderPagination()}
                <li
                  className={`pagination__item ${
                    pageActive === totalPages - 1
                      ? "pagination__item--disabled"
                      : ""
                  }`}
                >
                  <button
                    className="pagination__link"
                    onClick={() => handlePageChange(pageActive + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
export default Courses;
