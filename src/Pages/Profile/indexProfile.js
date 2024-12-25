import "../../Style/user-profile.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../Helpers/cookie";
function Profile() {
  const fullName = getCookie("name");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Amelia",
    role: "Designer",
    birthDate: "5/3/1980",
    phone: "0123456789",
    email: "amelia@example.com",
    address: "123 Street, City",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="profile__container">
        <div className="profile__content">
          <div className="profile__info">
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="profile__info-avatar"
            />
            <div>
              <h3>{fullName}</h3>
              <div className="profile__header">
                <button
                  onClick={() => setShowChangePassword(true)}
                  className="profile__header-btn"
                >
                  ĐỔI MẬT KHẨU
                </button>
              </div>
            </div>
          </div>

          <div className="profile__details">
            <div className="profile__details__item">
              <label className="profile__details__label">Họ và Tên:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                  className="profile__details__input"
                />
              ) : (
                <p className="profile__details__text">{fullName}</p>
              )}
            </div>
            <div className="profile__details__item">
              <label className="profile__details__label">Vai trò:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="role"
                  value={profile.role}
                  onChange={handleInputChange}
                  className="profile__details__input"
                />
              ) : (
                <p className="profile__details__text">{profile.role}</p>
              )}
            </div>
            <div className="profile__details__item">
              <label className="profile__details__label">Ngày sinh:</label>
              {isEditing ? (
                <input
                  type="date"
                  name="birthDate"
                  value={profile.birthDate}
                  onChange={handleInputChange}
                  className="profile__details__input"
                />
              ) : (
                <p className="profile__details__text">{profile.birthDate}</p>
              )}
            </div>
            <div className="profile__details__item">
              <label className="profile__details__label">Số điện thoại:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  className="profile__details__input"
                />
              ) : (
                <p className="profile__details__text">{profile.phone}</p>
              )}
            </div>
            <div className="profile__details__item">
              <label className="profile__details__label">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="profile__details__input"
                />
              ) : (
                <p className="profile__details__text">{profile.email}</p>
              )}
            </div>
            <div className="profile__details__item">
              <label className="profile__details__label">Địa chỉ:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  s
                  value={profile.address}
                  onChange={handleInputChange}
                  className="profile__details__input"
                />
              ) : (
                <p className="profile__details__text">{profile.address}</p>
              )}
            </div>
          </div>

          <div className="profile__actions">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`profile__actions-btn ${isEditing ? "editing" : ""}`}
            >
              {isEditing ? "Lưu" : "Chỉnh sửa"}
            </button>
          </div>
        </div>

        {showChangePassword && (
          <div className="profile__modal">
            <div className="profile__modal-content">
              <h4 className="profile__modal-title">Change Password</h4>
              <form>
                <label className="profile__modal-label">
                  Current Password:
                </label>
                <input type="password" className="profile__modal-input" />
                <label className="profile__modal-label">Password:</label>
                <input type="password" className="profile__modal-input" />
                <label className="profile__modal-label">
                  Confirm Password:
                </label>
                <input type="password" className="profile__modal-input" />
                <div className="profile__modal-actions">
                  <button
                    type="button"
                    className="profile__modal-actions-btn"
                    onClick={() => setShowChangePassword(false)}
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="profile__modal-actions-btn-save"
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
