import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput'
import CustomButton from '../../component/CustomButton'
import SocialSigninButtons from '../../component/SocialSigninButtons';

const onConfirmEmailButton = () => {
  console.warn('onConfirmEmailButton')
}

const onResendCodeButton = () => {
  console.warn('onResendCodeButton')
}

const onBackToSigninButton  = () => {
  console.warn('onBackToSigninButton')
}


const Confirmemail = () => {
  const [code, setCode] = useState('');

  const {height} = useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.singinWrapper}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
            placeholder='Enter code here'
            value={code}
            setValue={setCode}
        />
        
        <CustomButton
            onPress={onConfirmEmailButton}
            text='Confirm'
            type="PRIMARY"
        />

        <CustomButton
            onPress={onResendCodeButton}
            text="Resend code"
            type="SECONDARY"
        />
        <CustomButton
            onPress={onBackToSigninButton}
            text="Back to sign-in"
            type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

export default Confirmemail

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
  },
  singinWrapper:{
    backgroundColor:'#f1f1f1',
    width:'100%',
    minHeight:'100%',
    flex:1,
    alignItems:'center',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    color:'#4f4b41',
    margin: 10,
    marginTop:100,
  },
  text:{
    color:'gray',
    marginVertical:10,
    width:'90%'
  },
  link: {
    color:"#FDB075"
  }
})