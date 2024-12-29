import { parse } from "postcss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../../Component/imgPerson";
import "../../Style/tutor_detail.scss";
import swal from "@sweetalert/with-react";

import { getDetailTutor } from "../../Services/tutorService";
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
  const [showModal, setShowModal] = useState(false);
  const modalOverlayStyle = {};

  const modalContentStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const overallRating = 3.1;
  const totalReviews = 10;
  const reviews = [
    { name: "Minhhhh", rating: 3, comment: "Minh ket noi di nhe" },
    { name: "Linhhhhh", rating: 4, comment: "Minh làm lẹ đi nhe" },
    { name: "Manhhhhh", rating: 3, comment: "Minh hãy cố gắng làm đi nhé" },
  ];

  const ratingBreakdown = {
    1: 2,
    2: 1,
    3: 3,
    4: 2,
    5: 2,
  };

  // Function to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${
          index < rating ? "checked" : "unchecked"
        }`}
      ></i>
    ));
  };
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12">
                  <div className="teacher-details d-md-flex">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${
                          tutor.avatar
                            ? tutor.avatar
                            : require("../../images/image_default.png")
                        })`,
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

                  {/* <div className="col-md-12 bg-light mt-3 p-5">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section-review">
        <div className="review-section">
          <div className="overall-section">
            <div className="overall-box">
              <h2>Overall</h2>
              <h2 className="overall-rating">{overallRating}</h2>
              <p>({totalReviews} Reviews)</p>
            </div>
            <div className="rating-breakdown">
              <ul>
                {Object.entries(ratingBreakdown).map(([key, value]) => (
                  <li key={key}>
                    <span className="stars">{renderStars(parseInt(key))}</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            {" "}
            <button
              className="btn btn-primary py-3 px-5 btn-review "
              onClick={() => setShowModal(true)}
            >
              Viết đánh giá
            </button>
          </div>

          <div className="review-list">
            {reviews.map((review, index) => (
              <div className="review-item" key={index}>
                <h5>{review.name}</h5>
                <p className="stars">{renderStars(review.rating)}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                {/* Chọn số sao */}
                <div className="rating-container">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className="star-btn"
                      onClick={() => handleClick(rating)}
                    >
                      {rating <= selectedRating ? "★" : "☆"}
                    </button>
                  ))}
                </div>

                {/* Nội dung đánh giá */}
                <textarea
                  className="modal-textarea"
                  placeholder="Nhập nội dung đánh giá"
                  rows={4}
                />

                {/* Nút hành động */}
                <div className="modal-actions">
                  <button
                    className="btn cancel"
                    onClick={() => setShowModal(false)}
                  >
                    HỦY
                  </button>
                  <button
                    className="btn save"
                    onClick={() => setShowModal(false)}
                  >
                    ĐÁNH GIÁ
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default TutorDetail;
