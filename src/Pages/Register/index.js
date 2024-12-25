import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/signup.css";
import { Register } from "../../Services/userService";
import swal from "sweetalert";
function Signup() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [introduction, setIntroduction] = useState("");

  const navigate = useNavigate();
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      name,
      email,
      password,
      address,
      phoneNumber,
      role,
      specialization,
      introduction,
      confirmPassword,
    };

    try {
      const response = await Register(options);
      //console.log(response);
      if (response.message === "Đăng ký thành công.") {
        navigate("/signin"); // Navigate to the login page after successful registration
      } else {
        swal(
          "Lỗi",
          response.message || "Thông tin đăng ký không hợp lệ",
          "error"
        );
      }
    } catch (error) {
      console.error("There was a problem with the signup operation:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        swal("Lỗi", error.response.data.message, "error");
      } else {
        swal("Lỗi", "Đăng ký thất bại", "error");
      }
    }
  };
  return (
    <>
      <div className="signUp d-flex mt-4">
        <div className="signUp__img">
          <img src={require("../../images/course-1.jpg")} alt="Signup" />
        </div>
        <div className="signUp__form">
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="title">Đăng ký</h2>
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>Họ và Tên</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <span>Địa chỉ</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span>Số điện thoại</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Mật khẩu</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span>Xác nhận mật khẩu</span>
            </label>

            <select
              id="role"
              value={role}
              onChange={handleRoleChange}
              className="input"
            >
              <option value="">-- Chọn vai trò --</option>
              <option value="tutor">Gia sư</option>
              <option value="parent">Phụ huynh</option>
            </select>

            {/* Các trường bổ sung cho gia sư */}
            {role === "tutor" && (
              <div>
                <label className="tutor">
                  <input
                    required
                    placeholder=""
                    type="text"
                    className="input"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                  <span>Chuyên môn</span>
                </label>
                <label className="tutor Intro">
                  <textarea
                    required
                    placeholder="Giới thiệu"
                    className="input"
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                  />
                  {/* <span>Introduction</span> */}
                </label>
                {/* Thêm các trường khác cho gia sư tại đây */}
              </div>
            )}

            <button className="submit">Đăng ký</button>
            <p className="signin">
              Bạn đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
