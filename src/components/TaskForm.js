import React, { useState } from 'react';
import useTaskDispatch from '../hooks/useTaskDispatch';
import TaskService from '../services/task';

const TaskForm = () => {
  const dispatch = useTaskDispatch();
  const [values, setValues] = useState({
    title: '',
    description: '',
    status: '',
  });
  const [disabled, setDisabled] = useState(false);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name.toLowerCase()]: value.toLowerCase()
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled((state) => !state);
    dispatch({ type: 'loading' });
    const data = await TaskService.add({ task: { ...values } })
    if (data) {
      dispatch({ type: 'create', payload: data });
      setValues({
        title: '',
        description: '',
        status: '',
      });
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
          />
        </div>
        <div className="field">
          <select name="status" className="select" onChange={onChange} value={values.status}>
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
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={disabled}>ADD</button>
      </form>
    </div>
  );
};

export default TaskForm;
