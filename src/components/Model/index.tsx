'use client';
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

const Modal = ({
  isOpen,
  onClose,
  children,
  width = 80
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: number;
}) => {
  return (
    <>
      {isOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-70'
          onClick={onClose}
        >
          <div
            className={`mx-auto my-12 p-6 bg-white rounded-lg w-${width}`}
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
