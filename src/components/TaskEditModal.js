import ReactDOM from "react-dom";

const TaskEditModal = ({ isOpen, closeModal, task, }) => {
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
                type="buttton"
                onClick={closeModal}
                aria-label="close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="task-form p-2">
                <form onSubmit={() => {}}>
                  <h1 className="task-form__title">Update task</h1>
                  <div className="field">
                    <input
                      type="text"
                      name="title"
                      onChange={() => {}}
                      value={task.title}
                      className="input"
                      placeholder="Title"
                      required
                      aria-label="title"
                    />
                  </div>
                  <div className="field">
                    <textarea
                      name="description"
                      value={task.description}
                      placeholder="Description"
                      className="textarea"
                      onChange={() => {}}
                      required
                      aria-label="description"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    aria-label="update"
                    >
                      Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>,
    document.body
   )
  );
};

export default TaskEditModal;
