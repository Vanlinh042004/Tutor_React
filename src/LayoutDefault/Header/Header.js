import "../../Style/header.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { getCookie } from "../../Helpers/cookie";
import { useSelector } from "react-redux";
function Header() {
  const token = getCookie("token");
  const role = getCookie("role");
  //console.log(token);
  const isLogin = useSelector((state) => state.loginReducer);
  //console.log(isLogin);
  return (
    <>
      <Navbar variant="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fas fa-university"></i> Dom Con <br />
            <small>Gia sư</small>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="navbar ml-auto">
              <Nav.Link as={NavLink} to="/" className="navbar__item">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="navbar__item">
                Chúng tôi
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses" className="navbar__item">
                Lớp học
              </Nav.Link>
              <Nav.Link as={NavLink} to="/tutors" className="navbar__item">
                Gia sư
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="navbar__item">
                Liên hệ
              </Nav.Link>
              <div className="navbar__item cta">
                {token ? (
                  <Nav.Link as={NavLink} to="/logout">
                    <span>Đăng xuất</span>
                  </Nav.Link>
                ) : (
                  <Nav.Link as={NavLink} to="/signup">
                    <span>Đăng ký</span>
                  </Nav.Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
