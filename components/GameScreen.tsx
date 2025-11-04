import React from 'react';
import { LevelData } from '../types';
import DialogueBox from './DialogueBox';
import { PranayIcon, PranayIconWalk } from './Icons';
import TouchControls from './TouchControls';

interface GameScreenProps {
  level: LevelData;
  collectedItems: string[];
  onNextLevel: () => void;
  allItemsCollected: boolean;
  pranayPosition: { x: number; y: number };
  dynamicItemPositions: { [id: string]: { x: number, y: number, vx: number } };
  isStunned: boolean;
  walkFrame: number;
  isTouchDevice: boolean;
  onTouchStart: (direction: 'left' | 'right' | 'jump') => void;
  onTouchEnd: (direction: 'left' | 'right') => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ level, collectedItems, onNextLevel, allItemsCollected, pranayPosition, dynamicItemPositions, isStunned, walkFrame, isTouchDevice, onTouchStart, onTouchEnd }) => {
  
  const PranoyCharacter = walkFrame === 1 ? PranayIconWalk : PranayIcon;

  return (
    <div className="flex-grow flex flex-col h-full">
      <div className={`relative flex-grow ${level.backgroundClass} overflow-hidden`}>
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-3 py-1 rounded text-sm z-10">
          {level.title}
        </div>
        
        {/* FIX: Corrected typo from PranayCharacter to PranoyCharacter to match the variable name. */}
        <PranoyCharacter
          className={`absolute w-12 h-16 text-white z-10 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${isStunned ? 'opacity-50 animate-pulse' : 'opacity-100'}`}
          style={{ 
            left: `${pranayPosition.x}%`, 
            top: `${pranayPosition.y}%`,
          }}
        />

        {/* Level Items */}
        {level.items.map(item => {
          const isCollected = collectedItems.includes(item.id);
          const isDynamic = item.isEnemy && dynamicItemPositions[item.id];
          
          const positionStyle = isDynamic 
            ? { top: `${dynamicItemPositions[item.id].y}%`, left: `${dynamicItemPositions[item.id].x}%` }
            : { top: item.position.top, left: item.position.left };

          const isCollectible = !item.isEnemy && !item.isObstacle;

          const iconClass = item.isEnemy 
            ? 'text-red-500 animate-pulse' 
            : item.isObstacle
            ? 'text-gray-400'
            : 'text-yellow-300';

          return (
            <div
              key={item.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isCollected ? 'opacity-0 scale-150' : 'opacity-100 scale-100'} ${isCollectible ? 'shimmer-effect' : ''}`}
              style={positionStyle}
            >
              <div
                className="flex flex-col items-center group"
              >
                <item.Icon className={`w-12 h-12 drop-shadow-lg ${iconClass}`} />
                <span className="mt-2 text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}

        {isTouchDevice && <TouchControls onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} />}
      </div>
      <DialogueBox
        story={level.story}
        canProceed={allItemsCollected}
        onProceed={onNextLevel}
      />
    </div>
  );
};

export default GameScreen;