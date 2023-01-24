import { useState } from "react";

export const useModals = (modalName = '') => {
  const [state, setState] = useState({
    [modalName]: false,
  }); 
  const openModal = () =>
    setState({
      ...state,
      [modalName]: true,
    });

    const closeModal = () =>
      setState({
        ...state,
        [modalName]: false,
    });
    
    return [
      openModal,
      closeModal,
      { [modalName]: state[modalName] },
    ];
};
