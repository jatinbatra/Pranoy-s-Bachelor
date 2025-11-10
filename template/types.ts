// FIX: Import `React` to resolve the "Cannot find namespace 'React'" error.
import React from 'react';

export enum GameState {
  Start,
  Playing,
  End,
}

export interface GameItem {
  id: string;
  name: string;
  Icon: React.FC<{ className?: string }>;
  position: { top: string; left: string; };
  isObstacle?: boolean;
  isEnemy?: boolean;
  movement?: {
    type: 'horizontal';
    range: [number, number]; // [minX, maxX] in percentage
  }
}

export interface LevelData {
  id: number;
  title: string;
  story: string;
  backgroundClass: string;
  items: GameItem[];
}