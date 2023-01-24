import Modal from "./Modal";

const TaskEditModal = ({ isOpen, closeModal, task, }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
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
    </Modal>
  );
};

export default TaskEditModal;
