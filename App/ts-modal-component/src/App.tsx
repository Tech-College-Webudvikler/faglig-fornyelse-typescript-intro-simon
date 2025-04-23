import React, { useState } from 'react';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        margin: 0, 
      }}
    >
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        backgroundColor="#f0f0f0"
        fontColor="#333"
        width="500px"
        height="400px"
      >
        <h2>Title</h2>
        <p>Paragraph</p>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;