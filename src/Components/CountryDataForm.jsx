import skip from "./../assets/skip.png";
import close from "./../assets/close.png";
import { useDataContext } from "./../Context/DataContext";

export function CountryDataForm() {
  const {
    setShowModal,
    fullName,
    setFullName,
    address,
    setAddress,
    phone,
    setPhone,
    email,
    setEmail,
    pincode,
    setPincode,
    setInvoiceModal
  } = useDataContext();

  const dummyData={
    name:"N.A",
    address:"N.A",
    mail:"N.A",
    zipcode:"N.A",
    mobile:"N.A"
  }
  const fillDummyData=()=>{
    setFullName(dummyData.name)
    setAddress(dummyData.address)
    setPhone(dummyData.mobile)
    setPincode(dummyData.zipcode)
    setEmail(dummyData.mail)
    setShowModal(false)
    return setInvoiceModal(true)
  }
  return (
    <section className="country-form make-center">
      <div className="form-container">
        <div className="form-title">
          <h2>Create New Invoice</h2>
          <button
            onClick={() => setShowModal(false)}
            className="close-btn"
            aria-label="close button make-center"
          >
            <img alt="close" className="close-img" src={close} />
          </button>
        </div>
        <div className="form-header">
          <h3>CUSTOMER DETAILS</h3>
          <button
          onClick={fillDummyData}
            className="skip-button weight700 make-center"
            aria-label="skip button"
          >
            Skip
            <img src={skip} className="skip-img" alt="skip" />
          </button>
        </div>
        <form className="form">
          <fieldset className="move-start">
            <label className="weight600 small-text">Full Name*</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="country-form-input"
              placeholder="Customer Name"
            />
          </fieldset>
          <fieldset className="move-start">
            <label className="weight600 small-text">Phone*</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="country-form-input"
            />
          </fieldset>
          <fieldset className="move-start">
            <label className="weight600 small-text">Address*</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              cols="30"
              rows="10"
              className="country-form-input"
              placeholder="Complete Address"
            />
          </fieldset>
          <div className="seprator">
            <fieldset className="move-start">
              <label className="weight600 small-text">Email ID*</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="country-form-input"
                placeholder="Customer Email Address"
              />
            </fieldset>
            <fieldset className="move-start">
              <label className="weight600 small-text">Pincode*</label>
              <input
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="country-form-input"
                placeholder="500067"
              />
            </fieldset>
          </div>
        </form>
        <div className="country-form-bottom">
          <button /*onClick={}*/ disabled={true && !pincode && !fullName && !email && !phone } className="weight700">PROCEED</button>
        </div>
      </div>
    </section>
  );
}
