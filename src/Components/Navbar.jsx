import plus from "../assets/plus.png";
import { useDataContext } from "../Context/DataContext";
import Button from "../lib/Button";

export function Navbar() {
  const { setShowModal } = useDataContext();
  return (
    <nav className="weight600 header-color">
      <p>DashBoard</p>
      <Button
        callback={setShowModal}
        callbackArgs={true}
        image={plus}
        styleClass={"add-invoice-btn make-center"}
        imageStyleClass={"plus-img"}
      />
    </nav>
  );
}
