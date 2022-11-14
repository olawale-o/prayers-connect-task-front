import React, { useReducer } from 'react';
import TaskContext from '../context/TaskContext';
import TaskDispatchContext from '../context/TaskDispatchContext';
import TaskService from '../services/task';

function createInitialState(initialState) {
  return initialState;
}

function tasksReducer(state, action) {
  switch(action.type) {
    case 'init': {
      return { tasks: action.payload, loading: false, total: action.payload.length };
    }
    case 'create': {
      const allTasks = [...state.tasks, action.payload];
      return { tasks: allTasks, loading: false, error: '', total: allTasks.length };
    }
    case 'remove': {
      const allTasks = [...state.tasks];
      allTasks.splice(action.payload, 1);
      return { tasks: allTasks, loading: false, error: '', total: allTasks.length };
    }
    case 'loading': {
      return { ...state, loading: true }
    }
    case 'error': {
      return { ...state.tasks, loading: false, error: 'There is an error' }
    }
    default:
      return {}
  }
}

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    tasksReducer, { loading: true, tasks: [], error: '', total: 0 },
    createInitialState);
  function updateTask(index, data) {
    TaskService.updateTask(data)
    .then((_response) => {
      dispatch({ type: 'remove', payload: index });
    }).catch((err) => setError('Cannot update'));
  }

  function addTask(data) {
    dispatch({ type: 'create', payload: data });
  }

  function setLoading() {
    dispatch({ type: 'loading' });
  }

  function getTasks(data) {
    dispatch({ type: 'init', payload: data })
  }

  function setError(message) {
    dispatch({ type: 'error', payload: message })
  }
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={{
        dispatch,
        updateTask,
        addTask,
        setLoading,
        getTasks,
        setError,
      }}>
        <div className="container">
          <div className="d-flex justify-space-between">
            {children}
          </div>
        </div>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export default TaskProvider;
