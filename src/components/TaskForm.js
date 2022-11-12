import React, { useContext, useState } from 'react';
// import AppContext from '../context/AppContext';
// import useTodoDispatch from '../hooks/useTodoDispatch';
import TaskService from '../services/task';

const TaskForm = () => {
  // const dispatch = useTodoDispatch();
  // const { setStatusText } = useContext(AppContext);
  const [values, setValues] = useState({
    title: '',
    description: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name.toLowerCase()]: value.toLowerCase()
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await TaskService.add({ ...values })
    if (data) {
      // dispatch.addTask(data)
    }
    setValues({
      title: '',
      description: '',
    });
  };

  return (
    <div className="task-form p-2">
      <form onSubmit={handleSubmit}>
        <h1 className="task-form__title">Add todo</h1>
        <div className="field">
          <input type="text" name="title" onChange={onChange} value={values.title} className="input" placeholder="Title" />
        </div>
        <div className="field">
          <textarea name="description" value={values.description} placeholder="Description" className="textareaa" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">ADD</button>
      </form>
    </div>
  );
};

export default TaskForm;
