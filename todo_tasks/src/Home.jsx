import { useState } from 'react';
import Column from './components/Column';
import Modal from './components/Modal';
import AttachmentList from './components/AttachmentList';

const Data = ["Incomplete", "To Do", "Doing", "Under Review", "Completed", "Overdue"];

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [attachmentCount, setAttachmentCount] = useState(0);

  const handleAttachmentCountUpdate = (count) => {
    setAttachmentCount(count);
  };

  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {Data.map((col, index) => (
        <Column
          key={index}
          title={col}
          onAddAttachment={() => setShowModal(true)}
          attachmentCount={attachmentCount} 
        />
      ))}
      
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AttachmentList onUpdateAttachmentCount={handleAttachmentCountUpdate} />
        </Modal>
      )}
    </div>
  );
}

export default Home;
