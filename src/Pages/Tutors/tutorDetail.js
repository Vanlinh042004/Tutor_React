import { parse } from "postcss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../../Component/imgPerson";
import swal from "@sweetalert/with-react";

import { getDetailTutor } from "../../Services/tutorService";
const randomImage = images[Math.floor(Math.random() * images.length)];
function TutorDetail() {
  const rating = 3.5;
  const [selectedRating, setSelectedRating] = useState(0);
  const { slug } = useParams();
  const [tutor, setTutor] = useState([]);
  const handleClick = (rating) => {
    // Nếu sao đã được chọn, khi nhấn vào lại sẽ hủy chọn
    setSelectedRating(selectedRating === rating ? 0 : rating);
  };
  useEffect(() => {
    const fetchTutor = async () => {
      const data = await getDetailTutor(slug);
      setTutor(data.tutor);
    };
    fetchTutor();
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
                        <b>Môn: </b> {tutor.specialization}
                      </p>
                      <p className="text__phone">
                        <b>Liên hệ: </b>
                        {tutor.phoneNumber}
                      </p>
                      <p className="text__address">
                        <b>Địa chỉ: </b>
                        {tutor.address}
                      </p>
                      <p className="text_rating">
                        <b>Đánh giá: </b>
                        {Array.from({ length: 5 }).map((_, index) => {
                          const fullStar = index + 1 <= tutor.rating; // Sáng đủ sao
                          const halfStar =
                            tutor.rating > index && tutor.rating < index + 1; // Sáng nửa sao

                          return (
                            <span
                              key={index}
                              style={{
                                color: "gold",
                                fontSize: "23px",
                                marginRight: "5px",
                              }}
                            >
                              {fullStar ? (
                                <i className="fas fa-star"></i> // Sao đầy
                              ) : halfStar ? (
                                <i className="fas fa-star-half-alt"></i> // Sao nửa
                              ) : (
                                <i className="far fa-star"></i> // Sao trống
                              )}
                            </span>
                          );
                        })}
                      </p>

                      <p className="text__intro">
                        <b>Giới thiệu: </b>
                        {tutor.introduction}
                      </p>
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

                  <div className="col-md-12 bg-light mt-3 p-5">
                    <h2 className="mb-4">Viết đánh giá</h2>
                    <div className="rating mb-5">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        {[1, 2, 3, 4, 5].map((rating) => {
                          const fullStar = rating <= selectedRating; // Sao đầy
                          const halfStar =
                            rating === Math.ceil(selectedRating) && !fullStar; // Sao nửa
                          const emptyStar = rating > selectedRating; // Sao trống

                          return (
                            <button
                              key={rating}
                              style={{
                                fontSize: "30px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                              }}
                              onClick={() => handleClick(rating)}
                            >
                              {fullStar ? (
                                <i className="fas fa-star"></i> // Sao đầy
                              ) : halfStar ? (
                                <i className="fas fa-star-half-alt"></i> // Sao nửa
                              ) : (
                                <i className="far fa-star"></i> // Sao trống
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <form>
                      <div className="form-group">
                        <textarea
                          name=""
                          id=""
                          cols={30}
                          rows={7}
                          className="form-control"
                          placeholder="Mô tả cụ thể đánh giá của bạn"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          defaultValue="Gửi đánh giá"
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
        </div>
      </section>
    </>
  );
}

export default TutorDetail;
