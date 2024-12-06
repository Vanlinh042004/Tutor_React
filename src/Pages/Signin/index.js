import "../../css/signin.css";
function Signin() {
  return (
    <>
      <div className="signIn d-flex">
        <div className="signUp__img">
          <img src={require("../../images/course-1.jpg")}></img>
        </div>
        <div className="signUp__form">
          <form className="form ">
            <h2 className="title">Dom Con </h2>
            <p className="message">
              Signin now and get full access to our app.{" "}
            </p>

            <label>
              <input
                required=""
                placeholder=""
                type="email"
                className="input"
              />
              <span>Email</span>
            </label>
            <label>
              <input
                required=""
                placeholder=""
                type="password"
                className="input"
              />
              <span>Password</span>
            </label>

            <button className="submit">Submit</button>
            <a href="#" className="forgot-pass text-decoration-none">
              {" "}
              Quên mật khẩu
            </a>
            <div class="socialSign">
              <p class="message">Login with social accounts</p>
              <div class="social">
                <button className="social__icon">
                  <i class="fa-brands fa-facebook mr-2"></i>
                  <span>Facebook</span>
                </button>
                <button className="social__icon">
                  <i class="fab fa-google mr-2"></i>
                  <span>Google</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signin;
