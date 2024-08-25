import img from "../assets/Images/image 1.png";

const HeroSection = () => {
  return (
    <section className="HeroSection">
      <img src={img} alt="" />
      <div className="FullHero">
        <div className="contact-form">
          <h1 className="newPara">Get in Touch.</h1>
          <form className="row g-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name *"
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
              />
            </div>
            <div className="col-12">
              <input
                type="number"
                className="form-control"
                min="1"
                max="10"
                step="1"
                placeholder="Phone *"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Select a topic *"
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control w-75"
                style={{
                  paddingLeft: "15px",
                  resize: "none",
                  borderRadius: "8px",
                }}
                placeholder="Your Message *"
                cols="35"
                rows="5"
              ></textarea>
            </div>
            <div className="form-check">
              <input
                style={{ width: "15px", height: "15px" }}
                className="form-check-input custom-checkbox"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label form-check"
                htmlFor="flexCheckDefault"
              >
                By providing LUXLIFE. your contact information, you acknowledge
                and agree to our Privacy Policy and consent to receiving
                marketing communications, including through automated calls,
                texts, and emails, some of which may use artificial or
                prerecorded voices. This consent isn’t necessary for purchasing
                any products or services and you may opt out at any time. To opt
                out from texts, you can reply, ‘stop’ at any time. To opt out
                from emails, you can click on the unsubscribe link in the
                emails. Message and data rates may apply.
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="HeroLeft">
        <h1>Get in Touch.</h1>
      </div>
      <div className="HeroRight">
        <div className="contact-form">
          <form className="row g-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name *"
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
              />
            </div>
            <div className="col-12">
              <input
                type="number"
                className="form-control"
                min="1"
                max="10"
                step="1"
                placeholder="Phone *"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Select a topic *"
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control w-75"
                style={{
                  paddingLeft: "15px",
                  resize: "none",
                  borderRadius: "8px",
                }}
                placeholder="Your Message *"
                cols="35"
                rows="5"
              ></textarea>
            </div>
            <div className="form-check">
              <input
                style={{ width: "15px", height: "15px" }}
                className="form-check-input custom-checkbox"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label form-check"
                htmlFor="flexCheckDefault"
              >
                By providing LUXLIFE. your contact information, you acknowledge
                and agree to our Privacy Policy and consent to receiving
                marketing communications, including through automated calls,
                texts, and emails, some of which may use artificial or
                prerecorded voices. This consent isn’t necessary for purchasing
                any products or services and you may opt out at any time. To opt
                out from texts, you can reply, ‘stop’ at any time. To opt out
                from emails, you can click on the unsubscribe link in the
                emails. Message and data rates may apply.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
