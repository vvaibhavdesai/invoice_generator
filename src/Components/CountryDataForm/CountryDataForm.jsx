import skip from "./../../assets/skip.png";
import { useDataContext } from "../../Context/DataContext";
import { FormHeader } from "../Header/FormHeader";
import FormBody from "./Components/FormBody";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../redux/userSlice";
import { clearCountryDataFormEntries } from "../../lib/utils";

export function CountryDataForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const { setShowModal, setInvoiceModal } = useDataContext();
  const dispatch = useDispatch();
  const formBodyProps = {
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
  };

  const fillDummyData = () => {
    setShowModal(false);
    return setInvoiceModal(true);
  };

  const callInvoiceDataForm = () => {
    setShowModal(false);
    return setInvoiceModal(true);
  };

  return (
    <div className="form-container">
      <div className="countrydata-form-margin">
        <FormHeader closeModal={setShowModal} />
        <div className="form-header form-header-border extra-padding">
          <p className="small-text weight600">CUSTOMER DETAILS</p>

          <button
            onClick={() => fillDummyData()}
            aria-label="print the invoice"
            className="skip-button weight700 make-center"
          >
            Skip
            <img alt="printer" className="skip-img" src={skip} />
          </button>
        </div>
        <FormBody {...formBodyProps} />
      </div>
      <div className="country-form-bottom">
        <button
          onClick={() => {
            dispatch(
              updateUserDetails({ fullName, phone, address, email, pincode })
            );
            clearCountryDataFormEntries(
              setFullName,
              setPincode,
              setEmail,
              setAddress,
              setPhone
            );
            callInvoiceDataForm();
          }}
          disabled={
            true && !pincode && !fullName && !email && !phone && !address
          }
          className="weight700 proceed-btn"
        >
          PROCEED
        </button>
      </div>
    </div>
  );
}
