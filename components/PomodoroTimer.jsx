import React, { useState, useEffect } from 'react';
import { Platform, Text, View, TextInput, Alert } from 'react-native';
import Timer from './Timer';

const PomodoroTimer = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [intervalType, setIntervalType] = useState('Working');

  // handles completion of timer
  const handleTimerCompleted = () => {
    setIntervalType((prevType) => (prevType === 'Working' ? 'Break' : 'Working'));
  };

  // gets triggered on change of work time text
  const handleWorkTime = (text) => {
    const time = parseInt(text, 10);
    if (time >= 0) {
      setWorkTime(time);
    } else {
      Alert.alert('Time invalid. Setting value to default. Please enter valid time');
      setWorkTime(25);
    }
  };

  // gets triggered on change of break time text
  const handleBreakTime = (text) => {
    const time = parseInt(text, 10);
    if (time >= 0) {
      setBreakTime(time);
    } else {
      Alert.alert('Time invalid. Setting value to default. Please enter valid time');
      setBreakTime(5);
    }
  };

  // called to set the timer's time
  const handleTime = () => {
    return intervalType === 'Working' ? workTime : breakTime;
  };

  const time = handleTime();

  return (
    <View className = "flex-1">   
      <View className = "flex-row">
        <View className = "flex-1 mb-2">
          <Text className = "text-4xl font-pokemon text-center text-white tracking-wider px-5">Work Time</Text>
          <TextInput
            className = "text-4xl text-center font-pokemon text-white tracking-wider px-5"
            keyboardType="numeric"
            defaultValue={`${workTime}`}
            placeholder="workTime in mins"
            onChangeText={handleWorkTime}
          />
        </View>
        <View className = "flex-1 mb-2">
          <Text className = "text-4xl font-pokemon text-center text-white tracking-wider px-5">Break Time</Text>
          <TextInput
            className = "text-4xl font-pokemon text-center text-white tracking-wider px-5"
            keyboardType="numeric"
            defaultValue={`${breakTime}`}
            placeholder="breakTime in mins"
            onChangeText={handleBreakTime}
          />
        </View>
      </View>
      <Timer intervalType={intervalType} Oncomplete={handleTimerCompleted} period={time} />
    </View>
  );
};

export default PomodoroTimer;
