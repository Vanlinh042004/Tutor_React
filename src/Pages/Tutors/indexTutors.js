import { Link } from "react-router-dom";
import "../../css/tutors.css";
function Tutors() {
  return (
    <>
      {/* <section className="ftco-register mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light mt-3 p-5">
              <h1 className="mb-4">Đăng ký làm gia sư</h1>
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

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
          <div className="row">
            <div className="col-lg-4 mb-sm-4">
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
                      <Link to="/detail">Ivan Jacobson</Link>
                    </h3>
                    <span className="position">CSE Teacher</span>
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
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-sm-4">
              <div className="staff">
                <div className="d-flex mb-4">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${require("../../images/person_2.jpg")})`,
                    }}
                  />
                  <div className="info ml-4">
                    <h3>
                      <Link to="/detail">Ivan Jacobson</Link>
                    </h3>
                    <span className="position">CSE Teacher</span>
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
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-sm-4">
              <div className="staff">
                <div className="d-flex mb-4">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${require("../../images/person_3.jpg")})`,
                    }}
                  />
                  <div className="info ml-4">
                    <h3>
                      <Link to="/detail">Ivan Jacobson</Link>
                    </h3>
                    <span className="position">CSE Teacher</span>
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
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
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
export default Tutors;
