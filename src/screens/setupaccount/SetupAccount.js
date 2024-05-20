// to do
// -- get value from all options
// -- get custom values 
// -- save data to user item (update)

import {Animated, Image, Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { CheckBox } from '@react-native-community/checkbox'
import {useNavigation} from '@react-navigation/native'

//icon
import icons8add50PL from '../../../assets/icons8add50PL.png'
import Checkbox from '../../component/Checkbox'
import icons8tick48PL from '../../../assets/icons8tick48PL.png'
import icons8circle64PL from '../../../assets/icons8circle64PL.png'
import icons8plus50 from '../../../assets/icons8plus50.png'

const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

const SetupAccount = () => {
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();
  const translation1 = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(width)).current;
  const translation3 = useRef(new Animated.Value(width)).current;
  const translation4 = useRef(new Animated.Value(width)).current;
  const translationLoc = useRef(new Animated.Value(-height*0.7)).current;

  const translationRange = useRef(new Animated.Value(-height*0.7)).current;
  const translationNothing = useRef(new Animated.Value(-150)).current;

  const [color1,setColor1] = useState('#e6b87c');
  const [color2,setColor2] = useState('#fff');
  const [color3,setColor3] = useState('#fff');
  const [color4,setColor4] = useState('#fff');

  const [isTopQuality, setIsTopQuality] = useState(false);
  const [isActivities, setIsActivities] = useState(false);
  const [isWorkable, setIsWorkable] = useState(false);
  const [isConference, setIsConference] = useState(false);
  const [isBeachBay, setIsBeachBay] = useState(false);
  const [isWeddings, setIsWeddings] = useState(false);
  const [isSchoolTrips, setIsSchoolTrips] = useState(false);
  const button1Btn = isTopQuality || isActivities || isWorkable|| isConference || isBeachBay || isWeddings || isSchoolTrips;
  
  const [isSimple, setIsSimple] = useState(false);
  const [isStandard, setIsStandard] = useState(false);
  const [isPremiun, setIsPremiun] = useState(false);
  const [isExpensive, setIsExpensive] = useState(false);
  const button2Btn = isSimple || isStandard || isPremiun || isExpensive;

  const [isNyanga, setNyanga] = useState(false);
  const [isKariba, setKariba] = useState(false);
  const [isBulawayo, setBulawayo] = useState(false);
  const [isVictoria, setVictoriaFalls] = useState(false);
  const [isHarare, setHarare] = useState(false);
  const [customLocation, setIsLocation] = useState(false);
  const button3Btn = customLocation || isNyanga || isKariba || isBulawayo || isVictoria || isHarare;
  
  const [is0to300, setIs0to300] = useState(false);
  const [is300to800, setIs300to800] = useState(false);
  const [is800to2000, setIs800to2000] = useState(false);
  const [is2000to5000, setIs2000to5000] = useState(false);
  const [is5000to15000, setIs5000to15000] = useState(false);
  const [isCustom, setIsCustom] = useState(false);

  const button4Btn = is0to300 || is300to800 || is800to2000 || is2000to5000 || is5000to15000 || isCustom;
  const setThisOne = (setItem) => {
    setIs0to300(false);
    setIs300to800(false);
    setIs800to2000(false);
    setIs2000to5000(false);
    setIs5000to15000(false);
    setIsCustom(false);
    setItem(true);
  }
  
  const button1 = () => {
    Animated.timing(translation1, {
      toValue:-width,
      duration:500,
      useNativeDriver:true,
    }).start()
    Animated.timing(translation2, {
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start(({finished}) => {
      setColor1(primaryColorLight)
      setColor2('#e6b87c');
    });
  }
  const button2 = () => {
    Animated.timing(translation2, {
      toValue:-width,
      duration:500,
      useNativeDriver:true,
    }).start()
    Animated.timing(translation3, {
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start(({finished}) => {
      setColor2(primaryColorLight)
      setColor3('#e6b87c');
    });
  }
  const button3 = () => {
    Animated.timing(translation3, {
      toValue:-width,
      duration:500,
      useNativeDriver:true,
    }).start()
    Animated.timing(translation4, {
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start(({finished}) => {
      setColor3(primaryColorLight)
      setColor4('#e6b87c');
    });
  }
  const button4 = () => {
    navigation.navigate('Home');
  }

  const back2 = () => {
    Animated.timing(translation1, {
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start()
    Animated.timing(translation2, {
      toValue:width,
      duration:500,
      useNativeDriver:true,
    }).start(({finished}) => {
      setColor1('#e6b87c')
      setColor2('#fff')
    });
  }
  const back3 = () => {
    Animated.timing(translation2, {
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start()
    Animated.timing(translation3, {
      toValue:width,
      duration:500,
      useNativeDriver:true,
    }).start(({finished}) => {
      setColor2('#e6b87c')
      setColor3('#fff')
    });
  }
  const back4 = () => {
    Animated.timing(translation3, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start()
    Animated.timing(translation4, {
      toValue:width,
      duration:500,
      useNativeDriver:true,
    }).start(({finished}) => {
      setColor3('#e6b87c')
      setColor4('#fff')
    });
  }

  const [openlocation, setOpenLocation] = useState(false);

  const openLocationPicker = () => {
    setOpenLocation(!openlocation);
    if(openlocation) {
      Animated.timing(translationLoc, {
        toValue:0,
        duration:300,
        useNativeDriver:true,
      }).start();
    } else {
      Animated.timing(translationLoc, {
        toValue:-height*0.7,
        duration:300,
        useNativeDriver:true,
      }).start();
    } 
  }

  const [openbudget, setBudget] = useState(false);

  const openBudgetPicker = () => {
    setBudget(!openbudget);
    if(openbudget) {
      Animated.timing(translationRange, {
        toValue:0,
        duration:300,
        useNativeDriver:true,
      }).start();
    } else {
      Animated.timing(translationRange, {
        toValue:-height*0.7,
        duration:300,
        useNativeDriver:true,
      }).start();
    } 
  }

  const nothing = () => {
    Animated.timing(translationNothing, {
      toValue:0,
      duration:150,
      useNativeDriver:true,
    }).start(({finished}) => {
      Animated.timing(translationNothing, {
        toValue:0,
        duration:2000,
        useNativeDriver:true,
      }).start(({finished}) => {
        Animated.timing(translationNothing, {
          toValue:-150,
          duration:150,
          useNativeDriver:true,
        }).start(({finished}) => {})
      })
    });
  }

  const [isSelected, setSelection] = useState(false);
  return (
    <View style={[styles.pageWrapper, {width:width,minHeight:height}]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title,{width:width*0.9,textAlign:'center'}]}>Setup Preferences</Text>
      </View>
      <View style={[styles.middleContainer,{width:width*0.9,height:height*.75}]}>
        <Animated.View style={[styles.errorMessage,
         {transform:[{translateY:translationNothing}]}
        ]}>
          <Text style={{color:'red'}}>Select At Least One </Text>
        </Animated.View>

        <Animated.View style={[styles.middleSection,{
          width:width*0.9,height:height*.75,
          transform:[{translateX:translation1}]}]}>
          <View style={{position:'relative',width:'100%',height:'100%'}}>
            <Text style={styles.question}>Select your below what you value most from your future destination when travelling?</Text>
            <View style={styles.optionsWrapper}>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Top Quality"
                  isChecked={isTopQuality}
                  onPress={() => {
                    setIsTopQuality(!isTopQuality);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Activities"
                  isChecked={isActivities}
                  onPress={() => {
                    setIsActivities(!isActivities);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Workable"
                  isChecked={isWorkable}
                  onPress={() => {
                    setIsWorkable(!isWorkable);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
               <Checkbox
                  text="Conference/Business meetings"
                  isChecked={isConference}
                  onPress={() => {
                    setIsConference(!isConference);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Beach/Bay"
                  isChecked={isBeachBay}
                  onPress={() => {
                    setIsBeachBay(!isBeachBay);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Weddings"
                  isChecked={isWeddings}
                  onPress={() => {
                    setIsWeddings(!isWeddings);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="School Trips"
                  isChecked={isSchoolTrips}
                  onPress={() => {
                    setIsSchoolTrips(!isSchoolTrips);
                  }}
                  style={styles.checkbox}
                />
              </View>
            </View>
            <Pressable style={button1Btn ? styles.continueBtn1:styles.continueBtn} onPress={button1Btn ? button1 : nothing}>
              <Text style={button1Btn ? styles.continueText1:styles.continueText}>Continue</Text>
            </Pressable>
          </View>  
        </Animated.View>

        <Animated.View style={[styles.middleSection,{
          width:width*0.9,
          height:height*.75,
          transform:[{
            translateX:translation2
          }]
        }]}>
          <View style={{position:'relative',width:'100%',height:'100%'}}>
          <Text style={styles.question}>Select the type of quality</Text>
            <Pressable style={styles.backBtn} onPress={back2}><Text>Back</Text></Pressable>
            <Pressable style={button2Btn ? styles.continueBtn1:styles.continueBtn} onPress={button2Btn ? button2 :nothing}>
              <Text style={button2Btn ? styles.continueText1:styles.continueText}>Continue</Text>
            </Pressable>
            <View style={styles.optionsWrapper}>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Simple"
                  isChecked={isSimple}
                  onPress={() => {
                    setIsSimple(!isSimple);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Standard"
                  isChecked={isStandard}
                  onPress={() => {
                    setIsStandard(!isStandard);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Premium"
                  isChecked={isPremiun}
                  onPress={() => {
                    setIsPremiun(!isPremiun);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="Expensive"
                  isChecked={isExpensive}
                  onPress={() => {
                    setIsExpensive(!isExpensive);
                  }}
                  style={styles.checkbox}
                />
              </View>
            </View>
          </View> 
        </Animated.View>
        
        <Animated.View style={[styles.middleSection,{
          width:width*0.9,
          height:height*.75,
          transform:[{
            translateX:translation3
          }]
        }]}>
          <View style={{position:'relative',width:'100%',height:'100%'}}>
            <Text style={styles.question}>If you have locations you are interested in select them below</Text>
            <Pressable style={styles.backBtn} onPress={back3}><Text>Back</Text></Pressable>
            <Pressable style={button3Btn ? styles.continueBtn1:styles.continueBtn} onPress={button3Btn ? button3 :nothing}>
              <Text style={button3Btn ? styles.continueText1:styles.continueText}>Continue</Text>
            </Pressable>
            <View style={styles.optionsWrapper}>
              <View style={styles.locationWrapper}>
                <Text style={[styles.labelText,{marginRight:10}]}>Location</Text>
                <Pressable onPress={openLocationPicker}>
                  <Image source={icons8add50PL} style={{width:30,height:30,objectFit:'contain'}}/>
                </Pressable>
              </View>
              <View style={[styles.customLocWrapper]}>
                <Animated.View style={[styles.customLocContent,
                  {transform:[{
                    translateY:translationLoc
                  }]}
                ]}>
                  <Text style={{fontSize:20,color:'#000'}}>Enter a City/Town in Zimbabwe</Text>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <TextInput style={styles.textInput} placeholder='City/Town'></TextInput>
                    <Pressable style={styles.addLocation}><Image source={icons8plus50} style={{height:25,width:25}}/><Text style={{color:'#fff'}}>ADD</Text></Pressable>
                  </View>  
                </Animated.View>
              </View>
              <View style={styles.selectedLocation}>
                <View style={styles.checkboxWrapper}>
                  <Checkbox
                    text="Harare"
                    isChecked={isHarare}
                    onPress={() => {
                      setHarare(!isHarare);
                    }}
                    style={styles.checkbox}
                  />
                </View>
                <View style={styles.checkboxWrapper}>
                  <Checkbox
                    text="Victoria Falls"
                    isChecked={isVictoria}
                    onPress={() => {
                      setVictoriaFalls(!isVictoria);
                    }}
                    style={styles.checkbox}
                  />
                </View>
                <View style={styles.checkboxWrapper}>
                  <Checkbox
                    text="Bulawayo"
                    isChecked={isBulawayo}
                    onPress={() => {
                      setBulawayo(!isBulawayo);
                    }}
                    style={styles.checkbox}
                  />
                </View>
                <View style={styles.checkboxWrapper}>
                  <Checkbox
                    text="Kariba"
                    isChecked={isKariba}
                    onPress={() => {
                      setKariba(!isKariba);
                    }}
                    style={styles.checkbox}
                  />
                </View>
                <View style={styles.checkboxWrapper}>
                  <Checkbox
                    text="Nyanga"
                    isChecked={isNyanga}
                    onPress={() => {
                      setNyanga(!isNyanga);
                    }}
                    style={styles.checkbox}
                  />
                </View>
              </View>
            </View>
          </View> 
        </Animated.View>

        <Animated.View style={[styles.middleSection,{
          width:width*0.9,
          height:height*.75,
          transform:[{
            translateX:translation4
          }]
        }]}>
          <View style={{position:'relative',width:'100%',height:'100%'}}>
          <Text style={styles.question}>Select your idle budget for your future destination?</Text>
            <Pressable style={styles.backBtn} onPress={back4}><Text>Back</Text></Pressable>
            <Pressable style={button4Btn ? styles.continueBtn1:styles.continueBtn} onPress={button4Btn ? button4 :nothing}>
              <Text style={button4Btn ? styles.continueText1:styles.continueText}>Continue</Text>
            </Pressable>
            
            <View style={styles.optionsWrapper}>
              <View style={styles.locationWrapper}>
                <Text style={[styles.labelText,{marginRight:10}]}>Custom Range</Text>
                <Pressable onPress={openBudgetPicker}>
                  <Image source={icons8add50PL} style={{width:30,height:30,objectFit:'contain'}}/>
                </Pressable>
              </View>
              <View style={[styles.customLocWrapper]}>
                <Animated.View style={[styles.customLocContent,
                  {transform:[{
                    translateY:translationRange
                  }]}
                ]}>
                  <Text style={{fontSize:20,color:'#000'}}>Customise Budget</Text>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <Text style={{fontSize:30, fontWeight:'500',marginRight:3}}>$</Text>
                    <TextInput style={styles.textInputNumber} placeholder='0'/>
                    <Text style={{fontSize:30, fontWeight:'500',marginRight:3}}>- $</Text>
                    <TextInput style={styles.textInputNumber} placeholder='0'/>
                    <Pressable style={styles.addLocation}><Image source={icons8plus50} style={{height:25,width:25}}/><Text style={{color:'#fff'}}>ADD</Text></Pressable>
                  </View>  
                </Animated.View>
              </View>
              <View style={styles.checkboxWrapper}>
                <Checkbox
                  text="$0 - $300"
                  isChecked={is0to300}
                  onPress={() => {
                    setThisOne(setIs0to300);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
              <Checkbox
                  text="$300 - $800"
                  isChecked={is300to800}
                  onPress={() => {
                    setThisOne(setIs300to800);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
              <Checkbox
                  text="$800 - $2 000"
                  isChecked={is800to2000}
                  onPress={() => {
                    setThisOne(setIs800to2000);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
              <Checkbox
                  text="$2 000 - $5 000"
                  isChecked={is2000to5000}
                  onPress={() => {
                    setThisOne(setIs2000to5000);
                  }}
                  style={styles.checkbox}
                />
              </View>
              <View style={styles.checkboxWrapper}>
              <Checkbox
                  text="$5 000 - $15 000"
                  isChecked={is5000to15000}
                  onPress={() => {
                    setThisOne(setIs5000to15000);
                  }}
                  style={styles.checkbox}
                />
              </View>
            </View>
          </View> 
        </Animated.View>
      </View>
      <View style={styles.bottomContainer}>
        <Animated.View style={[styles.circleBar,{backgroundColor:color1}]}></Animated.View>
        <Animated.View style={[styles.circleBar,{backgroundColor:color2}]}></Animated.View>
        <Animated.View style={[styles.circleBar,{backgroundColor:color3}]}></Animated.View>
        <Animated.View style={[styles.circleBar,{backgroundColor:color4}]}></Animated.View>
      </View>
    </View>
  )
}

export default SetupAccount

const styles = StyleSheet.create({
  pageWrapper: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f1f1f1'
  },
  headerContainer:{
    marginTop:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  middleContainer: {
    marginTop:20,
    position:'relative',
    overflow:'hidden',
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5,
  },
  middleSection:{
    position:'absolute',
    top:0,
    left:0,
  },
  bottomContainer: {
    marginTop:20,
    flex:1,
    flexDirection:'row',
  },
  circleBar: {
    width:15,
    height:15,
    borderRadius:15,
    marginHorizontal:3,
  },
  title:{
    fontSize:30,
    color:primaryColorLight,
    backgroundColor:'#222',
    paddingVertical:10,
    borderRadius:5,
  },
  question:{
    padding:5,
    fontSize:17,
    color:'#000',
  },
  checkboxWrapper:{
    marginBottom:10,
    marginLeft:20,
  },
  optionsWrapper:{
    marginTop:30,
  },
  labelText:{
    fontSize:16,
    color:'#000',
  },
  backBtn:{
    position:'absolute',
    bottom:10,
    right:90,
    padding:5,
    paddingHorizontal:10,
    backgroundColor:'#f1f1f1',
    borderRadius:5,
  },
  continueBtn:{
    position:'absolute',
    bottom:10,
    right:10,
    padding:5,
    backgroundColor:"#F5F7F9",
    borderRadius:5,
    color:'#aaa'
  },
  continueText:{
    color:'#aaa'
  },
  continueBtn1:{
    position:'absolute',
    bottom:10,
    right:10,
    padding:5,
    backgroundColor:primaryColorLight,
    borderRadius:5,
  },
  continueText1:{
    color:'#FFF'
  },
  locationWrapper:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
    marginLeft:20,
  },
  selectedLocation:{
    marginBottom:10,
    marginLeft:20,
  },
  checkbox: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  selectedIcon:{
    width:30,
    height:30,
    marginRight:10,
  },
  selectedLWr:{
    flexDirection:'row',
    alignItems:'center'
  },
  customLocWrapper: {
    position:'relative',
    width:'100%',
    height:0,
    zIndex:1,
    marginBottom:20,
  },
  overflowHidden:{
    overflow:'hidden',
  },
  overflowShow:{
    color:'visible',
  },
  customLocContent: {
    position:'absolute',
    top:5,
    left:0,
    width:'100%',
    height:100,
    backgroundColor:primaryColorLight,
    padding:10,
  },
  textInput: {
    backgroundColor:'#fff',
    height:40,
    width:220,
    paddingVertical:5
  },
  textInputNumber:{
    backgroundColor:'#fff',
    height:40,
    width:80,
    marginRight:10,
    fontSize:20,
    paddingVertical:5
  },
  addLocation:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:primaryColorDark,
    marginHorizontal:10,
    padding:5,
    paddingHorizontal:10,
    borderRadius:5,
  },
  errorMessage:{
    position:'absolute',
    top:10,
    left:10,
    width:'100%',
    padding:15,
    borderRadius:5,
    zIndex:2,
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    },
})