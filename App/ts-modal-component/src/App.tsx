import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css'; 

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  return (
    <div className="container">
      {/* open modal button */}
      <button className="button" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      {/* Modal component */}
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