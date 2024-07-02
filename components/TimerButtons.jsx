import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const TimerButtons = ({ running, play, pause, reset }) => {
  return (
    <View className="flex-row justify-evenly">
      {running ? (
        <>
          <TouchableOpacity className="items-center justify-center px-6 py-2 border-4 border-white rounded-3xl" onPress={pause}>
            <Text className="text-white text-center text-4xl font-pokemon">Pause</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center px-6 py-2 border-4 border-white rounded-3xl" onPress={reset}>
            <Text className="text-white text-4xl font-pokemon">Reset</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity className="items-center justify-center px-6 py-2 border-4 border-white rounded-3xl" onPress={play}>
          <Text className="text-white text-4xl font-pokemon">Play</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TimerButtons;
