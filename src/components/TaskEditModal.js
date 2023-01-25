import { useState } from "react";
import Modal from "./Modal";
import useTaskDispatch from '../hooks/useTaskDispatch';
import useTask from "../hooks/useTask";

const TaskEditModal = ({ isOpen, closeModal, task, index }) => {
  const [formValues, setFormValues] = useState({
    title: task.title,
    description: task.description,
    id: task.id,
    status: task.status,
  });
  const onformChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const { updateTask } = useTaskDispatch();
  const { error } = useTask();
  if (error) console.log(error);
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="task-form p-2">
        <form onSubmit={(e) => {
          e.preventDefault();
          updateTask(index, { task: { ...formValues } }, 'update');
          closeModal();
        }}>
            <h1 className="task-form__title">Update task</h1>
            <div className="field">
              <input
                type="text"
                name="title"
                value={formValues.title}
                className="input"
                placeholder="Title"
                required
                aria-label="title"
                onChange={onformChange}
              />
            </div>
            <div className="field">
              <textarea
                name="description"
                value={formValues.description}
                placeholder="Description"
                className="textarea"
                required
                aria-label="description"
                onChange={onformChange}
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
