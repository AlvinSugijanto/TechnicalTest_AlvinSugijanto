// ModalContext.js
import React, { createContext, useContext, useRef } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const modalRef = useRef(null);

  return (
    <ModalContext.Provider value={modalRef}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
