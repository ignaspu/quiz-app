import { useCallback } from 'react';
import { SoundType } from '../types';

const soundPaths: Record<SoundType, string> = {
  correct: '/sounds/correct.mp3',
  wrong: '/sounds/wrong.mp3',
  click: '/sounds/click.mp3',
};

const useSound = () => {
  const playSound = useCallback((type: SoundType) => {
    const audio = new Audio(soundPaths[type]);
    audio.volume = 0.3;
    audio.play();
  }, []);

  return { playSound };
};

export default useSound;
