import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import React from 'react';
import Header from '../components/Header';

export default function App() {
  NavigationBar.setBackgroundColorAsync('#6AA563')

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height:"100%" }}>
        <ImageBackground
          source = {images.bg}
          resizeMode = "cover"
          className = "h-full"
        />
        <Header/>
        {/* more components */}
      </ScrollView>
      <StatusBar backgroundColor='#79C9FA' style='light' />
    </SafeAreaView>
  );
}


