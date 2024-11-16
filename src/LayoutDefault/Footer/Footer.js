import React from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
                  <small>TUTORS</small>
                </Link>
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              {/* <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
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
              </ul> */}
            </div>
            <div className="col-md-4">
              <h2>Our office</h2>
            </div>
            <div className="col-md-2">
              <h2>Site Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="py-2 d-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="py-2 d-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="py-2 d-block">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/students" className="py-2 d-block">
                    Students
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="py-2 d-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>Have a Questions?</h2>
              <ul className="list-unstyled">
                <li>
                  <span className="icon icon-phone"></span>
                  <span>+2 392 3929 210</span>
                </li>
                <li>
                  <span className="icon icon-envelope"></span>
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
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dom Con
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
