'use client';
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

const Modal = ({
  isOpen,
  onClose,
  children
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            overflow: 'auto',
            backgroundColor: '#00000070',
            width: '100%',
            height: '100vh'
          }}
          onClick={onClose}
        >
          <div
            style={{
              margin: '12% auto',
              padding: '24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              width: '300px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button onClick={onClose}>close</button> */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
