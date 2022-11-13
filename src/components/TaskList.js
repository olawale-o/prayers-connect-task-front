import React from 'react';
import useTask from '../hooks/useTask';
import useTaskDispatch from '../hooks/useTaskDispatch';
import Task from './Task';
import Tabs from './Tabs';
import TaskService from '../services/task';

const TaskList = () => {
  const tabs = ['todo', 'in-progress', 'done'];
  const taskObj = useTask();
  const dispatch = useTaskDispatch();
  const [tabIndex, setTabIndex] = React.useState(1);
  const [filter, setFilter] = React.useState(tabs[0]);
  const switchTabs = (position) => {
    dispatch({ type: 'loading' })
    setTabIndex(position);
    setFilter(tabs[position - 1]);
  };

  React.useEffect(() => {
    dispatch({ type: 'loading' })
    TaskService.getAllTasks(filter)
    .then((response) => {
      console.log(response)
      dispatch({ type: 'init', payload: response })
    }).catch((err) => dispatch({ type: 'error' }));
  }, [filter]);
  return (
    <div className="task-container p-2">
    <div className="tab-container">
      <Tabs switchTabs={switchTabs} tabIndex={tabIndex} />
      {taskObj?.loading ? (<div className="loading" />)
        : (
          <div className="tab-view">
            {tabIndex === 1 && (
              <div>
                {taskObj.tasks.length < 1 ? 
                  (<p className="helper-text">No pending tasks</p>) :
                  (<ul className="task-list">
                    {taskObj.tasks.map((task) => (<Task task={task} key={task.id} />))}
                  </ul>)
                }
              </div>
            )}
            {tabIndex === 2 && (
              <div>
                {taskObj.tasks.length < 1 ? 
                  (<p className="helper-text">There are no pending tasks</p>) :
                  (<ul className="task-list">
                    {taskObj.tasks.map((task) => (<Task task={task} key={task.id} />))}
                  </ul>)
                }
              </div>
            )}
            {tabIndex === 3 && (
              <div>
                {taskObj.tasks.length < 1 ? 
                  (<p className="helper-text">There are no completed tasks</p>) :
                  (<ul className="task-list">
                    {taskObj.tasks.map((task) => (<Task task={task} key={task.id} />))}
                  </ul>)
                }
              </div>
            )}
          </div>
        )
      }
    </div>
  </div>
  );
}

export default TaskList;
