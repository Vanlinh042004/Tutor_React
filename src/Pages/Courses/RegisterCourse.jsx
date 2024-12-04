import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterCourse = () => {
  const [formData, setFormData] = useState({
    subject: "",
    className: "",
    address: "",
    requirements: "",
    salary: "",
    sessions: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.subject) newErrors.subject = "Vui lòng nhập môn học.";
    if (!formData.className) newErrors.className = "Vui lòng nhập tên lớp.";
    if (!formData.address) newErrors.address = "Vui lòng nhập địa chỉ.";
    if (!formData.salary || formData.salary <= 0) newErrors.salary = "Lương phải lớn hơn 0.";
    if (!formData.sessions || formData.sessions <= 0) newErrors.sessions = "Số buổi phải lớn hơn 0.";
    if (!formData.description) newErrors.description = "Vui lòng nhập mô tả.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Form Data Submitted:", formData);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Đăng ký khóa học</h1>
        <form onSubmit={handleSubmit}>
          {/* Môn */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Môn học</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Nhập môn học"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Tên lớp */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Lớp</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Nhập tên lớp"
            />
            {errors.className && (
              <p className="text-red-500 text-sm mt-1">{errors.className}</p>
            )}
          </div>

          {/* Địa chỉ */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Nhập địa chỉ"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Lương */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Lương</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Nhập lương đề xuất"
            />
            {errors.salary && (
              <p className="text-red-500 text-sm mt-1">{errors.salary}</p>
            )}
          </div>

          {/* Số buổi */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Số buổi một tuần</label>
            <input
              type="number"
              name="sessions"
              value={formData.sessions}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Nhập số buổi học trong tuần"
            />
            {errors.sessions && (
              <p className="text-red-500 text-sm mt-1">{errors.sessions}</p>
            )}
          </div>

          {/* Mô tả */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Mô tả về học sinh (VD: học lực học sinh, yêu cầu học sinh, ...)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Mô tả học lực học sinh"
              rows="3"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Nút đăng ký */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Đăng ký
            </button>
          </div>
        </form>

        {/* Thông báo thành công */}
        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
            <p>Đăng ký thành công!</p>
            <Link to="/courses" className="btn btn-warning">
                Trở về
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterCourse;
