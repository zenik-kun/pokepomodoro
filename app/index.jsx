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
        <View className="w-full justify-center items-center h-full px-4">
          <View className = "flex-row justify-center items-center">
            <Image source={images.logoSmall} resizeMode='contain' className="w-[75px]"/>
            <Text className="text-5xl text-black font-lmedium py-1">Notifi</Text>
          </View>

          <Image 
            source={images.cards}
            className="max-w-[300px] w-full h-[200px]"
            resizeMode='contain'
          />

          <View className="mt-5">
            <Text className="text-3xl text-black text-center font-lsemibold">
              Remind yourself through <Text className="text-primary">Notifi</Text>
            </Text>

          </View>

          <CustomButton 
            title = "Continue with Email"
            handlePress = {() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#EAA0A2' style='light' />
    </SafeAreaView>
  );
}


