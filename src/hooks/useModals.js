import { useState } from "react";

export const useModals = (modalName = '') => {
  const [state, setState] = useState({
    [modalName]: false,
  }); 
  const openModal = () => {
    setState({
      ...state,
      [modalName]: true,
    });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setState({
      ...state,
      [modalName]: false,
    });
    document.body.style.overflow = 'unset';
  };
    
  return [
    openModal,
    closeModal,
    { [modalName]: state[modalName] },
  ];
};
