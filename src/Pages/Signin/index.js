import "../../Style/signin.css";
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
            <p className="message">Đăng nhập để tận hưởng mọi lợi ích. </p>

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
              <span>Mật khẩu</span>
            </label>

            <button className="submit">Đăng nhập</button>
            <a href="#" className="forgot-pass text-decoration-none">
              {" "}
              Quên mật khẩu
            </a>
            <div class="socialSign">
              <p class="message">---------- Hoặc ----------</p>
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
