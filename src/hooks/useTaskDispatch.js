import { useContext } from 'react';
import TaskDispatchContext from '../context/TaskDispatchContext';

const useTaskDispatch = () => useContext(TaskDispatchContext);

export default useTaskDispatch;
