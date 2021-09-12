import skip from "./../assets/skip.png";
import { useDataContext } from "./../Context/DataContext";
import { FormHeader } from './../Utils/FormHeader';

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
  const callInvoiceDataForm=()=>{
    setShowModal(false)
    return setInvoiceModal(true)
  }

  return (
      <div className="form-container">
        <div className="countrydata-form-margin">
        <FormHeader closeModal={setShowModal}/>
        <div className="form-header form-header-border extra-padding">
          <p className="small-text weight600">CUSTOMER DETAILS</p>
          <button
          onClick={fillDummyData}
            className="skip-button weight700 make-center"
            aria-label="skip button"
          >
            Skip
            <img src={skip} className="skip-img" alt="skip" />
          </button>
        </div>
        <form className="form extra-margin">
          <fieldset className="move-start">
            <label className="weight600 super-small-text">Full Name*</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="country-form-input"
              placeholder="Customer Name"
            />
          </fieldset>
          <fieldset className="move-start">
            <label className="weight600 super-small-text">Phone*</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="country-form-input"
            />
          </fieldset>
          <fieldset className="move-start">
            <label className="weight600 super-small-text">Address*</label>
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
              <label className="weight600 super-small-text">Email ID*</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="country-form-input"
                placeholder="Customer Email Address"
              />
            </fieldset>
            <fieldset className="move-start">
              <label className="weight600 super-small-text">Pincode*</label>
              <input
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="country-form-input"
                placeholder="500067"
              />
            </fieldset>
          </div>
        </form>
        </div>
        <div className="country-form-bottom">
          <button onClick={()=>callInvoiceDataForm()} disabled={true && !pincode && !fullName && !email && !phone } className="weight700 proceed-btn">PROCEED</button>
        </div>
      </div>
  );
}
