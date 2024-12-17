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
  try {
    const data = await post("register", options);
    return data;
  } catch (error) {
    console.error("There was a problem with the signup operation:", error);
    throw error;
  }
};
export { Login, Register };
