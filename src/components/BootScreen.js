import React, { useState, useEffect } from 'react';
import './BootScreen.css';

const BootScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const bootText = [
    "Loading system files...",
    "Booting up...",
    "Checking memory...",
    "Starting services...",
    "boot complete."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 250);

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= bootText.length) {
          clearInterval(textInterval);
        }
        return newIndex;
      });
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [bootText.length]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        onComplete();
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-text">
        {bootText.slice(0, textIndex).map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default BootScreen;
