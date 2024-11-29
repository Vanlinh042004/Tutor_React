function TutorDetail() {
  return (
    <>
      <div
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(${require("../../images/bg_2.jpg")})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-8 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>
                <span className="mr-2">
                  <a href="index.html">Tutors</a>
                </span>
                <span>Tutor Detail</span>
              </p>
              <h1 className="mb-3 bread">Tutors Detail</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="teacher-details d-md-flex">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${require("../../images/person_2.jpg")})`,
                      }}
                    />
                    <div className="text">
                      <h3>Mary Gold</h3>
                      <span className="position">CSE Teacher</span>
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                      <div className="mt-4">
                        <h4>Social Link</h4>
                        <p className="ftco-social d-flex">
                          <a
                            href="#"
                            className="d-flex justify-content-center align-items-center"
                          >
                            <span className="fab fa-twitter" />
                          </a>
                          <a
                            href="#"
                            className="d-flex justify-content-center align-items-center"
                          >
                            <span className="fab fa-facebook" />
                          </a>
                          <a
                            href="#"
                            className="d-flex justify-content-center align-items-center"
                          >
                            <span className="fab fa-instagram" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 bg-light mt-3 p-5">
                  <h4 className="mb-4">Send a Message</h4>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default TutorDetail;
