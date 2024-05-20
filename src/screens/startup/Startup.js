import { Animated, Button, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {useNavigation} from '@react-navigation/native'
//images 
import pexel1 from '../../../assets/images/pexels1.png'
import pexel2 from '../../../assets/images/pexels2.png'
import pexel3 from '../../../assets/images/pexels3.png'
import pexel4 from '../../../assets/images/pexels4.png'
import pexel5 from '../../../assets/images/pexels5.jpg'
import pexel6 from '../../../assets/images/pexels6.jpg'

//icon
import logo_tb2 from '../../../assets/logo_tb2.png'
import icons8location64PL from '../../../assets/icons8location64PL.png'

//colors

const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

const Startup = () => {
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();
  const translation = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(width)).current;
  const translation3 = useRef(new Animated.Value(width)).current;
  const XtranslationFT = useRef(new Animated.Value(0)).current;
  const YtranslationFT1 = useRef(new Animated.Value(height)).current;
  const YtranslationFT2 = useRef(new Animated.Value(height)).current;
  const YtranslationFT3 = useRef(new Animated.Value(height)).current;
  const XtranslationST = useRef(new Animated.Value(0)).current;
  const YtranslationST1 = useRef(new Animated.Value(height)).current;
  const YtranslationST2 = useRef(new Animated.Value(height)).current;
  const YtranslationST3 = useRef(new Animated.Value(height)).current;
  const YtranslationTT1 = useRef(new Animated.Value(height)).current;
  const YtranslationTT2 = useRef(new Animated.Value(height)).current;
  const YtranslationTT3 = useRef(new Animated.Value(height)).current;

  const newAnimate = () => {

    Animated.timing(translation, {
      toValue:0,
      duration:7500,
      useNativeDriver:true,
    }).start(({finished}) => {
      Animated.timing(translation,{
        toValue:-width,
        duration:1500,
        useNativeDriver:true,
      }).start(
        Animated.timing(translation2,{
          toValue:0,
          duration:1500,
          useNativeDriver:true,
        }).start(({finished}) => {
          Animated.timing(translation2, {
            toValue:0,
            duration:7500,
            useNativeDriver:true,
          }).start(({finished}) => {
            Animated.timing(translation2,{
              toValue:-width,
              duration:1500,
              useNativeDriver:true,
            }).start(
              Animated.timing(translation3,{
                toValue:0,
                duration:1500,
                useNativeDriver:true,
              }).start(({finished}) => {})
            );
          });
        })
      );
    });
  }

  const newTextAnimate = () => {
    Animated.timing(YtranslationFT1,{
      toValue:0,
      duration:1500,
      useNativeDriver:true,
    }).start(({finished}) => {
      Animated.timing(YtranslationFT2,{
        toValue:0,
        duration:1200,
        useNativeDriver:true,
      }).start(({finished}) => {
        Animated.timing(YtranslationFT3,{
          toValue:0,
          duration:1200,
          useNativeDriver:true,
        }).start(({finished}) => {
          Animated.timing(XtranslationFT,{
            toValue:0,
            duration:3600,
            useNativeDriver:true,
          }).start(({finished}) => {
            Animated.timing(XtranslationFT,{
              toValue:-width,
              duration:1500,
              useNativeDriver:true,
            }).start(({finished}) => {
              Animated.timing(YtranslationST1,{
                toValue:0,
                duration:1500,
                useNativeDriver:true,
              }).start(({finished}) => {
                Animated.timing(YtranslationST2,{
                  toValue:0,
                  duration:1200,
                  useNativeDriver:true,
                }).start(({finished}) => {
                  Animated.timing(YtranslationST3,{
                    toValue:0,
                    duration:1200,
                    useNativeDriver:true,
                  }).start(({finished}) => {
                    Animated.timing(XtranslationST,{
                      toValue:0,
                      duration:3600,
                      useNativeDriver:true,
                    }).start(({finished}) => {
                      Animated.timing(XtranslationST,{
                        toValue:-width,
                        duration:1500,
                        useNativeDriver:true,
                      }).start(({finished}) => {
                        Animated.timing(YtranslationTT1,{
                          toValue:0,
                          duration:1500,
                          useNativeDriver:true,
                        }).start(({finished}) => {
                          Animated.timing(YtranslationTT2,{
                            toValue:0,
                            duration:1200,
                            useNativeDriver:true,
                          }).start(({finished}) => {
                            Animated.timing(YtranslationTT3,{
                              toValue:0,
                              duration:1200,
                              useNativeDriver:true,
                            }).start();
                          })
                        });
                      });
                    })
                  })
                })
              });
            });
          })
        })
      })
    });
  }

  useEffect(()=>{
    newAnimate();
    newTextAnimate();
  },[])
  return (
    <View>
      <Animated.View style={[styles.image1Wr,{
        transform: [{
          translateX: translation 
        }]
      }]}>
        <Image source={pexel3} style={[styles.image,{width:width,height:height}]}></Image>
      </Animated.View>
      <Animated.View style={[styles.image1Wr,{
        transform: [{
          translateX: translation2 
        }]
      }]}>
        <Image source={pexel1} style={[styles.image,{width:width,height:height}]}></Image>
      </Animated.View>
      <Animated.View style={[styles.image1Wr,{
        transform: [{
          translateX: translation3 
        }]
      }]}>
      <Image source={pexel2} style={[styles.image,{width:width,height:height}]}></Image>
      </Animated.View>
      <View style={[styles.backgroundColorDropColor,{width:width,height:height}]}></View>
      {/*FIRST PART */}
      <View style={[styles.contentWr,{width:width,height:height}]}>
        <Animated.View style={
          {
            position:'absolute',
            top:30,
            width:width*0.8,
            height:height*0.8,
            transform: [{
              translateX: XtranslationFT
            }]
          }
        }>
          <Animated.Text style={[styles.textColor, styles.textSize40,
             {top:120,
              transform: [{
                translateY: YtranslationFT1
              }]
          }]}>Welcome</Animated.Text>
          <Animated.Text style={[styles.textColor, styles.textSize20,{
            top:180,
            transform: [{
              translateY: YtranslationFT2
            }]
          }]}>
            We help you find best expeditions as you 
            explore the world for a memorable experience  
          </Animated.Text>
          <Animated.Image source={pexel6} style={[styles.pexel4Image,{ 
            top:300,
            width:width*0.75,
            maxWidth:500,
            height:height*0.45,
            maxHeight:300,
            objectFit:'cover',
            transform: [{
              translateY: YtranslationFT3
            }]
            }]}/>
        </Animated.View>
      </View>
      {/* SECOND PART */}
      <View style={[styles.contentWr,{width:width,height:height}]}>
        <Animated.View style={
          {
            position:'absolute',
            top:30,
            width:width*0.8,
            height:height*0.8,
            transform: [{
              translateX: XtranslationST
            }]
          }
        }>
          <Animated.Text style={[styles.textColor, styles.textSize30,
             {top:140,
              transform: [{
                translateY: YtranslationST1
              }]
          }]}>Explore places and travel around the world</Animated.Text>
          <Animated.View style={[styles.textSize20,{
            top:200,
            flexDirection:'row',
            flexWrap:'wrap',
            transform: [{
              translateY: YtranslationST2
            }]
          }]}>

          <Image source={icons8location64PL} />
          <Text style={[styles.textColor,{marginLeft:30}]}>Navigation to your location </Text>
             
          </Animated.View>
          <Animated.Image source={pexel5} style={[styles.pexel4Image,{ 
            top:300,
            width:width*0.75,
            maxWidth:500,
            height:height*0.45,
            maxHeight:300,
            objectFit:'cover',
            transform: [{
              translateY: YtranslationST3
            }]
            }]}/>
        </Animated.View>
      </View>
      {/* THIRD PART */}
      <View style={[styles.contentWr,{width:width,height:height}]}>
        <Animated.View style={
          {
            position:'absolute',
            top:0,
            width:width*0.8,
            height:height,
            marginVertical:height*0.1,
          }
        }>
          <Animated.Text style={[styles.textColor, styles.textSize30,
             {top:100,
              transform: [{
                translateY: YtranslationTT1
              }]
          }]}>Get connected to your next adventure with</Animated.Text>
          <Animated.View style={[styles.textSize20,{
            top:180,
            left:width*0.1,
            flexDirection:'column',
            height:100,
            width:320,
            transform: [{
              translateY: YtranslationTT2
            }]
          }]}>
          
          <View>
            <Image source={logo_tb2} style={{width:300,height:80,objectFit:'contain'}}/>
          </View>
          <View >
            <Text style={[styles.textColor]}>We got your holidays covered</Text>   
          </View>
          </Animated.View>
          <Animated.View style={{
            top:400,
            left:200,
            transform: [{
              translateY: YtranslationTT3
            }]
            }}
            onPress={() => {}}
            >
              <Pressable style={styles.button} onPress={()=> navigation.navigate('SetupAccount')}>
                <Text style={{color:'#fff'}}>Get Started</Text>
              </Pressable>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  )
}

export default Startup

const styles = StyleSheet.create({
  image1Wr:{
    position:'absolute',
    top:0,
    left:0,
  },
  image:{
    objectFit:'cover',
    marginBottom:5,
  },
  contentWr: {
    position:'absolute',
    zIndex:2,
  },
  backgroundColorDropColor:{
    position:'absolute',
    backgroundColor:'#0007',
    zIndex:2,
    width:'100%',
    height:'100%',
    top:0,
    left:0,
  },
  textColor: {
    position:'absolute',
    left:30,
    right:20,
    color:'#fff',
    textShadowColor:'#000',
    textShadowRadius:2,
  },
  textSize40: {
    fontSize:40
  },
  textSize30:{
    fontSize:20
  },
  textSize20: {
    fontSize:20
  },
  pexel4Image: {
    position:'absolute',
    left:30,
    right:20,
    shadowColor:'#FFF',
    shadowRadius:2,
    borderRadius:5,
  },
  button:{
    backgroundColor:primaryColorLight,
    height:40,
    width:150,
    borderRadius:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
})