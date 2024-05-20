import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CustomInput(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
         placeholder={props.placeholder}
         value={props.value}
         secureTextEntry={props.secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
        marginVertical:10,
        width:'90%',
        maxWidth:500,
    },
    input:{
        backgroundColor:'#FFF',
        color:'#333',
        height:50,
        paddingHorizontal:15,
        borderRadius:5,
    },
})