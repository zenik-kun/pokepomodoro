import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Audio } from 'expo-av';
import PomodoroTimer from '../components/PomodoroTimer';

export default function App() {
  NavigationBar.setBackgroundColorAsync('#6AA563')

  // useEffect(() => {
  //   const playMusic = async () => {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require('../assets/bg.mp3')
  //     )
  //     await sound.playAsync();
  //   };

  //   playMusic();

  //   return () => {
  //     sound.unloadAsync();
  //   }
  // }, []);

  return (
    <SafeAreaView className="h-full">
      <ImageBackground 
          source = {images.bg}
          resizeMode = "cover"
          className = "h-full z-0"
        >
        <ScrollView contentContainerStyle={{ height:"100%" }}>
          <PomodoroTimer />
          <Header />
        </ScrollView>
      </ImageBackground>
      <StatusBar backgroundColor='#79C9FA' style='light' />
    </SafeAreaView>
  );
}

