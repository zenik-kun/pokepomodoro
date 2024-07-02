import { SplashScreen, Stack } from 'expo-router'
import React from 'react'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "pokemon": require("../assets/fonts/pokemon.ttf")
  });

  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout