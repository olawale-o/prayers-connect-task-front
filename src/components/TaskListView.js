import React  from "react";
import Task from "./Task";

const filterTasks = (tasks, tab) => {
  return tasks.filter((task) => {
    if (tab === 'todo') {
      return task.status === 'todo';
    } else if (tab === 'in-progress') {
      return task.status === 'in-progress';
    } else if (tab === 'done') {
      return task.status === 'done';
    }
    return [];
  })
};

const TaskListView = ({ tasks, tab }) => {
  const visibleTasks = filterTasks(tasks, tab);
  return (
    <div>
      {visibleTasks.length < 1 && (<p className="helper-text">No {tab} task(s) for now</p>)}
      {visibleTasks && (<ul className="task-list">
        {visibleTasks.map((task) => (<Task task={task} key={task.id} />))}
      </ul>)}
    </div>
  );
};

export default TaskListView;
