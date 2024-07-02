import React from 'react';
import { Text, View } from 'react-native';

const TimerDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <View className="mb-10 border-4 border-white rounded-3xl items-center">
      <Text className="text-white text-8xl font-pokemon">
        {minutes}:{seconds}
      </Text>
    </View>
  );
};

export default TimerDisplay;
