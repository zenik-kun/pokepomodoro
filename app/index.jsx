import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height:"100%" }}>
        
      </ScrollView>
      <StatusBar backgroundColor='#F42C1C' style='light' />
    </SafeAreaView>
  );
}


