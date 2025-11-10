import React from 'react';
import { PranayIcon } from './Icons';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-800 to-black text-center p-8">
      <h1 className="text-4xl md:text-6xl text-yellow-400 drop-shadow-lg mb-4">SUPER</h1>
      <h2 className="text-5xl md:text-7xl text-white font-bold mb-8 animate-pulse">PRANOY</h2>
      <PranayIcon className="w-32 h-32 mb-8 text-white" />
      <p className="text-lg mb-8">A story of friendship, love, and landing the right job!</p>
      <button 
        onClick={onStart} 
        className="px-8 py-4 bg-green-500 text-white text-2xl border-b-4 border-green-700 rounded-lg hover:bg-green-400 transform hover:-translate-y-1 transition-all duration-150"
      >
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;