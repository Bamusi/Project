import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const SigninWithGoogle = () => {
    console.warn('SigninWithGoogle')
  }
  
  const SigninWithApple = () => {
    console.warn('SigninWithApple')
  }
const PlaformIOS = Platform.OS === 'ios';
const PlaformaAndroid = Platform.OS === 'android';

export default function SocialSigninButtons() {
  return (
    <>
      {PlaformaAndroid && <CustomButton
            onPress={SigninWithGoogle}
            text='Signin with google'
            type="PRIMARY"
            bgColor="#f8ceca"
            fgColor="#dd4d44"
            icon="google"
        />}
        {PlaformIOS && <CustomButton
            onPress={SigninWithApple}
            text='Signin with Apple'
            type="PRIMARY"
            bgColor="#e3e3e3"
            fgColor="#363636"
            icon="apple"
        />}
    </>
  )
}

const styles = StyleSheet.create({})