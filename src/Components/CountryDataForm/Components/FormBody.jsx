import { useDataContext } from "../../../Context/DataContext";

export default function FormBody() {
  const {
    fullName,
    setFullName,
    phone,
    setPhone,
    address,
    setAddress,
    email,
    setEmail,
    pincode,
    setPincode,
  } = useDataContext();

  return (
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
  );
}
