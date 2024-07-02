import { View, Text, Platform } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className = "items-center">
        <Text className = "text-5xl text-grass-100 font-pokemon">PokéPomo</Text>
    </View>
  )
}
export default Header