import React, { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  width?: string;
  height?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  backgroundColor = '#ff0000',
  fontColor = '#000000',
  width = '400px',
  height = '300px',
}) => {
  if (!isOpen) return null; 

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      {/* modal content */}
      <div
        className={styles.modal}
        style={{ backgroundColor, color: fontColor, width, height }}
        onClick={(e) => e.stopPropagation()} // dont close when clicking inside modal
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;