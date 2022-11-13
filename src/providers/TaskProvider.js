import React, { useReducer, useEffect } from 'react';
import TaskContext from '../context/TaskContext';
import TaskDispatchContext from '../context/TaskDispatchContext';
import TaskService from '../services/task';

function createInitialState(initialState) {
  return initialState;
}

function tasksReducer(tasks, action) {
  switch(action.type) {
    case 'init': {
      return action.payload;
    }
    case 'create': {
      const allTasks = [...tasks, action.payload];
      return allTasks;
    }
    default:
      return []
  }
}

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, [], createInitialState);

  useEffect(() => {
    console.log('ehehheheh')
    TaskService.getAllTasks()
    .then((response) => {
      dispatch({ type: 'init', payload: response });
    }).catch(console.log)
  }, []);
  
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
