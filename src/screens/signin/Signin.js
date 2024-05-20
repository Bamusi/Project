import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../component/CustomButton'
import logo_tb from '../../../assets/logo_tb.png';
import SocialSigninButtons from '../../component/SocialSigninButtons';
import icons8multiply24 from '../../../assets/icons8multiply24.png'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

import MyURL from '../../component/Url';
const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

const ForgotPasswordButton = () => {
  console.warn('ForgotPasswordButton')
}

const SigninWithGoogle = () => {
  console.warn('SigninWithGoogle')
}

const SigninWithApple = () => {
  console.warn('SigninWithApple')
}

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const {height} = useWindowDimensions();
  const [loader, setLoader] = useState(true);
  const navigation = useNavigation();
  const onCreateAccountButton = () => {
    navigation.navigate('Signup');
  }

  setTimeout(()=>{
    setLoader(false);
  },5000)

  const SigninButton = () => {
    setLoader(true);
    const formdata = {email,password}; 
    console.log(MyURL.URL_ALL_Login);
    if(passwordValidate && emailValidate) {
      console.log(email)
      try {
        axios
        .post(MyURL.URL_ALL_Login + email, formdata)
        .then(res => {
          //console.log(res.data)
          if (res.data.status == 200) {
            console.log(res.data)
            Alert.alert(res.data.msg);
            AsyncStorage.setItem("token",res.data.data);
            AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
            if (res.data.setup == false) {
              navigation.navigate('Home');
            } else {
              navigation.navigate('Home');
            }
          }
          if (res.data.status == 0) {
            Alert.alert(res.data.msg);
          }
          setLoader(false);
        }).catch(error => {
          console.log(error);
          console.log('error');
          setLoader(false)
        });
        
      } catch (error) {
        Alert.alert('Something went wrong, try again');
        setLoader(false)
      }
    } else {
      Alert.alert('Fill in valid details');
      setLoader(false)
    }
  }
  useEffect(() => { 
    console.log('..........NEW..LOAD...LOGIN.......');
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (regEmail.test(email) === false) { 
      setEmailValidate(false);
    } else {
      setEmailValidate(true);
    }
  },[email])

  useEffect(() => { 
    if (password == '') { 
      setPasswordValidate(false);
    } else {
      setPasswordValidate(true);
    }
  },[password])
  const goHome = ()=> {
    navigation.navigate('Home')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.loaderWrapper,loader ? {zIndex:5} : {zIndex:-1}]}>
        <ActivityIndicator size="large" color={primaryColorLight} />
        <Text style={{color:'#000',marginLeft:3}}>Loading...</Text>
      </View>
      <View style={styles.singinWrapper}>
        <Image  
          source={logo_tb}
          style={[styles.logo, {height: height* 0.3}]}
          resizeMode='contain'
        />
        <View style={styles.containerInput}>
          <TextInput style={styles.input}
            placeholder='Email'
            placeholderTextColor={'#000'}
            value={email}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
          { 
            emailValidate && email != '' || emailValidate == false && email == '' ? <></>
            :<Image style={styles.xerror} source={icons8multiply24}/>
          }
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.input}
            placeholder='Password'
            placeholderTextColor={'#000'}
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
            secureTextEntry={true}
          />
        </View>
        <CustomButton
            onPress={SigninButton}
            text='Sign In'
            type="PRIMARY"
        />
        <CustomButton
            onPress={ForgotPasswordButton}
            text='Forgot password?'
            type="TERTIARY"
        />
        <View style={styles.marginTop20}></View>
        <SocialSigninButtons/>
        <View style={styles.marginTop20}></View>
          <CustomButton
              onPress={onCreateAccountButton}
              text="Don't have an account? Create account"
              type="TERTIARY"
          />
          <TouchableOpacity onPress={goHome}>
           <Text>click me</Text> 
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Signin

const styles = StyleSheet.create({
  singinWrapper:{
    backgroundColor:'#f1f1f1',
    width:'100%',
    minHeight:'100%',
    flex:1,
    alignItems:'center'
  },
  loaderWrapper:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  logo:{
    width:'80%',
    maxWidth:300,
    maxHeight:200,
    marginTop:20,
    marginBottom:10,
  },
  marginTop20:{
    marginTop:20,
  },
  containerInput:{
    marginHorizontal:15,
    marginVertical:10,
    width:'90%',
    maxWidth:500,
    position:'relative',
  },
  input:{
    backgroundColor:'#FFF',
    color:'#000',
    height:50,
    paddingHorizontal:15,
    borderRadius:5,
    fontSize:16,
  },
  xerror:{
    position:'absolute',
    right:10,
    top:10,
  },
})