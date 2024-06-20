import { View, Text, ScrollView, Image } from 'react-native'  
import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <View className = "flex-row justify-center items-center gap-1">
            {/* <Image source={images.logoSmall} resizeMode='contain' className="w-[75px]"/> */}
            <Text className="text-5xl text-pokered font-pokesolid py-5 pl-1">Poké</Text>
            <Text className="text-5xl text-black font-pokehollow py-5 pr-1">Pomodoro</Text>
            
          </View>

          <Text className="text-2xl text-black tracking-[2px] pb-4 text-center font-pokesolid">Log In</Text>
          
          <FormField 
            title = "Email"
            placeholder = "Email"
            value = {form.email}
            handleChangeText = {(e) => setForm({ ...form, email: e})}
            otherStyles = "mt-7"
            keyboardType = "email-address"
          />

          <FormField 
            title = "Password"
            placeholder = "Password"
            value = {form.password}
            handleChangeText = {(e) => setForm({ ...form, password: e})}
            otherStyles = "mt-7"
          />
          
          <CustomButton 
            title = "Sign In"
            handlePress = {submit}
            containerStyles = "mt-7"
            textStyles = ""
            isLoading = {isSubmitting}
          />

          <View className = "justify-center pt-5 flex-row gap-2">
            <Text className = "text-lg text-black-100 font-pokesolid tracking-[1px]">
              Don't have an account?
            </Text>
            <Link href = "/sign-up" className = "text-lg text-pokered font-pokesolid tracking-[1px]">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn