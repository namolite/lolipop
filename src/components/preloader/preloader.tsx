import React, { useState, useEffect } from 'react';
import { LoaderProps } from '@/utils/interfaces'


const Preloader: React.FC<LoaderProps> = ({ setLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    // increase per 300ms
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setFadeout(true)
          setTimeout(() => setLoadingComplete(true), 500)
          return 100
        }
        return Math.min(oldProgress + Math.floor(Math.random() * 30), 100);
      });
    }, 250);
    // Clear timer when component unmount.
    return () => {
      clearInterval(timer);
    };
  }, [setLoadingComplete]);

  return (
    <div className={fadeout ? 'loader loader-fadeout' : 'loader'}>
      <div className="loader-logo block">
        <img className="loader-logo-inner" src="./img/pixel/sheep_usual.png" />
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Preloader
