import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from "../../constants"

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-lsemibold' : 'font-lregular'} text-xs` } style={{ color: color }}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#E05038",
          tabBarInactiveTintColor: "#555555",
          tabBarStyle: {
            backgroundColor: '#FFFEE0',
            borderTopWidth: 2, 
            borderTopColor: "#E05038",
            height: 84,

          }
        }}
      >
        <Tabs.Screen 
          name='chant'
          options={{
            title: 'Chant',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.chant}
                color={color}
                name="Chant"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='mantra'
          options={{
            title: 'Mantra',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.plus}
                color={color}
                name="Mantra"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout