import React, { useReducer } from 'react';
import TaskContext from '../context/TaskContext';
import TaskDispatchContext from '../context/TaskDispatchContext';

function createInitialState(initialState) {
  return initialState;
}

function tasksReducer(tasks, action) {
  switch(action.type) {
    case 'init': {
      return { tasks: action.payload, loading: false };
    }
    case 'create': {
      const allTasks = [...tasks, action.payload];
      return { tasks: allTasks };
    }
    case 'loading': {
      return { ...tasks , loading: true }
    }
    case 'error': {
      return { ...tasks, loading: false, error: 'There is an error' }
    }
    default:
      return {}
  }
}

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, { loading: true, task: [], error: '' }, createInitialState);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
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
