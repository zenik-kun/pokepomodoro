import { View, Text, ScrollView, Image } from 'react-native'  
import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, Redirect } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
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
          <View className = "flex-row justify-center items-center">
            <Image source={images.logoSmall} resizeMode='contain' className="w-[75px]"/>

            <Text className="text-4xl text-black font-lsemibold">Notifi</Text>
          </View>
        
          <Text className="text-2xl text-black font-lsemibold">Sign Up</Text>

          <FormField 
            title = "Username"
            placeholder = "Username"
            value = {form.username}
            handleChangeText = {(e) => setForm({ ...form, username: e})}
            otherStyles = "mt-7"
          />

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
            title = "Sign Up"
            handlePress = {submit}
            containerStyles = "mt-7"
            textStyles = ""
            isLoading = {isSubmitting}
          />

          <View className = "justify-center pt-5 flex-row gap-2">
            <Text className = "text-lg text-black-100 font-lregular">
              Have an account?
            </Text>
            <Link href = "/sign-in" className = "text-lg text-primary font-lsemibold">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp