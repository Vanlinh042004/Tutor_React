import { Link } from "react-router-dom";
import "../../Style/course.css";
function Courses() {
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
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${require("../../images/course-1.jpg")})`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>English</span> <span className="price">$250</span>
                  </p>
                  <h3 className="mb-3">
                    <Link to="/courseDetail">English for Tommorow</Link>
                  </h3>
                  <p>Địa chỉ</p>
                  <p>Yêu cầu</p>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>

                  <p className="d-flex justify-content-around">
                    <Link to="" className="btn btn-primary">
                      Xem chi tiết
                    </Link>
                    <Link to="" className="btn btn-danger">
                      Nhận lớp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${require("../../images/course-2.jpg")})`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>Science</span> <span className="price">$250</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">Computer Engineering</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p className="d-flex justify-content-around">
                    <Link to="" className="btn btn-primary">
                      Xem chi tiết
                    </Link>
                    <Link to="" className="btn btn-danger">
                      Nhận lớp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${require("../../images/course-3.jpg")})`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>Business</span> <span className="price">$250</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">Business Studies</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p className="d-flex justify-content-around">
                    <Link to="" className="btn btn-primary">
                      Xem chi tiết
                    </Link>
                    <Link to="" className="btn btn-danger">
                      Nhận lớp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${require("../../images/course-4.jpg")})`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>English</span> <span className="price">$250</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">English for Tommorow</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p className="d-flex justify-content-around">
                    <Link to="" className="btn btn-primary">
                      Xem chi tiết
                    </Link>
                    <Link to="" className="btn btn-danger">
                      Nhận lớp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${require("../../images/course-5.jpg")})`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>Science</span> <span className="price">$250</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">Computer Engineering</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p className="d-flex justify-content-around">
                    <Link to="" className="btn btn-primary">
                      Xem chi tiết
                    </Link>
                    <Link to="" className="btn btn-danger">
                      Nhận lớp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${require("../../images/course-6.jpg")})`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>Business</span> <span className="price">$250</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">Business Studies</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p className="d-flex justify-content-around">
                    <Link to="" className="btn btn-primary">
                      Xem chi tiết
                    </Link>
                    <Link to="" className="btn btn-danger">
                      Nhận lớp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Courses;
