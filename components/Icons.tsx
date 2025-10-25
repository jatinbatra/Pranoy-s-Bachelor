import React from 'react';

// FIX: Update PranayIcon to accept and apply a `style` prop to fix the type error in GameScreen.tsx.
export const PranayIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="1" width="4" height="1" fill="#000"/>
    <rect x="5" y="2" width="6" height="1" fill="#000"/>
    <rect x="4" y="3" width="8" height="1" fill="#000"/>
    <rect x="4" y="4" width="1" height="1" fill="#000"/>
    <rect x="11" y="4" width="1" height="1" fill="#000"/>
    <rect x="5" y="4" width="6" height="1" fill="#5E3A20"/>
    <rect x="4" y="5" width="1" height="3" fill="#5E3A20"/>
    <rect x="11" y="5" width="1" height="3" fill="#5E3A20"/>
    <rect x="5" y="5" width="6" height="4" fill="#F2D5B1"/>
    <rect x="4" y="8" width="8" height="1" fill="#5E3A20"/>
    <rect x="6" y="6" width="1" height="1" fill="#000"/>
    <rect x="9" y="6" width="1" height="1" fill="#000"/>
    <rect x="3" y="9" width="10" height="1" fill="#000"/>
    <rect x="3" y="10" width="1" height="3" fill="#000"/>
    <rect x="12" y="10" width="1" height="3" fill="#000"/>
    <rect x="4" y="10" width="8" height="4" fill="#4A90E2"/>
    <rect x="6" y="11" width="1" height="1" fill="#F5A623"/>
    <rect x="9" y="11" width="1" height="1" fill="#F5A623"/>
    <rect x="3" y="13" width="10" height="1" fill="#000"/>
    <rect x="4" y="14" width="8" height="1" fill="#000"/>
    <rect x="4" y="15" width="3" height="1" fill="#000"/>
    <rect x="9" y="15" width="3" height="1" fill="#000"/>
    <rect x="4" y="16" width="3" height="1" fill="#9B9B9B"/>
    <rect x="9" y="16" width="3" height="1" fill="#9B9B9B"/>
    <rect x="4" y="17" width="3" height="1" fill="#000"/>
    <rect x="9" y="17" width="3" height="1" fill="#000"/>
  </svg>
);

export const PranayIconWalk: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="1" width="4" height="1" fill="#000"/>
    <rect x="5" y="2" width="6" height="1" fill="#000"/>
    <rect x="4" y="3" width="8" height="1" fill="#000"/>
    <rect x="4" y="4" width="1" height="1" fill="#000"/>
    <rect x="11" y="4" width="1" height="1" fill="#000"/>
    <rect x="5" y="4" width="6" height="1" fill="#5E3A20"/>
    <rect x="4" y="5" width="1" height="3" fill="#5E3A20"/>
    <rect x="11" y="5" width="1" height="3" fill="#5E3A20"/>
    <rect x="5" y="5" width="6" height="4" fill="#F2D5B1"/>
    <rect x="4" y="8" width="8" height="1" fill="#5E3A20"/>
    <rect x="6" y="6" width="1" height="1" fill="#000"/>
    <rect x="9" y="6" width="1" height="1" fill="#000"/>
    <rect x="3" y="9" width="10" height="1" fill="#000"/>
    <rect x="3" y="10" width="1" height="3" fill="#000"/>
    <rect x="12" y="10" width="1" height="3" fill="#000"/>
    <rect x="4" y="10" width="8" height="4" fill="#4A90E2"/>
    <rect x="6" y="11" width="1" height="1" fill="#F5A623"/>
    <rect x="9" y="11" width="1" height="1" fill="#F5A623"/>
    <rect x="3" y="13" width="10" height="1" fill="#000"/>
    <rect x="4" y="14" width="8" height="1" fill="#000"/>
    <rect x="3" y="15" width="3" height="1" fill="#000"/>
    <rect x="8" y="15" width="3" height="1" fill="#000"/>
    <rect x="3" y="16" width="3" height="1" fill="#9B9B9B"/>
    <rect x="8" y="16" width="3" height="1" fill="#9B9B9B"/>
    <rect x="3" y="17" width="3" height="1" fill="#000"/>
    <rect x="8" y="17" width="3" height="1" fill="#000"/>
  </svg>
);


export const MicrosoftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h9v9H2V2zm0 11h9v9H2v-9zm11 0h9v9h-9v-9zm11-11v9h-9V2h9z"/>
  </svg>
);

export const HingeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
  </svg>
);

export const CarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);

export const PassportIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9 15H7v-2h2v2zm0-4H7V9h2v2zm0-4H7V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2z"/>
  </svg>
);

export const SadFaceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 3.06 4 5.76 4 2.71 0 4.98-1.66 5.76-4H7zM9 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
  </svg>
);

export const FriendsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

export const AmazonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.33 10.59c.75-2.06 2.19-3.81 4.2-4.88l.38-.21 1.29.35c.78.2 1.63.49 2.51.81.93.34 1.91.73 2.93 1.1l.2.07c1.32.48 2.65.92 3.95 1.48.33.14.7.27 1.09.43l.11.04.59-1.5c.29-.75.64-1.57 1.03-2.43.2-.42.41-.85.62-1.28l.18-.34-.72-.37c-1.4-.73-2.92-1.28-4.48-1.59-1.5-.29-3.03-.31-4.52-.02-2.36.46-4.52 1.63-6.19 3.4-1.24 1.31-2.07 2.89-2.4 4.6-.1.52.28.98.81.98h.04c.4 0 .74-.29.83-.69zM19.34 7.8c.24.58.45 1.15.63 1.7.19.57.34 1.13.47 1.68.21.94.3 1.85.25 2.71-.07 1.2-.38 2.39-.94 3.51-.57 1.13-1.39 2.12-2.43 2.9-.68.51-1.44.92-2.25 1.22l-1.63.6c-.49.18-1 .31-1.5.42l-1.03.22h-.01c-1.15.24-2.33.2-3.48-.12-1.1-.31-2.14-.85-3.09-1.58-.29-.22-.57-.46-.83-.72-.27-.26-.51-.55-.74-.85l-.04-.05c-.48-.65-.89-1.38-1.2-2.15-.31-.76-.5-1.58-.59-2.42-.09-.8-.08-1.6.03-2.38.11-.83.33-1.65.65-2.44.25-.63.56-1.24.91-1.82.72-1.17 1.68-2.16 2.82-2.92 1.08-.71 2.3-1.2 3.59-1.45 1.2-.24 2.42-.23 3.6.04 1.1.26 2.16.74 3.12 1.41.93.65 1.73 1.49 2.38 2.47z"/>
  </svg>
);

export const HouseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

export const RingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.25 2.03L12 3l-1.25-.97C9.94 1.34 8.94.8 7.83.8 5.71.8 4 2.51 4 4.64c0 1.42.79 2.68 1.97 3.32L5 9v2l1.5-1.5c.57.14 1.15.24 1.76.24.47 0 .93-.05 1.37-.15L12 12l2.37-2.37c.44.1.9.15 1.37.15.61 0 1.19-.1 1.76-.24L19 11V9l-.97-1.04C19.21 7.32 20 6.06 20 4.64c0-2.13-1.71-3.84-3.83-3.84-.98 0-1.9.45-2.92 1.23zM12 22c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);

export const DiplomaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm12 15c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V4h.01c.14-.07.29-.12.45-.16.14-.03.29-.04.44-.04h.01c.15 0 .3.01.44.04.16.04.31.09.45.16H18v15z"/>
  </svg>
);

export const MemoryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 6.5 12 6.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
    <path d="M12 8.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12 2.5-2.5-2.5z"/>
  </svg>
);

// --- Story Icons ---
export const GaugeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    <path d="M13 17h-2v-6h2v6zm0-8h-2V7h2v2z" opacity=".3"/>
    <path d="M12 6l-4 4h8l-4-4z"/>
  </svg>
);
export const SoapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1 6h-2v-2h2v2z"/>
    <path d="M18 2h-4.18C13.4 1.28 12.75.76 12 .55.63.18.08-.03-.42-.03c-2.14 0-3.93 1.4-4.4 3.29L2 9.04V18h11.26c-.49-.86-.76-1.85-.76-2.92 0-3.53 2.87-6.4 6.4-6.4.45 0 .89.05 1.32.14L18 2z"/>
  </svg>
);

export const SugarRushIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z"/>
  </svg>
);

export const BrainTrustIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

export const PotholeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);

export const AssignmentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

export const SrishtiIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="1" width="4" height="1" fill="#000"/>
    <rect x="5" y="2" width="6" height="1" fill="#000"/>
    <rect x="3" y="3" width="10" height="1" fill="#000"/>
    <rect x="2" y="4" width="12" height="1" fill="#000"/>
    <rect x="2" y="5" width="12" height="1" fill="#5E3A20"/>
    <rect x="2" y="6" width="1" height="3" fill="#5E3A20"/>
    <rect x="13" y="6" width="1" height="3" fill="#5E3A20"/>
    <rect x="3" y="6" width="10" height="4" fill="#F2D5B1"/>
    <rect x="5" y="7" width="1" height="1" fill="#000"/>
    <rect x="10" y="7" width="1" height="1" fill="#000"/>
    <rect x="2" y="9" width="12" height="1" fill="#5E3A20"/>
    <rect x="3" y="10" width="10" height="1" fill="#000"/>
    <rect x="3" y="11" width="10" height="5" fill="#E91E63"/>
    <rect x="3" y="16" width="10" height="1" fill="#000"/>
    <rect x="4" y="17" width="3" height="1" fill="#000"/>
    <rect x="9" y="17" width="3" height="1" fill="#000"/>
    <rect x="4" y="18" width="3" height="1" fill="#4A4A4A"/>
    <rect x="9" y="18" width="3" height="1" fill="#4A4A4A"/>
    <rect x="4" y="19" width="3" height="1" fill="#000"/>
    <rect x="9" y="19" width="3" height="1" fill="#000"/>
  </svg>
);

export const SeaplaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15.27c.39-.39.39-1.02 0-1.41l-6.42-6.42c-.59-.59-1.57-.6-2.17-.02L9.5 9.17 4.17 3.84c-.39-.39-1.02-.39-1.41 0L1.34 5.25c-.39.39-.39 1.02 0 1.41l5.33 5.33-1.74 1.74c-.58.58-.58 1.52 0 2.1l2.12 2.12c.58.58 1.52.58 2.1 0l1.74-1.74 5.33 5.33c.39.39 1.02.39 1.41 0l1.41-1.41zM5 19h14v2H5v-2z"/>
  </svg>
);

export const PhotographerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3.2"/>
    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);