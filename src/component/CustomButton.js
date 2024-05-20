import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import google from '../../assets/google-icon.png';
import apple from '../../assets/apple-logo.png';

const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

export default function CustomButton(props) {
  return (
    <Pressable 
      onPress={props.onPress} 
      style={[
        styles.container, 
        styles[`container_${props.type}`],
        props.bgColor ? {backgroundColor: props.bgColor} : {},
      ]}
    >
      {
      props.icon && 
      <Image
         style={styles.icon}
         source={props.icon == 'google'? google: apple}
         resizeMode='contain'
      />
      }
      <Text style={[
        styles.text, 
        styles[`text_${props.type}`],
        props.fgColor ? {color: props.fgColor} : {},
        ]}>{props.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height:45,
    maxHeight:50,
    maxWidth: 500,
    padding: 15,
    paddingVertical:10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical:10,
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
  },
  icon: {
    marginRight:10,
    width:30,
    height:30,
  },
  container_PRIMARY: {
    backgroundColor:primaryColor,
  },
  container_SECONDARY: {
    borderColor:secondaryColor,
    borderWidth:1,
  },
  container_TERTIARY: {
  },
  text: {
    fontWeight: '500',
    color: '#FFF'
  },
  text_SECONDARY: {
    fontWeight: '500',
    color: primaryColorDark,
  },
  text_TERTIARY: {
    fontWeight: '500',
    color: 'gray'
  }
})