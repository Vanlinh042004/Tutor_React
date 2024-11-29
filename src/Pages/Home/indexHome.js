import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/home.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import useCounters from "../../Hooks/useCounter";
import counters from "../../Component/counter";
import Slider from "react-slick";
import owlSettings from "../../Component/owlSetting";
function Home() {
  const counts = useCounters(counters);
  return (
    <>
      <div
        className="hero-wrap"
        style={{
          backgroundImage: `url(${require("../../images/bg_1.jpg")})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-8 text-center">
              <h1 className="mb-4">Hệ Thống Gia Sư Đóm Con Tại Việt Nam</h1>
              <p>
                <NavLink to="/tutors" className="btn btn-primary px-4 py-3">
                  Xem Gia sư
                </NavLink>
                <NavLink to="/courses" className="btn btn-secondary px-4 py-3">
                  Xem Lớp học
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="ftco-search-course mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="courseSearch-wrap d-md-flex flex-column-reverse">
                <div className="full-wrap d-flex ">
                  <div className="one-third order-last p-5">
                    <h3 className="mb-4 text-center">Bạn muốn tìm kiếm ?</h3>
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
                          className="submit"
                        />
                      </div>
                    </form>
                    <p className="mb-5">
                      Bạn muốn nhiều hơn?{" "}
                      <Link to="/courses" className="text-decoration-none">
                        {" "}
                        Danh sách Lớp học
                      </Link>
                    </p>
                    <form action="#" className="course-search-form">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập gia sư bạn muốn tìm kiếm"
                        />
                        <input
                          type="submit"
                          value="Tìm kiếm"
                          className="submit"
                        />
                      </div>
                    </form>
                    <p>
                      Bạn muốn nhiều hơn?{" "}
                      <Link to="/tutors" className="text-decoration-none">
                        {" "}
                        Danh sách Gia sư
                      </Link>
                    </p>
                  </div>
                  <div
                    className="one-forth order-first img"
                    style={{
                      backgroundImage: `url(${require("../../images/image_1.jpg")})`,
                    }}
                  ></div>
                </div>
                <div className="full-wrap ">
                  <div className="one-half">
                    <div className="featured-blog d-md-flex">
                      <div className="image d-flex order-last">
                        <Link
                          to="/about"
                          className="img"
                          style={{
                            backgroundImage: `url(${require("../../images/image_2.jpg")})`,
                          }}
                        ></Link>
                      </div>
                      <div className="text order-first">
                        <span className="date">Ngày 20 tháng 09 năm 2024</span>
                        <h3>
                          <strong>We Conduct Workshop 2018</strong>
                        </h3>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        className="ftco-section-3 img"
        style={{ backgroundImage: `url(${require("../../images/bg_3.jpg")})` }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row d-md-flex justify-content-center">
            <div className="col-md-9 about-video text-center">
              <h2>Dom Dom Tutors is a Leading Schools Around the World</h2>
              <div className="video d-flex justify-content-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="button popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span>
                    <i class="fa-solid fa-play"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="ftco-counter bg-light" id="section-counter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                {counters.map((counter, index) => (
                  <div
                    key={counter.id}
                    className="col-md-3 d-flex justify-content-center counter-wrap statics"
                  >
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number">{counts[index]}</strong>
                        <span>{counter.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h1 className="mb-4">Đánh giá về chúng tôi</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...owlSettings}>
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mt-2 mb-4"
                    style={{
                      backgroundImage: `url(${require("../../images/person_1.jpg")})`,
                    }}
                  ></div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">CSE Student</span>
                  </div>
                </div>
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mt-2 mb-4"
                    style={{
                      backgroundImage: `url(${require("../../images/person_2.jpg")})`,
                    }}
                  ></div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Math Student</span>
                  </div>
                </div>
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mt-2 mb-4"
                    style={{
                      backgroundImage: `url(${require("../../images/person_3.jpg")})`,
                    }}
                  ></div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Math Student</span>
                  </div>
                </div>
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mt-2 mb-4"
                    style={{
                      backgroundImage: `url(${require("../../images/person_4.jpg")})`,
                    }}
                  ></div>
                  <div className="text">
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Math Student</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h1 className="mb-4">Gia sư tiêu biểu</h1>
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
                      <Link to="/detail" className="text-decoration-none">
                        Ivan Jacobson
                      </Link>
                    </h3>
                    <span className="position">CSE Teacher</span>
                    <p className="ftco-social d-flex">
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-facebook" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-instagram" />
                      </a>
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
                      <Link to="/detail" className="text-decoration-none">
                        Ivan Jacobson
                      </Link>
                    </h3>
                    <span className="position">CSE Teacher</span>
                    <p className="ftco-social d-flex">
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-facebook" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-instagram" />
                      </a>
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
                      <Link to="/detail" className="text-decoration-none">
                        Ivan Jacobson
                      </Link>
                    </h3>
                    <span className="position">CSE Teacher</span>
                    <p className="ftco-social d-flex">
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-facebook" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                      >
                        <span className="fab fa-instagram" />
                      </a>
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
        <div className="row justify-content-center mt-5 text">
          <div className="col-md-10">
            <p>
              <strong>Khi cô đến ngôi trường đầu tiên</strong> trong hành trình
              làm gia sư, cô đã có một cái nhìn cuối cùng về những học sinh mà
              mình từng dạy, những lớp học mà cô đã gắn bó và con đường dẫn đến
              lớp học của mình. Một câu hỏi về sự nghiệp giảng dạy lướt qua tâm
              trí cô, rồi cô tiếp tục con đường của mình.
            </p>
            <p>
              <span>Bạn muốn xem nhiều hơn?</span>
              <Link to="/tutors" className="text-decoration-none">
                {" "}
                Xem tất cả Gia sư
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="ftco-freeTrial mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center">
                <div className="free-trial ">
                  <h3>Try our free trial course</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life
                  </p>
                </div>
                <div className="btn-join ">
                  <p>
                    <Link to="/signup" className="btn btn-primary py-3 px-4">
                      Join now!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h1 className="mb-4">Our Courses</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${require("../../images/course-1.jpg")}`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>English</span>
                  </p>
                  <h3 className="mb-3">
                    <Link to="/courseDetail" className="text-decoration-none">
                      English for Tommorow
                    </Link>
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
                    backgroundImage: `url(${require("../../images/course-2.jpg")})`,
                  }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>Science</span>
                  </p>
                  <h3 className="mb-3">
                    <Link to="" className="text-decoration-none">
                      Computer Engineering
                    </Link>
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
                    <span>Business</span>
                  </p>
                  <h3 className="mb-3">
                    <Link to="" className="text-decoration-none">
                      Business Studies
                    </Link>
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
        <div className="row justify-content-center mt-5 text">
          <div className="col-md-10">
            <p>
              <strong>When she reached</strong> the first hills of the Italic
              Mountains, she had a last view back on the skyline of her hometown
              Bookmarksgrove, the headline of Alphabet Village and the subline
              of her own road, the Line Lane. Pityful a rethoric question ran
              over her cheek, then she continued her way.
            </p>
            <p>
              <span>Just Browsing?</span>
              <Link to="/tutors"> View All Teachers</Link>
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
export default Home;
