import React from 'react';

interface MemoryModalProps {
  imageUrl: string;
  onClose: () => void;
}

const MemoryModal: React.FC<MemoryModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white p-4 rounded-lg shadow-xl relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
      >
        <img src={imageUrl} alt="A precious memory" className="max-w-full max-h-[80vh] rounded" />
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold border-2 border-white"
          aria-label="Close memory view"
        >
          &times;
        </button>
        <p className="text-center text-black mt-2 text-sm">Click outside or the 'X' to close.</p>
      </div>
    </div>
  );
};

export default MemoryModal;
