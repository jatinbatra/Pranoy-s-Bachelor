import React from 'react';

interface DialogueBoxProps {
  story: string;
  canProceed: boolean;
  onProceed: () => void;
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ story, canProceed, onProceed }) => {
  return (
    <div className="h-1/3 md:h-1/4 bg-blue-900 border-t-4 border-blue-700 p-4 flex items-center justify-between text-sm sm:text-lg">
      <p className="flex-grow pr-4 leading-tight">{story}</p>
      {canProceed && (
        <button 
          onClick={onProceed}
          className="bg-green-500 text-white px-6 py-3 border-b-4 border-green-700 rounded-lg hover:bg-green-400 animate-bounce"
        >
          Next
        </button>
      )}
       {!canProceed && (
        <div className="text-white text-xs sm:text-base text-center w-36 sm:w-48 p-2 border-2 border-dashed border-gray-500 rounded-lg flex-shrink-0">
          <p className="font-bold">Collect all items!</p>
        </div>
       )}
    </div>
  );
};

export default DialogueBox;