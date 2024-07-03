import React, { useState, useEffect } from 'react';
import { View, Vibration } from 'react-native';
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import TimerButtons from './TimerButtons';

const Timer = ({ period, intervalType, Oncomplete, isCompleted, setIsCompleted, setIntervalType }) => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(period * 60);

  useEffect(() => {
    setRunning(false);
    setTime(period * 60);
    setIsCompleted(false)
  }, [period]);

  useEffect(() => {
    let timerId;
    if (running && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (running && time === 0) {
      clearInterval(timerId);
      Vibration.vibrate([1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500]);
      Oncomplete();
      setRunning(false);

      // Transition to the next interval type
      if (intervalType === 'Working') {
        setIntervalType('Break');
      } else {
        setIntervalType('Working');
      }
      setTime(period * 60);
    } else {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [running, time]);

  const handlePlay = () => {
    if (isCompleted) {
      // Timer is complete and we are transitioning to the next interval
      setIsCompleted(false);
    }
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
