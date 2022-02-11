export default function FormInput({
  inputValue,
  callback,
  styleName,
  inputType,
  placeholderValue,
  minValue = "",
  stepValue = "",
}) {
  function callbackHandler(inputType, callback, e) {
    if (inputType === "number") {
      return callback(parseInt(e.target.value));
    } else {
      return callback(e.target.value);
    }
  }
  return (
    <input
      value={inputValue}
      onChange={(e) => callbackHandler(inputType, callback, e)}
      className={styleName}
      type={inputType}
      placeholder={placeholderValue}
      min={minValue}
      step={stepValue}
    />
  );
}
