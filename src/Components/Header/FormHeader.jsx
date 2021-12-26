import close from "./../../assets/close.png";
import { useDataContext } from "../../Context/DataContext";
import Button from "../../utils/Button";
export function FormHeader({ closeModal }) {
  const { setShowModal } = useDataContext();
  return (
    <div
      className={`${
        closeModal === setShowModal ? `extra-padding` : ``
      } form-title`}
    >
      <h3 className="weight600">Create New Invoice</h3>
      <Button
        callback={closeModal}
        callbackArgs={false}
        image={close}
        styleClass={"close-btn"}
        imageStyleClass={"close-img"}
      />
    </div>
  );
}
