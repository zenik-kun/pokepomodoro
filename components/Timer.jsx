import React, { useState, useEffect } from 'react';
import { View, Vibration } from 'react-native';
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import TimerButtons from './TimerButtons';

const Timer = ({ period, intervalType, Oncomplete }) => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(period * 60);

  useEffect(() => {
    setRunning(false);
    setTime(period * 60);
    if (running && time === 0) {
      handlePlay();
    }
  }, [period]);

  useEffect(() => {
    let timerId;
    if (running && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (running && time === 0) {
      clearInterval(timerId);
      Vibration.vibrate([500, 500, 500]);
      Oncomplete();
    } else {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [running, time]);

  const handlePlay = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(period * 60);
  };

  return (
    <View className="p-4">
      <TimerHeader running={running} intervalType={intervalType} />
      <TimerDisplay time={time} />
      <TimerButtons play={handlePlay} pause={handlePause} reset={handleReset} running={running} />
    </View>
  );
};

export default Timer;
