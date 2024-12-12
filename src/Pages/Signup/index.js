import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/signup.css";

function Signup() {
  const [role, setRole] = useState(""); // State để lưu trữ role

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <div className="signUp d-flex">
        <div className="signUp__img">
          <img src={require("../../images/course-1.jpg")} alt="Signup" />
        </div>
        <div className="signUp__form">
          <form className="form">
            <h2 className="title">Đăng ký</h2>

            <div className="flex">
              <label>
                <input required placeholder="" type="text" className="input" />
                <span>Họ</span>
              </label>
              <label>
                <input required placeholder="" type="text" className="input" />
                <span>Tên</span>
              </label>
            </div>

            <label>
              <input required placeholder="" type="email" className="input" />
              <span>Email</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="password"
                className="input"
              />
              <span>Mật khẩu</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="password"
                className="input"
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
                  />
                  <span>Địa chỉ</span>
                </label>

                <label className="tutor">
                  <input
                    required
                    placeholder=""
                    type="text"
                    className="input"
                  />
                  <span>Chuyên môn</span>
                </label>
                <label className="tutor Intro">
                  <textarea
                    required
                    placeholder="Giới thiệu"
                    className="input"
                  />
                  {/* <span>Introduction</span> */}
                </label>
                {/* Thêm các trường khác cho gia sư tại đây */}
              </div>
            )}

            <button className="submit">Đăng ký</button>
            <p className="signin">
              Bạn đã có tài khoản ? <Link to="/signin">Đăng nhập</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
