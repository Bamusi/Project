import { ActivityIndicator, Button, FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import {Avatar} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import iconcamera from '../../../assets/camera.png'
import axios from 'axios';
import Toast from 'react-native-toast-message';
import edituser48 from '../../../assets/edituser48.png'

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import MyURL from '../../component/Url';
import AsyncStorage from '@react-native-async-storage/async-storage'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

const imageMaxHeight = 800;
const imageMaxWidth = 600;

const options = {
  title:'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  },
} 


const updateProfile = () => {
  console.warn('CLicked')
}

const ViewProfile = ({route}) => {
  //const { productId} = route.params
  const navigation = useNavigation();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC');
  const [gender, setGender] = useState('');
  const [imagebase64, setBase64Image] = useState('');
  const [loader, setLoader] = useState(true);

  const selectPhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
      avoidEmptySpaceAroundImage: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      //console.log(image);
      const data = `data:${image.mime};base64,${image.data}`;
      setBase64Image(data);
      console.log('123456789');
      reduceImageSize(imagebase64, imageMaxWidth, imageMaxHeight);
      console.log('ert')
      //setImage(data);
    });
  };
 

 
  // const reduceImageSize = async (imagebase64, imageMaxWidth, imageMaxHeight) => {
  //   return new Promise((resolve, reject) => {
  //     const canvas = document.createElement('canvas');
  //     const ctx = canvas.getContext('2d');
  
  //     const imageData = base64Image.split(',')[1]; // Remove data:image/png;base64,
  //     const imgBuffer = Buffer.from(imageData, 'base64');
  
  //     let width = 0;
  //     let height = 0;
  
  //     // Get image dimensions
  //     const imgDims = get_image_dimensions(imgBuffer);
  //     width = imgDims.width;
  //     height = imgDims.height;

  //     if (width > maxWidth || height > maxHeight) {
  //       const aspectRatio = width / height;
  //       if (width > maxWidth) {
  //         height = Math.floor(maxWidth / aspectRatio);
  //         width = maxWidth;
  //       } else if (height > maxHeight) {
  //         width = Math.floor(maxHeight * aspectRatio);
  //         height = maxHeight;
  //       }
  //     }

  //     canvas.width = width;
  //     canvas.height = height;
  //     ctx.drawImage(imgBuffer, 0, 0, width, height);

  //     const reducedImage = canvas.toBuffer();
  //     const reducedBase64 = reducedImage.toString('base64');

  //     console.log('Reduced');
  //     console.log(reducedBase64.length);
  //     setBase64Image(reducedBase64)
  //     resolve(reducedBase64);
  //   });
  // };

  // // Helper function to get image dimensions
  // function get_image_dimensions(imgBuffer) {
  // const image = {};
  // const chunks = imgBuffer.toString('base64').split(';');
  // const meta = chunks[0].split(',');

  // if (meta[0].includes('width')) {
  //   image.width = parseInt(meta[0].split('=')[1]);
  // }
  // if (meta[1].includes('height')) {
  //   image.height = parseInt(meta[1].split('=')[1]);
  // }

  // return image;
  // }


  const {height,width} = useWindowDimensions();
  let isGettingData = false;
  const getData = async () => {
    if(isGettingData) return;
    isGettingData = true;
    const token1 = await AsyncStorage.getItem('token');
    console.log(token1);
    
    try {
       axios
      .post(MyURL.URL_ALL_USER, {token:token1})
      .then(res => {
        //console.log(res.data)
        setEmail(res.data.data.email)
        setUsername(res.data.data.name)
        setUserId(res.data.data._id)
        setGender(res.data.data.gender)
        setPhone(res.data.data.phone)
        if(image != '') {
          setImage(res.data.data.image)
        }
        setLoader(false)
        isGettingData = false;
      })
      .catch(error => {
        console.log({'Error':error})
        isGettingData = false;
      })
    } catch (error) {
      console.log(error);
      isGettingData = false;
    }  
  }
  
  useEffect(() => {
    console.log('..........NEW..LOAD...VIEW.PROFILE......');
    getData();
  },[])
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerTitle}>
        <Text style={styles.title}>Profile Information</Text>
      </View>

      <View style={styles.imageWrapper}>
       <View style={[styles.imageContent,{width:width*0.43, height:width*0.43}]}>
        <Image        
          source={{
            uri:image}}
          style={[styles.profileImage, {width:width*0.4, height:width*0.4}]}
          resizeMode='cover'
        />
       </View> 
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Username</Text>
        <View style={[styles.input, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={styles.radioText}>{username}</Text>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={[styles.input, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={styles.radioText}>{email}</Text>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Gender</Text>
        <View style={[styles.input, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={styles.radioText}>{gender}</Text>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Phone</Text>
        <View style={[styles.input, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={styles.radioText}>{phone}</Text>
        </View>
      </View>
 
      <View style={styles.buttonWr}>
        <TouchableOpacity
          onPress={() => navigation.push('Profile', {
            Id:userId
          })}
          style={styles.inBut}>
          <View>
            <Image source={edituser48}
               style={{width:35,height:35}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.backWr}>
        <TouchableOpacity
          onPress={() => navigation.push('Home')}
          style={styles.inBtnWr}>
          <View>
            <FontAwesome name='angle-left' size={35} color={'#fff'} />
          </View>
        </TouchableOpacity>
      </View>
      {loader && <View style={[styles.loaderWrapper,{height:height}]}>
        <ActivityIndicator size="large" color={primaryColorLight} />
        <Text style={{color:'#000',marginLeft:3}}>Loading...</Text>
      </View>}
    </ScrollView>
  )
}

export default ViewProfile

const styles = StyleSheet.create({
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
  headerTitle: {
    maxHeight:60,
    height:60,
    backgroundColor:primaryColorLight,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    color:'#fff',
    fontSize:24,
    fontWeight:'600'
  },
  imageWrapper:{
    marginVertical:20,
    height:200,
    maxHeight:200,
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden'
  },
  imageContent:{
    position:'relative',
    maxWidthwidth:200,
    maxHeight:200,
    borderRadius:200,
    backgroundColor:'#e4e4e4',
    borderColor:'#ddd',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
  },
  profileImage:{
    width:170,
    height:170,
    borderRadius:170,
    backgroundColor:'#FFF',
  },
  cameraIconWr:{
    position:'absolute',
    bottom:10,
    right:10,
  },
  cameraIcon: {
    position:'absolute',
    maxHeight:40,
    maxWidth:40,
    backgroundColor:'#fff',
    borderRadius:4,
  },
  inputWrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    padding:10,
  },  
  inputLabel:{
    color:'gray',
    fontSize:16,
    height:40,
    padding:10,
  },
  input:{
    width:270,
    height:40,
    backgroundColor:'#fff',
    paddingHorizontal: 15,
    borderRadius:5,
  },
  buttonWr: {
    flex:1,
    zIndex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    position:'absolute',
    top:15,
    right:20,
    borderRadius:35,
  },
  inBut: {
    alignItems: 'center',
    borderRadius: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    color: 'black',
    fontSize: 15,
  },
  backWr: {
    flex:1,
    zIndex:1,
    justifyContent:'center',
    alignItems:'center',
   
    position:'absolute',
    top:10,
    left:20,
    borderRadius:35,
  },
  inBtnWr: {
    alignItems: 'center',
    borderRadius: 50,
  },
})