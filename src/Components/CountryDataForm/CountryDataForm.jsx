import skip from "./../../assets/skip.png";
import { useDataContext } from "../../Context/DataContext";
import { FormHeader } from "../Header/FormHeader";
import FormBody from "./Components/FormBody";
import Button from "../../utils/Button";

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
    setInvoiceModal,
  } = useDataContext();

  const dummyData = {
    name: "N.A",
    address: "N.A",
    mail: "N.A",
    zipcode: "N.A",
    mobile: "N.A",
  };
  const fillDummyData = () => {
    setFullName(dummyData.name);
    setAddress(dummyData.address);
    setPhone(dummyData.mobile);
    setPincode(dummyData.zipcode);
    setEmail(dummyData.mail);
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
          <Button
            callback={fillDummyData}
            image={skip}
            styleClass={"skip-button weight700 make-center"}
            childrenText={"Skip"}
            imageStyleClass={"skip-img"}
          />
        </div>
        <FormBody />
      </div>
      <div className="country-form-bottom">
        <button
          onClick={() => callInvoiceDataForm()}
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
