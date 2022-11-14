import ReactDOM from "react-dom";

const Modal = ({ modal, closeModal }) => {
  if (!modal?.isOpen) return null;
  return (
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-close__btn">
          <button className="close-btn" type="buttton" onClick={closeModal}>X</button>
        </div>
        <p className="modal-text">{modal?.message}</p>
      </div>,
    document.body
   )
  );
};

export default Modal;
