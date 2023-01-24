import Modal from "./Modal";

const AlertModal = ({ isOpen, message, closeModal }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="modal-body">
        <h2 className="modal-label" id="dialog-label">Message</h2>
        <p className="modal-text" id="dialog-desc">{message}</p>
      </div>
    </Modal>
  );
};

export default AlertModal;
