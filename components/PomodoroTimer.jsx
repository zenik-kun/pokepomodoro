import React, { useState, useEffect } from 'react';
import { Platform, Text, View, TextInput, Alert } from 'react-native';
import Timer from './Timer';

const PomodoroTimer = () => {
  const [workTime, setWorkTime] = useState(50);
  const [breakTime, setBreakTime] = useState(10);
  const [intervalType, setIntervalType] = useState('Working');
  const [isCompleted, setIsCompleted] = useState(false)

  // handles completion of timer
  const handleTimerCompleted = () => {
    setIsCompleted(true)
  };

  // gets triggered on change of work time text
  const handleWorkTime = (text) => {
    const time = parseInt(text, 10);
    if (time >= 0) {
      setWorkTime(time);
    }
  };

  // gets triggered on change of break time text
  const handleBreakTime = (text) => {
    const time = parseInt(text, 10);
    if (time >= 0) {
      setBreakTime(time);
    }
  };

  // called to set the timer's time
  const handleTime = () => {
    return intervalType === 'Working' ? workTime : breakTime;
  };

  const time = handleTime();

  return (
    <View className = "flex-1 mt-5">   
      <View className = "flex-row">
        <View className = "flex-1">
          <Text className = "text-4xl font-pokemon text-center text-white tracking-wider px-5">Work Time</Text>
          <TextInput
            className = "text-4xl text-center font-pokemon text-white tracking-wider py-1 px-5 border-b-2 border-white mx-10"
            keyboardType="numeric"
            defaultValue={`${workTime}`}
            placeholder="Work time"
            onChangeText={handleWorkTime}
          />
        </View>
        <View className = "flex-1">
          <Text className = "text-4xl font-pokemon text-center text-white tracking-wider px-5">Break Time</Text>
          <TextInput
            className = "text-4xl font-pokemon text-center text-white tracking-wider py-1 px-5 mx-10 border-b-2 border-white"
            keyboardType="numeric"
            defaultValue={`${breakTime}`}
            placeholder="Break time"
            onChangeText={handleBreakTime}
          />
        </View>
      </View>
      <Timer intervalType={intervalType} Oncomplete={handleTimerCompleted} period={time} isCompleted={isCompleted} setIsCompleted={setIsCompleted} setIntervalType={setIntervalType}/>
    </View>
  );
};

export default PomodoroTimer;
