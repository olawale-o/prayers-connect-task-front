import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useModals = (modalName = '') => {
  const navigate = useNavigate();
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

  const closeModal = (url) => {
    setState({
      ...state,
      [modalName]: false,
    });
    document.body.style.overflow = 'unset';
    if (url) {
      navigate(url, { replace: true });
      return;
    }
  };
    
  return [
    openModal,
    closeModal,
    { [modalName]: state[modalName] },
  ];
};
