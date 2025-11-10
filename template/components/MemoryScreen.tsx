import React from 'react';

interface MemoryScreenProps {
  imageUrl: string;
  onClose: () => void;
}

const MemoryScreen: React.FC<MemoryScreenProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center h-full bg-black text-center p-8 cursor-pointer"
      onClick={onClose}
    >
      <img src={imageUrl} alt="A precious memory" className="max-w-full max-h-[80vh] rounded-lg shadow-2xl shadow-cyan-500/30 object-contain" />
      <p className="mt-8 text-lg text-white animate-pulse">Click anywhere to continue your journey...</p>
    </div>
  );
};

export default MemoryScreen;
