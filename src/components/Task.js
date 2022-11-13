import React, { useContext } from 'react';
import useTask from '../hooks/useTask';
import useTaskDispatch from '../hooks/useTaskDispatch';


const Task = ({task}) => {
  // const dispatch = useTaskDispatch();
  // const tasks = useTask();
  // const onTodoUpdate = () => {
  //   // const todoCategoryIndex = todos.findIndex((todo: CategoryInterface) => todo.category === category);
  //   //const todoCategory = todos[todoCategoryIndex];
  //   dispatch('updateStatus', { title, description, status } );
  
  // };

  return (
    <li className="task-item">
      <div className="task-item__content">
        <div className="task-item__header d-flex justify-space-between">
          <h2 className="task-item__title">{task.title}</h2>
          {task.status === 'todo' && <span className="status">todo</span>}
          {task.status === 'in-progress' && <span className="status">in-progress</span>}
          {task.status === 'done' && <span className="status">done</span>}

        </div>
        <p className="task-description">
          {task.description}
        </p>
        <div className="task-status">
          <button className="status-chip status-todo">todo</button>
          <button className="status-chip status-progress">in-progress</button>
          <button className="status-chip status-done">completed</button>
        </div>
      </div>
    </li>
  )
};

export default Task;
