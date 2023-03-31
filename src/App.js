import React, { useState } from 'react';
import ElapsedTime from './components/ElapsedTime/ElapsedTime';
import Timer from './components/Timer/Timer';
import LapList from './components/LapList/LapList';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const saveLapData = (buttonName) => {
    setLaps((prevLaps) => [...prevLaps, { name: buttonName, time: elapsedTime }]);
    stopTimer();
    setElapsedTime(0)
  };

  return (
    <div>
      <ElapsedTime time={elapsedTime} />
      <Timer
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        saveLapData={saveLapData}
        buttonNames={['Button 1', 'Button 2', 'Button 3']}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
      />
      <LapList laps={laps} />
    </div>
  );
}

export default App;
