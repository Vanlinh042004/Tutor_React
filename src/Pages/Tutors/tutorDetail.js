import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Style/tutor_detail.scss";
import swal from "@sweetalert/with-react";

import { getDetailTutor } from "../../Services/tutorService";
import { get, post } from "../../Utils/request";

function TutorDetail() {
  const { slug } = useParams();
  const [tutor, setTutor] = useState({});
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratingBreakdown, setRatingBreakdown] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClick = (rating) => {
    setSelectedRating(selectedRating === rating ? 0 : rating);
  };

  const fetchTutor = async () => {
    try {
      const data = await getDetailTutor(slug);
      setTutor(data.tutor);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const data = await get(`reviews/${slug}/list`, true);
      setReviews(data.reviews);

      const total = data.reviews.length;
      setTotalReviews(total);

      const average =
        total > 0
          ? data.reviews.reduce((sum, review) => sum + review.reviewValue, 0) / total
          : 0;
      setOverallRating(parseFloat(average.toFixed(1)));

      const breakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      data.reviews.forEach((review) => {
        if (breakdown[review.reviewValue] !== undefined) {
          breakdown[review.reviewValue] += 1;
        }
      });
      setRatingBreakdown(breakdown);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitReview = async () => {
    if (selectedRating === 0 || comment.trim() === "") {
      swal("Error", "Please provide a rating and comment.", "error");
      return;
    }

    try {
      await post(`reviews/${slug}`, { rating: selectedRating, comment }, true);
      setShowModal(false);
      setSelectedRating(0);
      setComment("");
      fetchReviews();
      swal("Success", "Review submitted successfully.", "success");
    } catch (error) {
      console.error(error);
      swal("Error", "Failed to submit review.", "error");
    }
  };

  useEffect(() => {
    fetchTutor();
    fetchReviews();
    // eslint-disable-next-line
  }, [slug]);

  const modalContentStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

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
                            href={tutor.twitter || "#"}
                            className="d-flex justify-content-center align-items-center text-decoration-none"
                          >
                            <span className="fab fa-twitter" />
                          </a>
                          <a
                            href={tutor.facebook || "#"}
                            className="d-flex justify-content-center align-items-center text-decoration-none"
                          >
                            <span className="fab fa-facebook" />
                          </a>
                          <a
                            href={tutor.instagram || "#"}
                            className="d-flex justify-content-center align-items-center text-decoration-none"
                          >
                            <span className="fab fa-instagram" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Additional content can be added here */}
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
          <div>
            <button
              className="btn btn-primary py-3 px-5 btn-review"
              onClick={() => setShowModal(true)}
            >
              Viết đánh giá
            </button>
          </div>

          <div className="review-list">
            {reviews.map((review, index) => (
              <div className="review-item" key={index}>
                <h5>{review.parentName}</h5>
                <p className="stars">{renderStars(review.reviewValue)}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content" style={modalContentStyle}>
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

              <textarea
                className="modal-textarea"
                placeholder="Nhập nội dung đánh giá"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <div className="modal-actions">
                <button
                  className="btn cancel"
                  onClick={() => setShowModal(false)}
                >
                  HỦY
                </button>
                <button
                  className="btn save"
                  onClick={handleSubmitReview}
                >
                  ĐÁNH GIÁ
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default TutorDetail;