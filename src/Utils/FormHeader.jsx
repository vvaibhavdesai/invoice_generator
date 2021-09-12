import close from "./../assets/close.png"
import { useDataContext } from './../Context/DataContext';
export function FormHeader({ closeModal }){
  const { setShowModal } = useDataContext()
    return (
      <div className={`${closeModal === setShowModal ?`extra-padding`:``} form-title`}>
        <h3 className="weight600">Create New Invoice</h3>
        <button
          onClick={() => closeModal(false)}
          className="close-btn"
          aria-label="close button make-center"
        >
          <img alt="close" className="close-img" src={close} />
        </button>
      </div>
    );
  };