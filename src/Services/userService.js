import { post } from "../Utils/request";

const Login = async (email, password) => {
  try {
    const data = await post("login", {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    console.error("There was a problem with the login operation:", error);
    throw error;
  }
};
// Register
const Register = async (options) => {
  return await post("register", options);
};
// Forgot Password
const ForgotPassword = async (email) => {
  return await post("forgot-password", { email });
};
// Verify Reset
const VerifyReset = async (email, resetToken) => {
  return await post("verify-Reset", { email, resetToken });
};
export { Login, Register, ForgotPassword, VerifyReset };
