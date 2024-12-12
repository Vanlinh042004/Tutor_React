import "../../Style/style.css";
import "../../Style/footer.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const bgImage = require("../../images/bg_2.jpg");
function Footer() {
  return (
    <>
      <footer
        className="ftco-footer ftco-bg-dark ftco-section img"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <h2>
                <Link className="navbar-brand" to="/">
                  <i className="fas fa-university"></i> DOM DOM <br />
                  <small>Gia sư</small>
                </Link>
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2 className="footer__h2--color">Văn phòng</h2>
            </div>
            <div className="col-md-3">
              <h2 className="footer__h2--color">Giáo dục</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="py-2 d-block text-decoration-none">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="py-2 d-block text-decoration-none"
                  >
                    Chúng tôi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="py-2 d-block text-decoration-none"
                  >
                    Lớp học
                  </Link>
                </li>
                <li>
                  <Link
                    to="/students"
                    className="py-2 d-block text-decoration-none"
                  >
                    Gia sư
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="py-2 d-block text-decoration-none"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2 className="footer__h2--color">Đặt câu hỏi?</h2>
              <ul>
                <li>
                  <span className="mr-3 mt-3 fas fa-phone"></span>
                  <span>+2 392 3929 210</span>
                </li>
                <li>
                  <span className="mr-3 mt-3 fas fa-envelope"></span>
                  <span>info@yourdomain.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                &copy; {new Date().getFullYear()} All rights reserved | This
                template is made with
                <i className="icon-heart" aria-hidden="true"></i> by{" "}
                <Link
                  to="/contact"
                  className="text-primary text-decoration-none"
                >
                  Dom Con
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
