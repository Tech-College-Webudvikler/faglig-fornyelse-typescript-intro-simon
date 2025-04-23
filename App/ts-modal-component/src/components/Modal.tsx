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
  backgroundColor = '#ffffff',
  fontColor = '#000000',
  width = '400px',
  height = '300px',
}) => {
  if (!isOpen) return null; 

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={styles.modal}
        style={{
          backgroundColor,
          color: fontColor,
          width,
          height,
        }}
        onClick={handleModalClick}
      >
        {children} {/* indhold */}
      </div>
    </div>
  );
};

export default Modal;
