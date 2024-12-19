import { parse } from "postcss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../../Component/imgPerson";
import swal from "@sweetalert/with-react";

import { getDetailTutor } from "../../Services/tutorService";
const randomImage = images[Math.floor(Math.random() * images.length)];
function TutorDetail() {
  const { slug } = useParams();
  const [tutor, setTutor] = useState([]);
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
                      <div className="rating ">
                        <button
                          className="mt-3 btn btn-primary"
                          onClick={() => {
                            const onPick = (value) => {
                              swal(
                                "Cảm ơn bạn đã đánh giá!",
                                `Bạn đã đánh giá ${value}/3 `,
                                "success"
                              );
                            };

                            // Tạo nội dung tùy chỉnh bằng DOM
                            const wrapper = document.createElement("div");
                            wrapper.style.display = "flex";
                            wrapper.style.justifyContent = "center";
                            wrapper.style.gap = "10px";

                            // Thêm nút emoji
                            [1, 2, 3].forEach((rating) => {
                              const btn = document.createElement("button");
                              btn.style.fontSize = "24px";
                              btn.style.border = "none";
                              btn.style.background = "none";
                              btn.style.cursor = "pointer";

                              btn.textContent =
                                rating === 1
                                  ? "😔"
                                  : rating === 2
                                  ? "😐"
                                  : "😊";
                              btn.addEventListener("click", () =>
                                onPick(rating)
                              ); // Xử lý click
                              wrapper.appendChild(btn);
                            });

                            // Hiển thị SweetAlert
                            swal({
                              text: "Bạn đánh giá như thế nào về gia sư này?",
                              buttons: {
                                cancel: "Đóng", // Nút Close
                              },
                              content: wrapper, // Gán nội dung tùy chỉnh
                            });
                          }}
                        >
                          ĐÁNH GIÁ GIA SƯ
                        </button>
                      </div>
                    </div>
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
