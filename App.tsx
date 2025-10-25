import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, LevelData } from './types';
import { LEVELS } from './constants';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import * as Sound from './utils/sounds';

const GROUND_LEVEL = 85; // % from top for ground
const JUMP_STRENGTH = -3.5; // Super jump! Negative is up
const GRAVITY = 0.09;

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [collectedItems, setCollectedItems] = useState<string[]>([]);
  const [pranayPosition, setPranayPosition] = useState({ x: 10, y: GROUND_LEVEL }); // y is % from top
  const [dynamicItemPositions, setDynamicItemPositions] = useState<{ [id: string]: { x: number, y: number, vx: number } }>({});
  const [isStunned, setIsStunned] = useState(false);
  const [walkFrame, setWalkFrame] = useState(0);

  const keyState = useRef<{ [key: string]: boolean }>({});
  const pranayVelocityY = useRef(0);
  const onGround = useRef(true);
  
  const currentLevel: LevelData = LEVELS[currentLevelIndex];

  const resetPlayerState = useCallback(() => {
    setPranayPosition({ x: 10, y: GROUND_LEVEL });
    pranayVelocityY.current = 0;
    onGround.current = true;
    setCollectedItems([]);
    
    const newDynamicPositions: { [id: string]: { x: number, y: number, vx: number } } = {};
    LEVELS[currentLevelIndex].items.forEach(item => {
      if (item.isEnemy && item.movement) {
        newDynamicPositions[item.id] = {
          x: parseFloat(item.position.left),
          y: parseFloat(item.position.top),
          vx: 0.5,
        };
      }
    });
    setDynamicItemPositions(newDynamicPositions);
  }, [currentLevelIndex]);

  const startGame = () => {
    Sound.playStartSound();
    setCurrentLevelIndex(0);
    setGameState(GameState.Playing);
    // Reset state will be triggered by useEffect on currentLevelIndex change
  };

  const restartGame = () => {
    setGameState(GameState.Start);
  };
  
  useEffect(() => {
    resetPlayerState();
  }, [currentLevelIndex, resetPlayerState]);

  // --- Background Music Handler ---
  useEffect(() => {
    if (gameState === GameState.Playing) {
      Sound.changeMusic(currentLevelIndex);
    } else {
      Sound.stopMusic();
    }
  }, [gameState, currentLevelIndex]);


  const handleEnemyCollision = useCallback(() => {
    if (isStunned) return;
    Sound.playObstacleSound();
    setIsStunned(true);
    pranayVelocityY.current = JUMP_STRENGTH / 2; // small bounce
    onGround.current = false;
    setTimeout(() => setIsStunned(false), 700);
  }, [isStunned]);

  const handleItemCollection = useCallback((itemId: string) => {
    if (collectedItems.includes(itemId)) return;
    
    const item = currentLevel.items.find(i => i.id === itemId);
    if (!item) return;

    if (item.isObstacle) {
      Sound.playObstacleSound();
      return; // FIX: Do not "collect" obstacles, just play a sound and stop.
    }
    
    // Custom sounds for specific items
    switch(item.name) { // Using name for more general sound triggers
      case "Srishti's Support":
        Sound.playSrishtiSound();
        break;
      case 'Microsoft Internship!':
        Sound.playInternshipGetSound();
        break;
      case 'Hinge Profile':
        Sound.playHingeMatchSound();
        break;
      case 'Learned to Drive':
        Sound.playVroomSound();
        break;
      default:
        Sound.playCoinSound();
    }
    
    setCollectedItems(prev => [...prev, itemId]);
  }, [collectedItems, currentLevel.items]);

  const goToNextLevel = useCallback(() => {
    if (currentLevelIndex < LEVELS.length - 1) {
      Sound.playLevelUpSound();
      setCurrentLevelIndex(prev => prev + 1);
    } else {
      Sound.playWeddingSound();
      setGameState(GameState.End);
    }
  }, [currentLevelIndex]);

  const allItemsCollected = collectedItems.length === currentLevel.items.filter(item => !item.isObstacle && !item.isEnemy).length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keyState.current[e.key] = true;
      if (gameState === GameState.Playing && (e.key === 'ArrowUp' || e.key === ' ') && onGround.current) {
        pranayVelocityY.current = JUMP_STRENGTH;
        onGround.current = false;
        Sound.playJumpSound();
      }

      if (e.key === 'Enter' || e.key === ' ') {
        if (gameState === GameState.Start) startGame();
        else if (gameState === GameState.End) restartGame();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keyState.current[e.key] = false;
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let animationFrameId: number;
    const animationCounter = { current: 0 };

    const gameLoop = () => {
      if (gameState === GameState.Playing) {
        
        let isMoving = false;
        // Update Pranay's position
        setPranayPosition(prev => {
          let newX = prev.x;
          if (!isStunned) {
            if (keyState.current['ArrowLeft']) {
              newX -= 0.8;
              isMoving = true;
            }
            if (keyState.current['ArrowRight']) {
              newX += 0.8;
              isMoving = true;
            }
          }
          
          pranayVelocityY.current += GRAVITY;
          let newY = prev.y + pranayVelocityY.current;

          if (newY >= GROUND_LEVEL) {
            newY = GROUND_LEVEL;
            pranayVelocityY.current = 0;
            onGround.current = true;
          }

          return { x: Math.max(5, Math.min(95, newX)), y: newY };
        });

        if (isMoving) {
            animationCounter.current = (animationCounter.current + 1) % 10;
            if (animationCounter.current === 0) {
              setWalkFrame(f => (f === 0 ? 1 : 0));
            }
        }

        // Update enemy positions
        setDynamicItemPositions(prev => {
          const next = {...prev};
          for(const id in next) {
            const item = currentLevel.items.find(i => i.id === id);
            if(item?.movement?.type === 'horizontal') {
              const [minX, maxX] = item.movement.range;
              next[id].x += next[id].vx * 0.4;
              if (next[id].x > maxX || next[id].x < minX) {
                next[id].vx *= -1;
              }
            }
          }
          return next;
        });
      }
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
      Sound.stopMusic(); // Ensure music stops on component unmount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, isStunned, currentLevel]);


  useEffect(() => {
    if (gameState !== GameState.Playing) return;

    // Pranay's center point
    const pranayCX = pranayPosition.x;
    const pranayCY = pranayPosition.y;

    currentLevel.items.forEach(item => {
      const isDynamic = item.isEnemy && dynamicItemPositions[item.id];
      const itemX = isDynamic ? dynamicItemPositions[item.id].x : parseFloat(item.position.left);
      const itemY = isDynamic ? dynamicItemPositions[item.id].y : parseFloat(item.position.top);
      
      const distance = Math.sqrt(Math.pow(pranayCX - itemX, 2) + Math.pow(pranayCY - itemY, 2));
      
      const collisionThreshold = 8; // % of screen, made it more forgiving
      if (distance < collisionThreshold) {
        if(item.isEnemy) {
          handleEnemyCollision();
        } else {
          handleItemCollection(item.id);
        }
      }
    });
  }, [pranayPosition, gameState, currentLevel.items, collectedItems, handleItemCollection, handleEnemyCollision, dynamicItemPositions]);


  const renderContent = () => {
    switch (gameState) {
      case GameState.Start:
        return <StartScreen onStart={startGame} />;
      case GameState.Playing:
        return (
          <GameScreen 
            level={currentLevel}
            collectedItems={collectedItems}
            onNextLevel={goToNextLevel}
            allItemsCollected={allItemsCollected}
            pranayPosition={pranayPosition}
            dynamicItemPositions={dynamicItemPositions}
            isStunned={isStunned}
            walkFrame={walkFrame}
          />
        );
      case GameState.End:
        return <EndScreen onRestart={restartGame} />;
      default:
        return <StartScreen onStart={startGame} />;
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-4xl aspect-video bg-black border-4 border-gray-600 shadow-2xl shadow-cyan-500/20 rounded-lg overflow-hidden flex flex-col relative">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;