function About() {
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
                <span>About</span>
              </p>
              <h1 className="mb-3 bread">About</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div
                className="img img-about align-self-stretch"
                style={{
                  backgroundImage: `url(${require("../../images/bg_3.jpg")})`,
                  width: "100%",
                }}
              />
            </div>
            <div className="col-md-6 pl-md-5">
              <h2 className="mb-4">
                Welcome to Genius University Stablished Since 1898
              </h2>
              <p>
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way.
              </p>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mb-5 ftco-section-3 img"
        style={{ backgroundImage: `url(${require("../../images/bg_4.jpg")})` }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row d-md-flex justify-content-center">
            <div className="col-md-9 about-video text-center">
              <h2 className="">
                Genius University is a Leading Schools Around the World
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
