import React from 'react';
import useTask from '../hooks/useTask';
import useTaskDispatch from '../hooks/useTaskDispatch';
import Tabs from './Tabs';
import TaskService from '../services/task';
import TaskListView from './TaskListView';

const TaskList = () => {
  const tabs = ['todo', 'in-progress', 'done'];
  const { loading, tasks } = useTask();
  const { setLoading, getTasks, setError } = useTaskDispatch();
  const [tabIndex, setTabIndex] = React.useState(1);
  const [filter, setFilter] = React.useState(tabs[0]);
  const switchTabs = (position) => {
    setTabIndex(position);
    setFilter(tabs[position - 1]);
  };

  React.useEffect(() => {
    setLoading();
    TaskService.getAllTasks(filter)
    .then((response) => {
      getTasks(response)
    }).catch((err) => setError('error'));
  }, [filter]);
  return (
    <div className="task-container p-2">
    <div className="tab-container">
      <Tabs switchTabs={switchTabs} tabIndex={tabIndex} />
      {loading ? (<div className="loading" />)
        : (
          <div className="tab-view">
            <TaskListView tab={filter} tasks={tasks} />
          </div>
        )
      }
    </div>
  </div>
  );
}

export default TaskList;
