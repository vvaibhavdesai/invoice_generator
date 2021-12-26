import FormInput from "../../../utils/Input";

export default function FormBottomRow({
  tax,
  setTax,
  discount,
  setDiscount,
  subTotal,
}) {
  return (
    <div className="form-bottom-row form-margin row-padding">
      <div className="form-bottom-row">
      <FormInput
        inputValue={tax}
        callback={setTax}
        styleName={"form-numeric-values form-padding form-row-base_style"}
        inputType={"number"}
        placeholderValue={"0"}
        minValue={"0"}
        step={"1"}
      />
      <FormInput
        inputValue={discount}
        callback={setDiscount}
        styleName={"form-numeric-values form-padding form-row-base_style"}
        inputType={"number"}
        placeholderValue={"0"}
        minValue={"0"}
        step={"1"}
      />
      </div>
      <div className="form-bottom-row gap">
        <p className="weight600 dark-gray">Sub Total</p>
        <p className="weight600">₹{subTotal}</p>
      </div>
    </div>
  );
}
