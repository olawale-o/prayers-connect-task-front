import ReactDOM from "react-dom";

const Modal = ({ isOpen, children, closeModal }) => {
  return (
    ReactDOM.createPortal(
      <div
        className={`modal ${isOpen && 'show'}`}
      >
        <div
          className={`modal-background ${isOpen && 'show'}`}
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
              {children}
            </div>
          </div>
        </div>
      </div>,
    document.body
   )
  );
};

export default Modal;
