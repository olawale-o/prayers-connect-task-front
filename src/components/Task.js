import React from 'react';
import Modal from './Modal';
import useTaskDispatch from '../hooks/useTaskDispatch';

const operations = ['todo', 'in-progress', 'done'];
const Task = ({task, index}) => {
  const [modal, setModal] = React.useState({
    isOpen: false,
    message: '',
  });
  const { updateTask } = useTaskDispatch();
  const removeFrom = (index, operation) => {
    if (operation === 'in-progress' && (task.status === 'done' || task.status === 'todo')) {
      updateTask(index, {task: { status: operation, id: task.id }});
      return ;
    }
    
    if ((operation === 'done' || operation === 'todo') && task.status === 'in-progress') {
      updateTask(index, {task: { status: operation, id: task.id }});
      return;
    }
    setModal((state) => ({
      ...state,
      isOpen: true,
      message: `You are trying to move task to ${operation}.
      You can either move a step forward or backward`
    }))
  };

  const closeModal = () => {
    setModal((state) => ({ ...state, message: '', isOpen: false  }))
  };

  return (
    <li className="task-item">
      <div className="task-item__content">
        <div className="task-item__header d-flex justify-space-between">
          <h2 className="task-item__title">{task.title}</h2>
          <button type="button" className="edit-button" aria-label="button">
            <span className="edit">Edit</span>
          </button>
          {/* {task.status === 'todo' && <span className="status">todo</span>}
          {task.status === 'in-progress' && <span className="status">in-progress</span>}
          {task.status === 'done' && <span className="status">done</span>} */}

        </div>
        <p className="task-description">
          {task.description}
        </p>
        <div className="task-status">
          {operations.map((operation) => (
            <button
              className={`status-chip ${operation === 'in-progress' ? 'status-progress' : `status-${operation}`}`}
              disabled={task.status === operation}
              key={operation}
              onClick={() => removeFrom(index, operation)}
            >
              {`Move to ${operation}`}
              </button>
          ))}
        </div>
      </div>
      <Modal modal={modal} closeModal={closeModal} />
    </li>
  )
};

export default Task;
