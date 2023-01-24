import ReactDOM from "react-dom";

const Modal = ({ isOpen, message, closeModal }) => {
  return (
    ReactDOM.createPortal(
      <div
        className={`modal ${isOpen && 'show'}`}
      >
        <div
          className="modal-background"
          aria-modal="true"
          role="alertdialog"
          aria-describedby="dialog-desc"
          aria-labelledby="dialog-label"
        >
          <div className={`modal-content ${isOpen && 'fade-in'}`}>
            <div className="modal-close__btn">
              <button
                className="close-btn"
                type="button"
                onClick={closeModal}
                aria-label="close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <h2 className="modal-label" id="dialog-label">Message</h2>
              <p className="modal-text" id="dialog-desc">{message}</p>
            </div>
          </div>
        </div>
      </div>,
    document.body
   )
  );
};

export default Modal;
