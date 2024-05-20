import 'react-native-gesture-handler';
import { Animated, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//screens
import Home from './screens/home/Home';
import Signin from './screens/signin/Signin';
import Signup from './screens/signup/Signup';
import Confirmemail from './screens/confirmemail/Confirmemail';
import ForgotPassword from './screens/forgotpassword/ForgotPassword';
import ResetPassword from './screens/resetpassword/ResetPassword';
import Profile from './screens/profile/Profile';
import ViewProfile from './screens/viewprofile/ViewProfile';
import MapPage from './screens/google-maps/Maps';
import MapArea from './screens/mapsbox/MapsComponent';
//import MapBoxPage from './screens/mapbox/MapBoxPage';
import Startup from './screens/startup/Startup';
import SetupAccount from './screens/setupaccount/SetupAccount';

import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
//import icons8menubar50 from '../assets/icons8menubar50.png'
//import icons8menu50White from '../assets/icons8-menu-50.png'
import Test from './screens/test/Test'
import SplashScreen from 'react-native-splash-screen';

const StackNav = ()=> {
  const Stack = createNativeStackNavigator();
  return (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
    {/* <Stack.Screen name="MapBoxPage" component={MapBoxPage} /> */}
    
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Test" component={ Test} /> 
    <Stack.Screen name="Signup" component={ Signup} />
    <Stack.Screen name="SetupAccount" component={SetupAccount} />
    <Stack.Screen name="MapPage" component={MapPage} />
    <Stack.Screen name="Profile" component={Profile} /> 
    <Stack.Screen name="ViewProfile" component={ViewProfile} />
    <Stack.Screen name="Startup" component={Startup} />
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="MapArea" component={MapArea} />
    
    {
    // done
    }
    <Stack.Screen name="ResetPassword" component={ ResetPassword} />
    <Stack.Screen name="ForgotPassword" component={ ForgotPassword} /> 
    <Stack.Screen name="Confirmemail" component={ Confirmemail} />
  </Stack.Navigator>
  )
}

const StackNavSignin = ()=> {
  const Stack = createNativeStackNavigator();
  return (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Signin'>
    {/* <Stack.Screen name="MapBoxPage" component={MapBoxPage} /> * Signin/}
    {/* <Stack.Screen name="Signin" component={Signin} /> */}
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Test" component={ Test} />
    <Stack.Screen name="Home" component={Home} /> 
    <Stack.Screen name="Signup" component={ Signup} />
    <Stack.Screen name="SetupAccount" component={SetupAccount} />
    <Stack.Screen name="MapPage" component={MapPage} />
    <Stack.Screen name="Profile" component={Profile} /> 
    <Stack.Screen name="ViewProfile" component={ViewProfile} />
    <Stack.Screen name="Startup" component={Startup} />
    <Stack.Screen name="MapArea" component={MapArea} />
    {
    // done
    }
    <Stack.Screen name="ResetPassword" component={ ResetPassword} />
    <Stack.Screen name="ForgotPassword" component={ ForgotPassword} /> 
    <Stack.Screen name="Confirmemail" component={ Confirmemail} />
  </Stack.Navigator>
  )
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPage, setIsPage] = useState('Signin');
  const getData = async () => {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log(data);
    if(data == null || data == 'false') {
      setIsLoggedIn(false);
      setIsPage('Signin');
    } else {
      setIsLoggedIn(true);
      setIsPage('Home');
    }
    
  }

  useEffect(() => {
    getData()
    setTimeout(() => {
      SplashScreen.hide();
    }, 900)
  },[])
  return (
    <NavigationContainer>
      {isLoggedIn?<StackNav/>:<StackNavSignin/>}
    </NavigationContainer>   
  )
}

const styles = StyleSheet.create({
  
})

export default App


