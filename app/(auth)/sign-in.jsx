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
          <View className = "flex-row justify-center items-center">
            <Image source={images.logoSmall} resizeMode='contain' className="w-[75px]"/>

            <Text className="text-4xl text-black font-lsemibold">Notifi</Text>
          </View>
        
          <Text className="text-2xl text-black font-lsemibold">Log In</Text>

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
            <Text className = "text-lg text-black-100 font-lregular">
              Don't have an account?
            </Text>
            <Link href = "/sign-up" className = "text-lg text-primary font-lsemibold">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn