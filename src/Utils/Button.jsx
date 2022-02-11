export default function Button({
  callback,
  callbackArgs = "",
  image,
  styleClass,
  childrenText = "",
  imageStyleClass = "",
  disabled = "",
}) {
  function callbackHandler(callbackArgs) {
    if (callbackArgs) {
      return callback(callbackArgs);
    } else {
      return callback();
    }
  }
  return (
    <button
      disabled={disabled}
      onClick={() => callbackHandler(callbackArgs)}
      aria-label="print the invoice"
      className={`${styleClass}`}
    >
      {childrenText}
      <img alt="printer" className={imageStyleClass} src={image} />
    </button>
  );
}
