import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const TimerButtons = ({ running, play, pause, reset }) => {
  return (
    <View className="flex-row justify-evenly">
      {running ? (
        <>
          <TouchableOpacity className="items-center justify-center px-4 py-1 border-4 bg-white border-white rounded-3xl" onPress={pause}>
            <Text className="text-sky text-4xl font-pokemon">Pause</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center px-4 py-1 border-4 bg-white border-white rounded-3xl" onPress={reset}>
            <Text className="text-sky text-4xl font-pokemon">Reset</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity className="items-center justify-center px-4 py-1 border-4 bg-white border-white rounded-3xl" onPress={play}>
          <Text className="text-sky text-4xl font-pokemon">Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TimerButtons;
