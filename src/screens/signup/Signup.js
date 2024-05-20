import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../component/CustomInput'
import CustomButton from '../../component/CustomButton'
import SocialSigninButtons from '../../component/SocialSigninButtons';
import axios from 'axios';
import MyURL from '../../component/Url';
const URL_ALL = 'http://192.168.100.25:4000/api/v1/tasks/'

import icons8multiply24 from '../../../assets/icons8multiply24.png'
import { useNavigation } from '@react-navigation/native';

const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

const termsOfUse  = () => {
  console.warn('termsofuse')
}

const privacyPolicy = () => {
  console.warn('privacyPolicy')
}

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {height} = useWindowDimensions();

  const [usernameValidate, setUsernameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [phoneValidate, setPhoneValidate] = useState(false);
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();
  const onCreateAccountButton = () => {
    navigation.navigate('Signin')
  }
  const onRegisterButton = () => {
    setLoader(true);
    const formdata = {
      name: username,
      email,
      phone,
      password,
      setup: false
    }; 
    if(usernameValidate && phoneValidate && emailValidate) {
      try {
        axios
        .post(MyURL.URL_USER_REGISTER +email, formdata)
        .then(res => {
          //console.log(res.data)
          if (res.data.status == 200) {
            Alert.alert(res.data.msg);
            navigation.navigate('Signin');
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
        Alert.alert('Something went wrong try again');
        setLoader(false)
      }
    } else {
      Alert.alert('Fill in details first');
      setLoader(false)
    }
    
  }

  useEffect(()=> {
    console.log('..........NEW..LOAD...SIGNUP.......');
    let regUsername = /^[\w\d]{4,25}$/;
    if (regUsername.test(username) === false) { 
      setUsernameValidate(false);
    } else {
      setUsernameValidate(true);
    }
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (regEmail.test(email) === false) { 
      setEmailValidate(false);
    } else {
      setEmailValidate(true);
    }
    let regPhone = /^[0]?\d{9}$/;
    if (regPhone.test(phone) === false) { 
      setPhoneValidate(false);
    } else {
      setPhoneValidate(true);
    }
  },[username,phone,email])
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.loaderWrapper,loader ? {zIndex:5} : {zIndex:-1}]}>
        <ActivityIndicator size="large" color={primaryColorLight} />
        <Text style={{color:'#000',marginLeft:3}}>Loading...</Text>
      </View>
      <View style={styles.singinWrapper}>
        <Text style={[styles.title, {color:primaryColorDark}]}>Create an account</Text>
        <Text style={styles.message}>
           {errorMessage} 
        </Text>
        <View style={styles.containerInput}>
          <TextInput style={styles.input}
            placeholder='Username'
            placeholderTextColor={'#000'}
            value={username}
            onChange={e => setUsername(e.nativeEvent.text)}
          />
          { 
            usernameValidate && username != '' || usernameValidate == false && username == '' ? <></>
            :<Image style={styles.xerror} source={icons8multiply24}/>
          }
        </View>
        
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
            placeholder='Phone'
            placeholderTextColor={'#000'}
            value={phone}
            onChange={e => setPhone(e.nativeEvent.text)}
          />
          { 
            phoneValidate && phone != '' || phoneValidate == false && phone == '' ? <></>
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

        <View style={styles.containerInput}>
          <TextInput style={styles.input}
            placeholder='Repeat Password'
            placeholderTextColor={'#000'}
            value={passwordRepeat}
            onChange={e => setPasswordRepeat(e.nativeEvent.text)}
            secureTextEntry={true}
          />
          { 
            password == passwordRepeat || passwordRepeat == '' ? <></>
            :<Image style={styles.xerror} source={icons8multiply24}/>
          }
        </View>
      
        <CustomButton
            onPress={onRegisterButton}
            text='Register'
            type="PRIMARY"
        />
        <Text style={styles.text}> 
          By registering, you confirm that you accept our  {' '}
          <Text style={styles.link} onPress={termsOfUse}>Terms of Use</Text>  and {' '}
          <Text style={styles.link} onPress={privacyPolicy}>Privacy Policy</Text>
        </Text>
        
        <SocialSigninButtons/>

        <CustomButton
            onPress={onCreateAccountButton}
            text="Have an account? Sign-in"
            type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
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
    backgroundColor:'#fff9'
  },
  singinWrapper:{
    backgroundColor:'#f1f1f1',
    width:'100%',
    minHeight:'100%',
    flex:1,
    alignItems:'center',
  },
  title:{
    fontSize:28,
    fontWeight: 'bold',
    color:'#2f2b21',
    margin: 10,
    marginTop:30,
    marginBottom:5,
  },
  message:{
    height:30,
    width:'90%',
    color:'#ee1212',
    fontSize:20,
  },
  text:{
    color:'gray',
    marginVertical:10,
    width:'90%',
    marginBottom:20,
  },
  link: {
    color:primaryColor
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
  }
})