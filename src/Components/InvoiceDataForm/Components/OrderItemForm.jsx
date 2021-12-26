import FormInput from "../../../utils/Input";
import enter from "./../../../assets/enter.png";
export function OrderItemDetailForm({
  itemName,
  setItemName,
  quantity,
  setQuantity,
  price,
  setPrice,
  tax,
  discount,
  addtoItemList,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-row form-margin">
      <FormInput
        inputValue={itemName}
        callback={setItemName}
        styleName={"form-row-base_style form-padding"}
        inputType={"text"}
        placeholderValue={"please enter item name"}
      />
      <FormInput
        inputValue={quantity}
        callback={setQuantity}
        styleName={"form-row-base_style form-padding form-numeric-values"}
        inputType={"number"}
        placeholderValue={"0"}
        minValue={"1"}
      />
      <FormInput
        inputValue={price}
        callback={setPrice}
        styleName={"form-row-base_style form-padding form-numeric-values"}
        inputType={"number"}
        placeholderValue={"0"}
        minValue={"0.00"}
        stepValue={"1.00"}
      />
      <button
        disabled={true && !itemName && !price}
        onClick={() => addtoItemList(quantity, price, tax, discount)}
        className="enter-button"
        aria-label="Add item button"
      >
        <img src={enter} alt="enter" />
      </button>
    </form>
  );
}
