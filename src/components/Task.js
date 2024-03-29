import React from 'react';
import { Link } from 'react-router-dom';
import AlertModal from './AlertModal';
import useTaskDispatch from '../hooks/useTaskDispatch';
import { useModals } from '../hooks/useModals';

const operations = ['todo', 'in-progress', 'done'];
const Task = ({task, index}) => {
  const [openModal, closeModal, errorModal] = useModals('ErrorModal');
  const [message, setMessage] = React.useState('');
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
    setMessage(`You are trying to move task to ${operation}.
      You can either move a step forward or backward`);
    openModal();
  };

  return (
    <li className="task-item">
      <div className="task-item__content">
        <div className="task-item__header d-flex justify-space-between">
          <h2 className="task-item__title">{task.title}</h2>
          {/* <button
            type="button"
            className="edit-button"
            aria-label="button"
            onClick={openEditModal}
          > */}
            <Link to={`task/${task.id}`}>
              <span className="edit">Edit</span>
            </Link>
          {/* </button> */}
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
      <AlertModal
        isOpen={errorModal.ErrorModal}
        message={message}
        closeModal={() => closeModal()}
      />
    </li>
  )
};

export default Task;
