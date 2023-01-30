import React, { useState } from 'react';
import useTaskDispatch from '../hooks/useTaskDispatch';
import TaskService from '../services/task';
import useTaskForm from '../hooks/useTaskForm';

const TaskForm = () => {
  const [values, setValues, clearValues] = useTaskForm({
    title: '',
    description: '',
    status: '',
  });
  const { addTask } = useTaskDispatch();
  const [disabled, setDisabled] = useState(false);
  const onChange = (e) => {
    setValues(e);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled((state) => !state);
    const data = await TaskService.add({ task: { ...values } })
    if (data) {
      addTask(data);
      clearValues();
      setDisabled((state) => !state);
    }
  };

  return (
    <div className="task-form p-2">
      <form onSubmit={handleSubmit}>
        <h1 className="task-form__title">New Task</h1>
        <div className="field">
          <input
            type="text"
            name="title"
            onChange={onChange}
            value={values.title}
            className="input"
            placeholder="Title"
            required
            aria-label="title"
          />
        </div>
        <div className="field">
          <select
            name="status"
            className="select"
            onChange={onChange}
            value={values.status}
            required
            aria-label="status"
          >
            <option value="">Status</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In-Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="field">
          <textarea
            name="description"
            value={values.description}
            placeholder="Description"
            className="textarea"
            onChange={onChange}
            required
            aria-label="description"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={disabled}
          aria-label="new"
          >
            ADD
          </button>
      </form>
    </div>
  );
};

export default TaskForm;
