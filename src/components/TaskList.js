import React from 'react';
import useTask from '../hooks/useTask';
import Task from './Task';

const TaskList = () => {
  const tasks = useTask();
  if (tasks.length < 1) return <div>Loading</div>
  return (
    <div className="task-container p-2">
      <ul className="task-list">
        {tasks.map((task) => (<Task task={task} key={task.id} />))}
      </ul>
    </div>
  );
}

export default TaskList;
