const CoverLine = () => {
  return (
    <section className="CoverLine">
      <div className="container">
        <h1>
          Top Real Estate Insights Delivered, <br />
          Straight to Your Inbox.
        </h1>
        <div className="CoverForm">
          <input
            type="text"
            className="form-control form-color"
            placeholder="Email *"
          />
          <div className="form-check">
              <input style={{width: "15px", height: "15px"}} className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
              <label style={{color: "#022541" ,fontWeight: "400"}} className="form-check-label form-check" htmlFor="flexCheckDefault">By providing LUXLIFE. your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLine;
