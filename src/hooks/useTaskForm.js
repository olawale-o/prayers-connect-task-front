import { useState } from 'react';

const useTaskForm = (props) => {
  const [state, setState] = useState({
    ...props
  });
  
  const setValues = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name.toLowerCase()]: value.toLowerCase()
    });
  };

  const clearValues = () => setState({
    ...props, title: '', description: '', status: ''
  });
    
  return [ state, setValues, clearValues ];
};

export default useTaskForm;
