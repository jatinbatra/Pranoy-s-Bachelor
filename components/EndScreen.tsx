import React from 'react';
import { RingIcon } from './Icons';

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-indigo-500 to-purple-800 text-center p-8 text-white">
      <h1 className="text-4xl md:text-5xl drop-shadow-lg mb-4">Congratulations, Pranoy!</h1>
       <RingIcon className="w-48 h-48 text-yellow-300 mb-6" />
      <p className="text-xl mb-6 leading-relaxed">You did it! Court marriage: complete. <br/>Next Level: India, this November! <br/> The adventure continues...</p>
      <button 
        onClick={onRestart} 
        className="px-8 py-4 bg-yellow-400 text-gray-800 text-2xl border-b-4 border-yellow-600 rounded-lg hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-150"
      >
        Play Again
      </button>
    </div>
  );
};

export default EndScreen;