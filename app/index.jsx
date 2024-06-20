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
        <View className="w-full justify-center items-center h-full px-4 bg-sky">
          <View className = "flex-row justify-center items-center gap-1">
            {/* <Image source={images.logoSmall} resizeMode='contain' className="w-[75px]"/> */}
            <Text className="text-5xl text-gray-100 font-pokesolid py-5 pl-1">Poké</Text>
            <Text className="text-5xl text-black font-pokehollow py-5 pr-1">Pomodoro</Text>
          </View>

          

          <Image 
            source={images.logoSmall}
            className="max-w-[300px] w-full h-[200px]"
            resizeMode='contain'
          />

          <Text className="text-4xl mt-4 tracking-wider py-8 text-black text-center font-pokehollow">
              Focus and Catch 'em All!
          </Text>
          

          <CustomButton 
            title = "Continue with Email"
            handlePress = {() => router.push('/sign-in')}
            containerStyles="w-full"
          />

          <Link href="" className = "font-pokesolid p-4 text-xl tracking-widest">Skip</Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#F42C1C' style='light' />
    </SafeAreaView>
  );
}


