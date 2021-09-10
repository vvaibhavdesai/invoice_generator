import skip from "./../assets/skip.png";
import close from "./../assets/close.png";

export function CountryDataForm() {
  return (
    <section className="country-form make-center">
      <div className="form-container">
        <div className="form-title">
          <h2>Create New Invoice</h2>
          <button className="close-btn" aria-label="close button make-center">
            <img alt="close" className="close-img" src={close} />
          </button>
        </div>
        <div className="form-header">
          <h3>CUSTOMER DETAILS</h3>
          <button className="skip-button weight700 make-center"aria-label="skip button">
            Skip<img src={skip} className="skip-img"alt="skip" />
          </button>
        </div>
        <form className="form">
          <fieldset className="move-start">
            <label className="weight600 small-text">Full Name*</label>
            <input className="country-form-input" placeholder="Customer Name" />
          </fieldset>
          <fieldset className="move-start">
            <label className="weight600 small-text">Phone*</label>
            <input className="country-form-input"/>
          </fieldset>
          <fieldset className="move-start">
            <label className="weight600 small-text">Address*</label>
            <textarea cols="30" rows="10" className="country-form-input" placeholder="Complete Address" />
          </fieldset>
          <div className="seprator">
            <fieldset className="move-start">
              <label className="weight600 small-text">Email ID*</label>
              <input className="country-form-input" placeholder="Customer Email Address" />
            </fieldset>
            <fieldset className="move-start">
              <label className="weight600 small-text">Pincode*</label>
              <input className="country-form-input" placeholder="500067" />
            </fieldset>
          </div>
        </form>
      <div className="country-form-bottom">
          <button className="weight700">PROCEED</button>
      </div>
      </div>
    </section>
  );
}
