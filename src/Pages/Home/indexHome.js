import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/home.css";
//import "../../css/style.css";
import React from "react";
import useCounters from "../../Hooks/useCounter";
import counters from "../../data/counter";
import Slider from "react-slick";
import owlSettings from "../../data/owlSetting";
function Home() {
  const bgImage = require("../../images/bg_1.jpg");
  const bgImage3 = require("../../images/bg_3.jpg");
  const Image1 = require("../../images/image_1.jpg");
  const Image2 = require("../../images/image_2.jpg");
  const psImage1 = require("../../images/person_1.jpg");
  const psImage2 = require("../../images/person_2.jpg");
  const psImage3 = require("../../images/person_3.jpg");
  const psImage4 = require("../../images/person_4.jpg");

  const counts = useCounters(counters);
  return (
    <>
      <div
        className="hero-wrap"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-8  text-center">
              <h1 className="mb-4">
                No Nation Can Prosper In Life Without Education
              </h1>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  View Teachers
                </a>
                <a href="#" className="btn btn-secondary px-4 py-3">
                  View Courses
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-search-course mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="courseSearch-wrap d-md-flex flex-column-reverse">
                <div className="full-wrap d-flex ">
                  <div className="one-third order-last p-5">
                    <h3 className="mb-4 text-center">
                      Do you want to search ?
                    </h3>
                    <form action="#" className="course-search-form">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type a class you want to study"
                        />
                        <input
                          type="submit"
                          value="Search"
                          className="submit"
                        />
                      </div>
                    </form>
                    <p className="mb-5">
                      Just Browsing? <a href="#"> See all classes</a>
                    </p>
                    <form action="#" className="course-search-form">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type a teacher you want to study"
                        />
                        <input
                          type="submit"
                          value="Search"
                          className="submit"
                        />
                      </div>
                    </form>
                    <p>
                      Just Browsing? <a href="#"> See all teachers</a>
                    </p>
                  </div>
                  <div
                    className="one-forth order-first img"
                    style={{ backgroundImage: `url(${Image1})` }}
                  ></div>
                </div>
                <div className="full-wrap ">
                  <div className="one-half">
                    <div className="featured-blog d-md-flex">
                      <div className="image d-flex order-last">
                        <a
                          href="#"
                          className="img"
                          style={{ backgroundImage: `url(${Image2})` }}
                        ></a>
                      </div>
                      <div className="text order-first">
                        <span className="date">Aug 20, 2018</span>
                        <h3>
                          <a href="#">We Conduct Workshop 2018</a>
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
      </section>

      <section
        className="ftco-section-3 img"
        style={{ backgroundImage: `url(${bgImage3})` }}
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
      </section>

      <section className="ftco-counter bg-light" id="section-counter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                {counters.map((counter, index) => (
                  <div
                    key={counter.id}
                    className="col-md-3 d-flex justify-content-center counter-wrap"
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
              <h1 className="mb-4">What Our Student Says</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...owlSettings}>
                <div className="testimony-wrap text-center">
                  <div
                    className="user-img mt-2 mb-4"
                    style={{ backgroundImage: `url(${psImage1})` }}
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
                    style={{ backgroundImage: `url(${psImage2})` }}
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
                    style={{ backgroundImage: `url(${psImage3})` }}
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
                    style={{ backgroundImage: `url(${psImage4})` }}
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
              <h1 className="mb-4">Our Experience Teachers</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-sm-4">
              <div className="staff">
                <div className="d-flex mb-4">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${psImage1})` }}
                  />
                  <div className="info ml-4">
                    <h3>
                      <a href="teacher-single.html">Ivan Jacobson</a>
                    </h3>
                    <span className="position">CSE Teacher</span>
                    <p className="ftco-social d-flex">
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <span className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <span className="fab fa-facebook" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
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
                    style={{ backgroundImage: `url(${psImage2})` }}
                  />
                  <div className="info ml-4">
                    <h3>
                      <a href="teacher-single.html">Ivan Jacobson</a>
                    </h3>
                    <span className="position">CSE Teacher</span>
                    <p className="ftco-social d-flex">
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <span className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <span className="fab fa-facebook" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
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
                    style={{ backgroundImage: `url(${psImage3})` }}
                  />
                  <div className="info ml-4">
                    <h3>
                      <a href="teacher-single.html">Ivan Jacobson</a>
                    </h3>
                    <span className="position">CSE Teacher</span>
                    <p className="ftco-social d-flex">
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <span className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <span className="fab fa-facebook" />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
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
              <strong>When she reached</strong> the first hills of the Italic
              Mountains, she had a last view back on the skyline of her hometown
              Bookmarksgrove, the headline of Alphabet Village and the subline
              of her own road, the Line Lane. Pityful a rethoric question ran
              over her cheek, then she continued her way.
            </p>
            <p>
              <span>Just Browsing?</span>
              <a href="course.html"> View All Teachers</a>
            </p>
          </div>
        </div>
      </section>

      <section className="ftco-freeTrial">
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
                    <a href="#" className="btn btn-primary py-3 px-4">
                      Join now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
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
                  style={{ backgroundImage: "url(images/course-1.jpg)" }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>English</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">English for Tommorow</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      Enroll now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: "url(images/course-2.jpg)" }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>Science</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">Computer Engineering</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      Enroll now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="course align-self-stretch">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: "url(images/course-3.jpg)" }}
                />
                <div className="text p-4">
                  <p className="category">
                    <span>Business</span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">Business Studies</a>
                  </h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      Enroll now!
                    </a>
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
              <a href="course.html"> View All Teachers</a>
            </p>
          </div>
        </div>
      </section>

      <section className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7 text-center heading-section heading-section-white">
                <h2>Subcribe to our Newsletter</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
                <div className="row d-flex justify-content-center mt-5">
                  <div className="col-md-8">
                    <form action="#" className="subscribe-form">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
                        />
                        <input
                          type="submit"
                          defaultValue="Subscribe"
                          className="submit px-3"
                        />
                      </div>
                    </form>
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
export default Home;
