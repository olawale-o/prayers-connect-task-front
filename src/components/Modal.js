import ReactDOM from "react-dom";

const Modal = ({ modal, closeModal }) => {
  if (!modal?.isOpen) return null;
  return (
    ReactDOM.createPortal(
      <button className={`modal ${modal?.isOpen && 'show'}`} onClick={closeModal}>
        <div className="modal-background">
          <div className={`modal-content ${modal?.isOpen && 'show'}`}>
            <div className="modal-close__btn">
              <button className="close-btn" type="buttton" onClick={closeModal}>X</button>
            </div>
            <p className="modal-text">{modal?.message}</p>
          </div>
        </div>
      </button>,
    document.body
   )
  );
};

export default Modal;
