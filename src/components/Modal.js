import ReactDOM from "react-dom";

const Modal = ({ modal, closeModal }) => {
  if (!modal?.isOpen) return null;
  return (
    ReactDOM.createPortal(
      <button
        className={`modal ${modal?.isOpen && 'show'}`}
        onClick={closeModal}
      >
        <div
          className="modal-background"
          aria-modal="true"
          role="alertdialog"
          aria-describedby="dialog-desc"
          aria-labelledby="dialog-label"
        >
          <div className={`modal-content ${modal?.isOpen && 'show'}`}>
            <div className="modal-close__btn">
              <button
                className="close-btn"
                type="buttton"
                onClick={closeModal}
                aria-label="close"
              >
                X
              </button>
            </div>
            <h2 className="modal-label" id="dialog-label">Message</h2>
            <p className="modal-text" id="dialog-desc">{modal?.message}</p>
          </div>
        </div>
      </button>,
    document.body
   )
  );
};

export default Modal;
