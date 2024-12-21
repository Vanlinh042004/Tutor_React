import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSendCode = async () => {
    if (email) {
      try {
        const response = await fetch("http://localhost:3010/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Mã xác thực đã được gửi:", data.message);
          setIsCodeSent(true);
          setErrorMessage("");
          // Lưu email vào localStorage
          localStorage.setItem("email", email);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Gửi mã thất bại.");
        }
      } catch (error) {
        setErrorMessage("Đã xảy ra lỗi khi gửi mã. Vui lòng thử lại.");
        console.error(error);
      }
    } else {
      setErrorMessage("Vui lòng nhập email.");
    }
  };

  const handleVerifyCode = async () => {
    if (code) {
      try {
        const response = await fetch("http://localhost:3010/verify-Reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, resetToken: code }), // Sử dụng email đã lưu
        });

        if (response.ok) {
          navigate("/reset-password"); // Chuyển đến trang đặt lại mật khẩu
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Mã xác nhận không chính xác.");
        }
      } catch (error) {
        setErrorMessage("Đã xảy ra lỗi khi xác nhận mã. Vui lòng thử lại.");
        console.error(error);
      }
    } else {
      setErrorMessage("Vui lòng nhập mã xác nhận.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Quên Mật Khẩu
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Nhập email của bạn để lấy mã xác nhận.
        </p>

        {/* Email Input & Send Code Button */}
        <div className="flex items-center mb-4">
          <input
            type="email"
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleSendCode}
          >
            Lấy mã
          </button>
        </div>

        {isCodeSent && (
          <div>
            {/* Code Input */}
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="code"
            >
              Nhập mã xác nhận:
            </label>
            <input
              type="text"
              id="code"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              placeholder="Nhập mã"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        )}

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">
            {errorMessage}
          </p>
        )}

        <button
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none mt-2"
          onClick={handleVerifyCode}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
