import React from 'react';

interface TouchControlsProps {
  onTouchStart: (direction: 'left' | 'right' | 'jump') => void;
  onTouchEnd: (direction: 'left' | 'right') => void;
}

const TouchControls: React.FC<TouchControlsProps> = ({ onTouchStart, onTouchEnd }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-2/5 z-20 md:hidden pointer-events-none">
      <div className="flex justify-between items-end h-full p-4">
        {/* Left/Right Controls */}
        <div className="flex gap-4 pointer-events-auto">
          <button
            onTouchStart={(e) => { e.preventDefault(); onTouchStart('left'); }}
            onTouchEnd={(e) => { e.preventDefault(); onTouchEnd('left'); }}
            className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl select-none active:bg-opacity-50"
            aria-label="Move left"
          >
            &#x25C0;
          </button>
          <button
            onTouchStart={(e) => { e.preventDefault(); onTouchStart('right'); }}
            onTouchEnd={(e) => { e.preventDefault(); onTouchEnd('right'); }}
            className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl select-none active:bg-opacity-50"
            aria-label="Move right"
          >
            &#x25B6;
          </button>
        </div>

        {/* Jump Button */}
        <button
          onTouchStart={(e) => { e.preventDefault(); onTouchStart('jump'); }}
          className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-white text-2xl font-bold select-none pointer-events-auto active:bg-opacity-50"
          aria-label="Jump"
        >
          JUMP
        </button>
      </div>
    </div>
  );
};

export default TouchControls;