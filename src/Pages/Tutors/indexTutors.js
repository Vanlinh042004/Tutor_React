import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Style/tutors.scss";
function Tutors() {
  // const [tutors, setTutors] = useState([]);
  // const [pageActive, setPageActive] = useState(0);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://giasudomcon.glitch.me/tutors")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //setTutors(data);
  //       console.log(data);
  //     });
  // }, []);
  // console.log(tutors);
  // const handlePageChange = (newPage) => {
  //   setPageActive(newPage);
  // };
  // const renderPagination = () => {
  //   const pages = [];
  //   const maxPagesToShow = 5;
  //   const startPage = Math.max(0, pageActive - Math.floor(maxPagesToShow / 2));
  //   const endPage = Math.min(totalPage, startPage + maxPagesToShow);

  //   for (let i = startPage; i < endPage; i++) {
  //     pages.push(
  //       <li
  //         key={i}
  //         className={`pagination__item ${
  //           i === pageActive ? "pagination__item--active" : ""
  //         }`}
  //       >
  //         <button
  //           className="pagination__link"
  //           onClick={() => handlePageChange(i)}
  //         >
  //           {i + 1}
  //         </button>
  //       </li>
  //     );
  //   }

  //   if (startPage > 0) {
  //     pages.unshift(
  //       <li
  //         key="start-ellipsis"
  //         className="pagination__item pagination__item--disabled"
  //       >
  //         <span className="pagination__link">...</span>
  //       </li>
  //     );
  //   }

  //   if (endPage < totalPage) {
  //     pages.push(
  //       <li
  //         key="end-ellipsis"
  //         className="pagination__item pagination__item--disabled"
  //       >
  //         <span className="pagination__link">...</span>
  //       </li>
  //     );
  //   }

  //   return pages;
  // };
  return (
    <>
      <section className="ftco-search-course">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full-wrap d-flex ">
                <div className="one-third order-last p-5">
                  <h3 className=" text-center mb-4">Bạn muốn tìm kiếm ?</h3>
                  <form action="#" className="course-search-form">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập Gia sư bạn muốn tìm kiếm"
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
                          Chọn Gia sư
                        </option>

                        <option value="Female">Nam</option>
                        <option value="Male">Nữ</option>
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

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h2 className="mb-4">Our Experience Advisor</h2>
            </div>
          </div>
          {/* <div className="row">
            {tutors.map((tutor) => (
              <div className="col-lg-4 mb-sm-4" key={tutor.id}>
                <div className="staff">
                  <div className="d-flex mb-4">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${require("../../images/person_1.jpg")})`,
                      }}
                    />
                    <div className="info ml-4">
                      <h3>
                        <Link to="/detail">{tutor.name}</Link>
                      </h3>
                      <span className="position">{tutor.specialization}</span>
                      <p className="ftco-social d-flex">
                        <Link
                          to="#"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <span className="fab fa-twitter" />
                        </Link>
                        <Link
                          to="#"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <span className="fab fa-facebook" />
                        </Link>
                        <Link
                          to="#"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <span className="fab fa-instagram" />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="text">
                    <p>{tutor.introduction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* <section className="ftco-page">
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
                    pageActive === totalPage - 1
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
      </section> */}
    </>
  );
}
export default Tutors;
