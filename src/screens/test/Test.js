import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import email from 'react-native-email'
const Test = () => {
  const [subject, setSubject] = useState('Test Email');
  const [body, setBody] = useState('This is a test email sent from React Native.');

  // const sendEmail = () => {
  //   const email = 'sheanesujoseph@gmail.com';
  //   const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
  //   Linking.openURL(mailto);
  //   console.log('Email sent')
  // };

  const handleEmail = () => {
    console.log('WERTY')
    const to = ['sheanesujoseph@gmail.com', 'josephbamusi15@gmail.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        // bcc: 'mee@mee.com', // string or array of email addresses
        subject: subject,
        body: body,
        checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error)
  }
  return (
    <View>
      <Text>Test</Text>
      <TouchableOpacity onPress={handleEmail}>
        <Text style={{color:'#000'}}>Click me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})