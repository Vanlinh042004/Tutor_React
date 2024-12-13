import { parse } from "postcss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../../Component/imgPerson";
const randomImage = images[Math.floor(Math.random() * images.length)];
function TutorDetail() {
  const { slug } = useParams();
  const [tutor, setTutor] = useState([]);
  useEffect(() => {
    fetch(`https://tutorprosite-k22.onrender.com/tutors/${slug}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setTutor(data.tutor);
        },
        [slug]
      );
  });
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
                        height: "400px",
                      }}
                    />
                    <div className="text">
                      <h3>{tutor.name}</h3>
                      <p className="text__position">
                        {tutor.specialization} Teacher
                      </p>
                      <p className="text__phone">+{tutor.phoneNumber}</p>
                      <p className="text__address">{tutor.address}</p>

                      <p className="text__intro">{tutor.introduction}</p>
                      <div className="mt-4">
                        <h4>Social Link</h4>
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
                  </div>
                </div>
                <div className="col-md-12 bg-light mt-3 p-5">
                  <h4 className="mb-4">Đánh giá gia sư</h4>
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
                        placeholder="Đánh giá của bạn"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary py-3 px-5"
                        value="Gửi đánh giá"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TutorDetail;
