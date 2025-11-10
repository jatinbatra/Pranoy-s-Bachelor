let audioCtx: AudioContext;

const getAudioContext = (): AudioContext | undefined => {
  if (typeof window === 'undefined') return;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
};

// --- Sound Effects ---

const playSound = (
  freq: number,
  type: OscillatorType,
  duration: number,
  startFreq?: number
) => {
  const ctx = getAudioContext();
  if (!ctx) return;
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = type;
  const start = startFreq || freq;
  oscillator.frequency.setValueAtTime(start, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(freq, ctx.currentTime + duration);

  gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
};

export const playCoinSound = () => playSound(880, 'sine', 0.1, 440);
export const playLevelUpSound = () => playSound(659.25, 'triangle', 0.4, 329.63);
export const playObstacleSound = () => playSound(110, 'square', 0.2);
export const playStartSound = () => playSound(523.25, 'sine', 0.3, 261.63);
export const playJumpSound = () => playSound(440, 'square', 0.05, 880);

export const playInternshipGetSound = () => playSound(1046.50, 'sine', 0.3, 523.25);
export const playHingeMatchSound = () => playSound(1244.51, 'triangle', 0.2);
export const playVroomSound = () => playSound(150, 'sawtooth', 0.5, 80);
export const playWeddingSound = () => playSound(1046.50, 'triangle', 0.8, 523.25);
export const playSrishtiSound = () => playSound(987.77, 'sine', 0.3, 783.99);

// --- Background Music ---

let musicScheduler: number | null = null;
let musicGainNode: GainNode | null = null;
let currentTrackIndex: number | null = null;

const C4 = 261.63;
const E4 = 329.63;
const F4 = 349.23;
const G4 = 392.00;
const A4 = 440.00;
const B4 = 493.88;
const C5 = 523.25;
const E5 = 659.25;

type Note = [number, number]; // [frequency, duration in beats]

const MUSIC_TRACKS: { tempo: number; notes: Note[] }[] = [
  // Upbeat Track 1
  { tempo: 135, notes: [[C4, 1], [E4, 1], [G4, 1], [C5, 1]] },
  // Upbeat Track 2
  { tempo: 135, notes: [[G4, 1], [A4, 1], [G4, 1], [E4, 1]] },
  // Upbeat Track 3
  { tempo: 135, notes: [[C5, 0.5], [B4, 0.5], [A4, 0.5], [G4, 0.5], [A4, 1], [B4, 1]] },
  // Upbeat Track 4
  { tempo: 135, notes: [[E4, 2], [G4, 2], [C5, 4]] },
  // Upbeat Track 5
  { tempo: 135, notes: [[C4, 1], [G4, 1], [C5, 1], [G4, 1]] },
  // Upbeat Track 6
  { tempo: 135, notes: [[A4, 1], [G4, 1], [F4, 1], [E4, 1]] },
  // Upbeat Track 7
  { tempo: 135, notes: [[C5, 2], [A4, 2], [F4, 4]] },
  // Upbeat Track 8
  { tempo: 135, notes: [[G4, 1], [C5, 1], [E5, 1], [C5, 1]] },
  // Upbeat Track 9
  { tempo: 135, notes: [[G4, 2], [C5, 2], [G4, 2], [E4, 2]] },
];

const playMusicSequence = (trackIndex: number) => {
  const ctx = getAudioContext();
  if (!ctx || !musicGainNode) return;

  const track = MUSIC_TRACKS[trackIndex % MUSIC_TRACKS.length];
  const beatDuration = 60 / track.tempo;
  let currentTime = ctx.currentTime;

  const playNote = (note: Note) => {
    const [freq, duration] = note;
    const osc = ctx.createOscillator();
    osc.connect(musicGainNode!);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, currentTime);
    osc.start(currentTime);
    osc.stop(currentTime + duration * beatDuration * 0.9); // 0.9 for staccato
  };
  
  track.notes.forEach(note => {
    playNote(note);
    currentTime += note[1] * beatDuration;
  });

  const loopDuration = currentTime - ctx.currentTime;
  musicScheduler = window.setTimeout(() => playMusicSequence(trackIndex), loopDuration * 1000);
};

export const changeMusic = (trackIndex: number) => {
  if (trackIndex === currentTrackIndex) return;
  
  const ctx = getAudioContext();
  if (!ctx) return;

  // Fade out current music if it's playing
  if (musicGainNode) {
    musicGainNode.gain.cancelScheduledValues(ctx.currentTime);
    musicGainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.0);
  }
  
  if (musicScheduler) {
    clearTimeout(musicScheduler);
    musicScheduler = null;
  }
  
  currentTrackIndex = trackIndex;

  setTimeout(() => {
    musicGainNode = ctx.createGain();
    musicGainNode.connect(ctx.destination);
    
    // Fade in
    musicGainNode.gain.setValueAtTime(0, ctx.currentTime);
    musicGainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 1.0); // Low volume for BGM

    playMusicSequence(trackIndex);
  }, 1000); // Start new music after fade-out
};

export const stopMusic = () => {
  const ctx = getAudioContext();
  if (!ctx || !musicGainNode) return;

  musicGainNode.gain.cancelScheduledValues(ctx.currentTime);
  musicGainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.0);
  
  if (musicScheduler) {
    clearTimeout(musicScheduler);
    musicScheduler = null;
  }
  
  musicGainNode = null;
  currentTrackIndex = null;
};