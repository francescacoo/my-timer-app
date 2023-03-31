import React, { useState, useEffect } from 'react';

function Timer(props) {
  const { isRunning, startTimer, stopTimer, saveLapData, buttonNames, elapsedTime, setElapsedTime } = props;

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, setElapsedTime]);

  const handleButtonClick = (buttonName) => {
    if (isRunning) {
      saveLapData(buttonName);
    } else {
      startTimer();
    }
  };

  return (
    <div>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} onClick={() => handleButtonClick(buttonName)}>
          {isRunning ? 'Stop' : 'Start'} {buttonName}
        </button>
      ))}
    </div>
  );
}

export default Timer;
