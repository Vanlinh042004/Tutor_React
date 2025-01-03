import "../../Style/user-profile.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../Helpers/cookie";
import { get, post } from "../../Utils/request";

function Profile() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    role: "",
    birthDate: "",
    phone: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await get("profile", true);
        setProfile({
          fullName: data["Họ và Tên"],
          role: data["Vai trò"],
          birthDate: data["Ngày sinh"],
          phone: data["Số điện thoại"],
          email: data["Email"],
          address: data["Địa chỉ"],
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Function to handle saving the edited profile
  const handleSave = async () => {
    try {
      // Map front-end profile fields to backend fields
      const updateData = {
        name: profile.fullName,
        phoneNumber: profile.phone,
        address: profile.address,
        dob: profile.birthDate,
      };

      const data = await post("profile/edit", updateData, true);

      // Update profile state with response data
      setProfile({
        fullName: data["Họ và Tên"],
        role: data["Vai trò"],
        birthDate: data["Ngày sinh"],
        phone: data["Số điện thoại"],
        email: data["Email"],
        address: data["Địa chỉ"],
      });

      setIsEditing(false);
      setError(null);
    } catch (err) {
      console.error("Error saving profile:", err);
      setError("Failed to save profile.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
              <h3>{profile.fullName}</h3>
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
                  value={profile.fullName}
                  onChange={handleInputChange}
                  className="profile__details__input"
                />
              ) : (
                <p className="profile__details__text">{profile.fullName}</p>
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
                  disabled
                />
              ) : (
                <p className="profile__details__text">{profile.role}</p>
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
                  disabled
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
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
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