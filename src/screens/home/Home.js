import { ActivityIndicator, Animated, Button, Dimensions, FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import icon8copy24 from '../../../assets/icons8copy24.png'
import icon8menu78 from '../../../assets/icons8menu78.png'
import icon8menu50 from '../../../assets/icons8menubar50.png'
import icons8search30 from '../../../assets/icons8search30.png'
import icons8location50 from '../../../assets/icons8location50.png'

import icons8bell64 from '../../../assets/icons8bell64.png'
import icons8comment48 from '../../../assets/icons8comment48.png'
import icons8copy24 from '../../../assets/icons8copy24.png'
import icons8home48 from '../../../assets/icons8home48.png'
import icons8like48 from '../../../assets/icons8like48.png'
import icons8reviews48 from '../../../assets/icons8reviews48.png'
import icons8reviews50 from '../../../assets/icons8reviews50.png'
import icons8share50 from '../../../assets/icons8share50.png'
import icons8users48 from '../../../assets/icons8users48.png'
import icons8suggestion64 from '../../../assets/icons8suggestion64.png'
import logo_tb from '../../../assets/logo_tb.png'
import icons8likeW48 from '../../../assets/icons8likeW48.png'
import userIcon from '../../../assets/userIcon.png'

import icons8home48PL from '../../../assets/icons8home48PL.png'
import icons8help50PL from '../../../assets/icons8help50PL.png'
import icons8image48PL from '../../../assets/icons8image48PL.png'
import icons8location64PL from '../../../assets/icons8location64PL.png'
import icons8logout50PL from '../../../assets/icons8logout50PL.png'
import icons8settings50PL from '../../../assets/icons8settings50PL.png'
import icons8user48PL from '../../../assets/icons8user48PL.png'
import icons8users48PL from '../../../assets/icons8users48PL.png'
import icons8menubar48 from '../../../assets/icons8menubar48.png'
import icons8menubar48PL from '../../../assets/icons8menubar48PL.png'
import icons8search50PL from '../../../assets/icons8search50PL.png'
import icons8suggestion64PL from '../../../assets/icons8suggestion64PL.png'
import icons8notification50PL from '../../../assets/icons8notification50PL.png'

import icons8close32 from '../../../assets/icons8close32.png'
import icons8location26 from '../../../assets/icons8location26.png'
import icons8ellipsis50 from '../../../assets/icons8ellipsis50.png'
import icons8star24 from '../../../assets/icons8star24.png'

import icons8add30 from '../../../assets/icons8add30.png'
import icons8minus48 from '../../../assets/icons8minus48.png'
import icons8share48 from '../../../assets/icons8share48.png'
import icons8notification48  from '../../../assets/icons8notification48.png'
import icons8denied48 from '../../../assets/icons8denied48.png'
import icons8close48 from '../../../assets/icons8close48.png'
import icons8addtofavorites24 from '../../../assets/icons8addtofavorites24.png'
import icons8bookmark30 from '../../../assets/icons8bookmark30.png'
import icons8image96 from '../../../assets/icons8image96.png'
import icons8down50 from '../../../assets/icons8down50.png'
import icons8meta50 from '../../../assets/icons8meta50.png'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Octicons from 'react-native-vector-icons/Octicons'
//import Octicons from 'react-native-vector-icons/Octicons'

import {useNavigation} from '@react-navigation/native'

import pexel3 from '../../../assets/images/pexels3.png'
import pexel4 from '../../../assets/images/pexels4.png'
import pexel5 from '../../../assets/images/pexels5.jpg'
import pexel6 from '../../../assets/images/pexels6.jpg'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import MyURL from '../../component/Url';

const PlaformIOS = Platform.OS === 'ios';
const PlaformaAndroid = Platform.OS === 'android';
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

const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

const URL_ALL = MyURL.URL_ALL
const URL_UPLOAD = MyURL.URL_UPLOAD
const URL_ALL_USER = MyURL.URL_ALL_USER
const img1 = require('../../../assets/images/img1.jpg')
const img2 = require('../../../assets/images/img2.jpg')
const img3 = require('../../../assets/images/img3.jpg')
const img4 = require('../../../assets/images/img4.jpg')
const img5 = require('../../../assets/images/img5.jpg')

const itemsData = [
  {
    _id:"1",
    name: "John",
    completed: "Jose",
    image:img1
  },
  {
    _id:"2",
    name: "Mary Qwerty",
    completed: "Qwerty",
    image:img2
  },
  {
    _id:"3",
    name: "Vimbai Muto",
    completed: "muto",
    image:img3
  },
  {
    _id:"4",
    name: "Sarah Neto",
    completed: "neto",
    image:img4
  },
  {
    _id:"5",
    name: "Timothy ",
    completed: "Timmy",
    image:img5
  },
  {
    _id:"6",
    name: "Tafara",
    completed: "Taffy",
    image:img1
  },
  {
    _id:"7",
    name: "Tafadzwa",
    completed: "Taflow",
    image:img2
  },
  {
    _id:"8",
    name: "Chipo",
    completed: "Chipo",
    image:img3
  }
]

const closeMenu = () => {
  console.warn('CLicked');
}

const Home = () => {
  const [items, setItems] = useState([]);
  const [header, setHeader] = useState(false);
  const [imagePicked, setImagePicked] = useState(icons8image96);
  const [username, setUsername ] = useState('Guest user');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [userId, setUserId] = useState('');
  const moveHeader = () => {
    setHeader(!header)
 }
 const {height,width} = useWindowDimensions();

  const navigation = useNavigation();
  const openNavigationPage = () => {
    // navigation.push('MapPage', {
    //   point1:-22.232,
    //   point2:89.002
    // })
  }

  const translation = useRef(new Animated.Value(-width)).current;
  const translationForSuggestion = useRef(new Animated.Value(-height)).current;
  const translationForNotification = useRef(new Animated.Value(width)).current;
  const translationForItemMenu = useRef(new Animated.Value(height)).current;
  const translationForItemMenuContent = useRef(new Animated.Value(height)).current;
  const translationForCompanyContent = useRef(new Animated.Value(height)).current;
  const translationForCompanyDetails = useRef(new Animated.Value(height)).current;
  const translationForCompanyImages = useRef(new Animated.Value(height)).current;
  const translationForImageView = useRef(new Animated.Value(height)).current;
  const translationForMeta = useRef(new Animated.Value(height)).current;

  const openProfilePage = ()=> {
    navigation.push('ViewProfile');
  }

  const openMapPage = ()=> {
    navigation.push('MapPage');
  }

  const closeMenu = () => {
    Animated.timing(translation, {
      toValue:-width,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openMenu = () => {
    Animated.timing(translation, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openMetaSearch = () => {
    Animated.timing(translationForMeta, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const closeMetaSearch = () => {
    Animated.timing(translationForMeta, {
      toValue:height,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openNotifications = () => {
    Animated.timing(translationForNotification, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const closeNotifications = () => {
    Animated.timing(translationForNotification, {
      toValue:width,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openMenuItemFun = () => {
    Animated.timing(translationForItemMenu, {
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start();
  }

  const closeMenuItemFun = () => {
    Animated.timing(translationForItemMenu, {
      toValue:height,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const closeLocationContent = () => {
    Animated.timing(translationForItemMenuContent, {
      toValue:height,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openLocationContent = () => {
    Animated.timing(translationForItemMenuContent, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const closeCompanyContent = () => {
    Animated.timing(translationForCompanyContent, {
      toValue:height,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openCompanyContent = () => {
    Animated.timing(translationForCompanyContent, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const closeCompanyDetail = () => {
    Animated.timing(translationForCompanyDetails, {
      toValue:height,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openCompanyDetail = () => {
    Animated.timing(translationForCompanyDetails, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const closeCompanyImages = () => {
    Animated.timing(translationForCompanyImages, {
      toValue:height,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openCompanyImages = () => {
    Animated.timing(translationForCompanyImages, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const closeImage = () => {
    Animated.timing(translationForImageView, {
      toValue:height,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  const openImage = () => {
    Animated.timing(translationForImageView, {
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start();
  }

  // useEffect(() => {
  //   //CODE 
  //   const fetchData = async () => {
  //     const token = await AsyncStorage.getItem('token');
  //     console.log(typeof(token))
  //     const result = await fetch(URL_ALL_USER, 
  //     { 
  //       method: 'POST', 
  //       headers: { 'Content-Type': 'application/json' }, 
  //       body: JSON. stringify({ token: token}) })
  //     result.json().then(data => {
  //       console.log(data)
  //       // setItems(data['tasks'])
  //     })
  //   }
  //   fetchData();

  // },[])

  const getData = async () => {
    const token1 = await AsyncStorage.getItem('token');
    console.log('token : '+ token1);
   
    try {
       axios
      .post(URL_ALL_USER, {token:token1})
      .then(res => {
        setEmail(res.data.data.email);
        setUsername(res.data.data.name);
        if(image != '') {
          setImage(res.data.data.image)
        }
      })
      .catch(error => console.log({'Error':error}))
    } catch (error) {
      console.log(error);
    }  
  }
  

  const signOutFun = () => {
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.setItem('token', '');
    navigation.navigate("Signin");
  }

  const testFun = () => {
    navigation.navigate('Test');
  }

  
  const [searchText, setTextSearch] = useState('');
  const [searchedText, setSearchedText] = useState('');
  const [searchInProgress, setSearchInProgress] = useState(false);
  const [searchResults, setSearchResults] = useState('');
  const [metaHistory, setMetaHistory] = useState([]);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [loadMeta, setLoadMeta] = useState(false);
  let isRequestInProgress = false
  const makePrediction = async () => {
    
    if (isRequestInProgress) return; // Prevent multiple requests
    if (searchedText == '') return;
    isRequestInProgress = true;
    setLoadMeta(true);
    const url = `http://10.0.2.2:8000/predict/?question=${searchedText}`
    const oldDta = await AsyncStorage.getItem('metaData');
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //   question: 'List the places where someone from Zimbabwe in Harare can go for a vacation'
        // }),
        // timeout: 30000,
      })
      result.json().then(data => {
        console.log(data)
        setAnswer(data.result)
        setQuestion(searchedText)
        //setMetaHistory(metaData)
        // setItems(data['tasks']);;
        setLoadMeta(false);
      }).catch(error => console.log(error)).finally(() => {
        isRequestInProgress = false; // Reset the flag
        setLoadMeta(false);
      });
    } catch (error) {
      console.log(error);
      isRequestInProgress = false; // Reset the flag
      setLoadMeta(false);
    }
  }

  const eraseData = ()=> {
    setAnswer('')
    setQuestion('')
  }
  
  const testURL = async () => {
    const data = {
       name: "Test Data"
    }
    try {
      axios
     .post(MyURL.URL_COMPANY, data)
     .then(res => {
       console.log('===>'+res);
     })
     .catch(error => console.log({'Error':error}))
   } catch (error) {
     console.log(error);
   }  
  }
  
  useEffect(() => {
    console.log('..........NEW..LOAD.........')  
    testURL();
    setSearchedText('');
    makePrediction(); // FindSearch()
    getData();
  },[])

  const CheckSearchText = async ()=> {
    if(searchedText != searchText) {
      setSearchedText(searchText);
      checkFetch(searchText);
    } else{
      setSearchInProgress(false) 
    }
  }
  const [activeCategory, setActiveCategory] = useState('all');

  const selectCategoryA = () => {
    setActiveCategory('all');
  }
  const selectCategoryM = () => {
    setActiveCategory('mountain');
  }
  const selectCategoryF = () => {
    
    setActiveCategory('forest');
  }
  const selectCategoryL = () => {
    
    setActiveCategory('lake');
  }
  const selectCategoryH = () => {
    
    setActiveCategory('history');
  }
  const selectCategoryP = () => {
    
    setActiveCategory('park');
  }
  const selectCategoryB = () => {
    
    setActiveCategory('beaches');
  }
  const selectCategoryI = () => {
    
    setActiveCategory('island');
  }
  const selectCategoryD = () => {
    
    setActiveCategory('desert');
  }

  const [activeBottomBar, setActiveBottomBar] = useState('');
  const openSavedArea = ()=> {
    clearUnClearActiveBtn();
    setActiveBottomBar('savedarea');
  }
  const inputRef = useRef(null);

  const openSearchBox = ()=> {
    setActiveBottomBar('searchbox');
    inputRef.current.focus();
  }
  const openMapArea = ()=> {
    clearUnClearActiveBtn();
    setActiveBottomBar('maparea');
    navigation.navigate('MapArea')
  }

  const openSuggests = () => {
    clearUnClearActiveBtn();
    setActiveBottomBar('suggestarea');
    Animated.timing(translationForSuggestion, {
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start();
  }

  const closeSuggests = () => {
    setActiveBottomBar('');
    Animated.timing(translationForSuggestion, {
      toValue:-width,
      duration:500,
      useNativeDriver:true,
    }).start();
  }

  const clearUnClearActiveBtn = ()=> {
    inputRef.current.blur();
  }

  return (
    <View style={styles.wrapper}>    
      <Animated.View style={[
         styles.headerWrapper, 
         header ? styles.active : {},
         {transform: [{
          translateX: translation 
          }]
         }
       ]}>
        <View style={styles.headerContent}>
          <View style={{flexDirection:'row',alignItems:'center', marginBottom:20}}>
            <View>
              <Image source={image == '' ? userIcon:image} style={{width:50, height:50, borderRadius:50, marginRight:5, backgroundColor:'#F1F7FA'}}></Image>
            </View>
            <View style={{}}>
              <Text style={{fontWeight:'400', fontSize:16, color:'#333'}}>{username}</Text>
              <Text style={{fontWeight:'300', fontSize:13, color:'#333'}}>{email}</Text>
            </View>
          </View>
          <Pressable style={styles.menuOption}>
            <Image source={icons8home48PL} style={styles.menuOptionIcon}/>
            <Text style={styles.menuOptionText}>Home</Text>
          </Pressable>
          <Pressable style={styles.menuOption} onPress={openMapPage}>
            <Image source={icons8location64PL} style={styles.menuOptionIcon}/>  
            <Text style={styles.menuOptionText}>Find Location</Text>
          </Pressable>
          <Pressable style={styles.menuOption}>
            <Image source={icons8image48PL} style={styles.menuOptionIcon}/>
            <Text style={styles.menuOptionText}>Memories</Text>
          </Pressable>
          <Pressable style={styles.menuOption}>
            <Image source={icons8users48PL} style={styles.menuOptionIcon}/>  
            <Text style={styles.menuOptionText}>Friends</Text>
          </Pressable>
          <Pressable style={styles.menuOption}>
            <Image source={icons8help50PL} style={styles.menuOptionIcon}/>
            <Text style={styles.menuOptionText}>Help & Support</Text>
          </Pressable>
          <Pressable style={styles.menuOption} onPress={openProfilePage}>
            <Image source={icons8user48PL} style={styles.menuOptionIcon}/> 
            <Text style={styles.menuOptionText}>Account</Text>
          </Pressable>
          <Pressable style={styles.menuOption}>
            <Image source={icons8settings50PL} style={styles.menuOptionIcon}/> 
            <Text style={styles.menuOptionText}>Setting</Text>
          </Pressable> 
          <Pressable style={styles.menuOption} onPress={signOutFun}>
            <Image source={icons8logout50PL} style={styles.menuOptionIcon}/>
            <Text style={styles.menuOptionText}>Logout</Text>
          </Pressable>
          <Pressable style={styles.menuOption} onPress={testFun}>
            <Image source={icons8logout50PL} style={styles.menuOptionIcon}/>
            <Text style={styles.menuOptionText}>Test</Text>
          </Pressable>
        </View>
        <TouchableOpacity style={styles.buttonHeader} onPress={closeMenu} >
        </TouchableOpacity> 
      </Animated.View>

      <View style={styles.headerSearch}>
        <View style={styles.headerSectionFirst}>
          <Pressable onPress={openMenu}>
            <Image style={styles.menuIcon} source={icons8menubar48PL}/>
          </Pressable>
          
          <Image style={styles.logoIcon} source={logo_tb}/>

          <View style={styles.menuSecWr}>
            <Pressable onPress={openNotifications}>
              <Image source={1==2?icons8bell64:icons8notification50PL}style={styles.locIcon}/>
            </Pressable>
          </View>
        </View>

        <View style={[styles.headerSection,{}]}>
          <View style={styles.searchWrapper}>
            <Image
              style={styles.searchIcon}
              source={icons8search50PL}
            />
            <TextInput 
              ref={inputRef}
              placeholder='Search destination'
              placeholderTextColor={primaryColor}
              style={[styles.searchInput,{width:width*0.65}]}
              // onChangeText={checkFetch}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.metaButton} onPress={openMetaSearch}>
             <Image source={icons8meta50} style={{width:30,objectFit:'contain'}}/>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:12,height:90}}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
          style={[styles.categoryWrapper]}>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryA}>
              <FontAwesome6 name="person-walking-luggage" size={23} color={activeCategory == 'all'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'all'?primaryColorLight:'#000'}]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryM}>
              <Foundation name="mountains" size={23} color={activeCategory == 'mountain'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'mountain'?primaryColorLight:'#000'}]}>Mountains</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryF}>
              <MaterialCommunityIcons name="forest" size={23} color={activeCategory == 'forest'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'forest'?primaryColorLight:'#000'}]}>Forests</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryL}>
              <FontAwesome6 name="water" size={23} color={activeCategory == 'lake'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'lake'?primaryColorLight:'#000'}]}>Lakes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryH}>
              <MaterialCommunityIcons name="history" size={23} color={activeCategory == 'history'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'history'?primaryColorLight:'#000'}]}>Historical Sites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryP}>
              <MaterialIcons name="park" size={23} color={activeCategory == 'park'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'park'?primaryColorLight:'#000'}]}>National Parks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryB}>
              <MaterialCommunityIcons name="beach" size={23} color={activeCategory == 'beaches'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'beaches'?primaryColorLight:'#000'}]}>Beaches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem} onPress={selectCategoryI}>
              <MaterialCommunityIcons name="island" size={23} color={activeCategory == 'island'?primaryColorLight:'#000'}/>
              <Text style={[styles.categoryItemText,{color:activeCategory == 'island'?primaryColorLight:'#000'}]}>Islands</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <Animated.View style={[ styles.suggestionBarWrapper,{transform: [{
          translateX: translationForSuggestion 
        }]
        }
      ]}>
         <View style={styles.suggestionHeader}>
         <Text style={styles.suggestTitle}>Top Tips</Text> 
         <Pressable style={styles.closeSuggestion} onPress={closeSuggests}>
             <Image source={icons8close32} />
         </Pressable>
         </View>
         <View style={styles.suggestionContent}>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={itemsData}
            keyExtractor={item => item._id}
            renderItem={({item}) => 
              <View style={styles.suggestItem}>
                  <Image source={item.image} style={styles.suggestImage}/>
                  <TouchableOpacity onPress={openLocationContent} style={styles.buttonSuggestion}></TouchableOpacity>
                  <Pressable onPress={openCompanyContent}>
                  <Text>@Tamarind</Text>
                  </Pressable>
                  <Pressable onPress={openLocationContent}>
                  <View style={{marginTop:4,flexDirection:'row',justifyContent:'flex-start'}}>
                    <Image style={{height:20,width:20,objectFit:'contain'}} source={icons8location50}></Image>
                    <Text>Nyanga</Text>
                  </View>
                  </Pressable>
              </View>
            }
            />
          </View>
      </Animated.View> 
      <Animated.View style={[styles.notificationWrapper,{transform: [{
          translateX: translationForNotification 
          }]
         }]}>
         <View style={styles.notificationContent}>
           <View style={styles.suggestionHeader}>
             <Text style={styles.suggestTitle}>Notifications</Text> 
             <Pressable onPress={closeNotifications}>
               <Image source={icons8close32} style={styles.closeSuggestion}/>
             </Pressable>
           </View>
           
         </View>
      </Animated.View>
      <Animated.View style={[styles.itemMenuWrapper,{transform: [{
          translateY: translationForItemMenu
          }]
         }]}>
        <TouchableOpacity onPress={closeMenuItemFun} style={styles.topButton}></TouchableOpacity>
        <View style={styles.bottomMenuContent}>
          <View style={styles.sectionMenuContent}>
            <TouchableOpacity style={styles.sectionMenuItem}>
              <Image source={icons8share48} style={styles.iconMenu}/>
              <Text style={styles.smallBlack}>Share with friends</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.sectionMenuItem}>
              <Image source={icons8bookmark30} style={styles.iconMenu}/>
              <Text style={styles.smallBlack}>Save post</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.sectionMenuItem}>
              <Image source={icons8addtofavorites24} style={styles.iconMenu}/>
              <Text style={styles.smallBlack}>Add to favourites</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.sectionMenuContent}>
            <TouchableOpacity style={styles.sectionMenuItem}>
              <Image source={icons8close48} style={styles.iconMenu}/>
              <Text style={styles.smallBlack}>Hide post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionMenuItem}>
              <Image source={icons8notification48} style={styles.iconMenu}/>
              <Text style={styles.smallBlack}>Turn on notifications for this post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionMenuItem}>
              <Image source={icons8denied48} style={styles.iconMenu}/>
              <Text style={styles.smallBlack}>Block post</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      <Animated.View style={[styles.itemMenuContentWr,{transform: [{
          translateY: translationForItemMenuContent
          }]
         }]}>
         <ScrollView>
            <View style={styles.firstISWrapper}>
              
              <Image source={true?img1:imagePicked} style={styles.imageContentSize}/>
              
              <View style={styles.imageContentHeader}>
                <View style={styles.contentWr}>
                  <Text style={{fontSize:22,fontWeight:'500', color:'#fff', width:200}}>Lago di Braies, Braies </Text>
                  <View style={{flexDirection:"row",height:50, width:60,justifyContent:'center'}}>
                    <Image source={icons8star24} />
                    <Text style={styles.smallTextBold}>4.0</Text>
                  </View>
                </View>    
              </View>
            </View>
             
            <View style={styles.secondItemContent}>
              
              <Text style={{color:'#000'}}>We are committed to offer affordable but luxurious
                 holiday and conference experience to our clients without 
                 compromising the interests of our other stakeholders. 
              </Text>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:13}}>
              <Image style={{height:20,width:20,objectFit:'contain'}} source={icons8location50}></Image>
                <Text style={{fontWeight:'600', color:'#000'}}>Kariba</Text>
              </View>
            </View>

            <Pressable style={styles.thirdItemContent}>
              <TouchableOpacity style={styles.bookNowButton}>
                <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>Book Now</Text>
              </TouchableOpacity>
              <Pressable style={styles.closeDetailsBtn} onPress={closeLocationContent}>
                <Image source={icons8down50} style={{width:35,objectFit:'contain'}}/>
              </Pressable>
            </Pressable>
         </ScrollView>
      </Animated.View>
      <Animated.View style={[styles.itemCompanyContentWr,{transform: [{
          translateY: translationForCompanyContent
          }]
         }]}>
        <ScrollView>
          <View style={{padding:10}}>
            <TouchableOpacity onPress={closeCompanyContent}><Image source={icons8close32}></Image></TouchableOpacity>
          </View>
          <View style={{height:400,position:'relative'}}>
            <Image source={img1} style={{backgroundColor:'#e1e1e1',width:'100%',height:250}}/>
            <View style={{padding:5,backgroundColor:'#fff',position:'absolute',top:170,left:30,borderRadius:155}}>
              <Image source={img2} style={{width:150,height:150,borderRadius:150}}/>
            </View>
            
            <View style={{padding:10,height:150,justifyContent:'flex-end'}}>
              <Text style={{color:'#000', fontWeight:'500', fontSize:20}}>Wide Livestock</Text>
            </View>
          </View>
          <View style={{backgroundColor:'#e1e1e1',minHeight:400}}>
            <TouchableOpacity onPress={openCompanyImages} style={{flexDirection:'row',backgroundColor:'#fff',padding:3, marginTop:3}}>
              <Image source={img1} style={styles.imageCollection}/>
              <Image source={img5} style={styles.imageCollection}/>
              <Image source={img3} style={styles.imageCollection}/>
              <Image source={img4} style={styles.imageCollection}/>
            </TouchableOpacity>
            <View>
              <Image source={pexel5} style={{width:'100%',height:130, objectFit:'cover'}}/>
            </View>
            <View style={{padding:10, backgroundColor:'#fff'}}>
              <Text style={{color:'#000', fontSize:18, fontWeight:'500'}}>About</Text>
              <Text style={{color:'#000', fontSize:15}}>
                We are committed to offer affordable but luxurious
                holiday and conference experience to our clients without 
                compromising the interests of our other stakeholders.
              </Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text>reviews</Text>
                  <Image source={icons8reviews50} style={{width:25,objectFit:'contain'}}/>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Image source={icons8star24} style={{width:25,objectFit:'contain'}}/>
                  <Text>4.0</Text>
                </View>
              </View>
              <TouchableOpacity onPress={openCompanyDetail} style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={icons8star24} style={{width:25,objectFit:'contain'}}/>
                <Text style={{}}>information</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingBottom:40}}>
              <View style={{marginTop:10,backgroundColor:'#fff'}}>
                <View style={{padding:10,paddingHorizontal:5,flexDirection:'row', justifyContent:'space-between'}}>
                  <Text>19 Apr</Text>
                  <Image source={icon8menu78} style={{width:35,height:30,objectFit:'contain'}}/>
                </View>
                <View style={{padding:10,paddingTop:0}}></View>
                <Image source={img1} style={{width:'100%',height:500}}/>
                <View style={{paddingHorizontal:5}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8like48} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>15</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={{fontSize:12,color:'#333'}}>79</Text>
                      <Text style={{fontSize:12,color:'#333'}}> comments . </Text>
                      <Text style={{fontSize:12,color:'#333'}}>10 </Text>
                      <Text style={{fontSize:12,color:'#333'}}>share</Text>
                    </View>
                  </View>
                  
                  <View style={{flexDirection:'row', justifyContent:'space-between',borderTopWidth:0.25}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8like48} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>Like</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8comment48} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>Comment</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8share50} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>Share</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop:10,backgroundColor:'#fff'}}>
                <View style={{padding:10,flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{color:'#000'}}>19 Apr</Text>
                  <Image source={icon8menu78} style={{width:35,height:30,objectFit:'contain'}}/>
                </View>
                <View style={{padding:10,paddingTop:0}}>
                  <Text style={{color:'#000'}}>We are committed to offer affordable but luxurious
                  holiday and conference experience to our clients without </Text>
                </View>
                <Image source={img1} style={{width:'100%',height:450}}/>
                <View style={{paddingHorizontal:5}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8like48} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>15</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={{fontSize:12,color:'#333'}}>79</Text>
                      <Text style={{fontSize:12,color:'#333'}}> comments . </Text>
                      <Text style={{fontSize:12,color:'#333'}}>10 </Text>
                      <Text style={{fontSize:12,color:'#333'}}>share</Text>
                    </View>
                  </View>
                  
                  <View style={{flexDirection:'row', justifyContent:'space-between',borderTopWidth:0.25}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8like48} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>Like</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8comment48} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>Comment</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={icons8share50} style={{width:30,objectFit:'contain'}}/>
                      <Text style={{fontSize:14,color:'#333'}}>Share</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
      <Animated.View style={[styles.itemCompanyContentWr,{transform: [{
          translateY: translationForCompanyDetails
          }]
         }]}>
        <ScrollView style={{padding:10}}>
          <View style={{padding:10}}>
            <TouchableOpacity onPress={closeCompanyDetail}><Image source={icons8close32}></Image></TouchableOpacity>
          </View>
          <Text style={{color:'#000', fontSize:20,margin:10,marginBottom:20}}>Company Details</Text>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Name</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>Emailgmail.com</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>@emailgmail.com</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Phone</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>079879799</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>City/Town</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>Kariba</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Country</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>Zimbabwe</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Values</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>Top Quality, Activities, Beach/Bay, Meals</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Working hours</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>Mon - Fri from 0800 to 1700</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Other Location</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>Nyanga, Harare</Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Description</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>
              We are committed to offer affordable but luxurious
              holiday and conference experience to our clients without 
              compromising the interests of our other stakeholders.
            </Text>
          </View>
          <View style={[styles.flexRowStart,styles.detailItemWr]}>
            <Text style={styles.detailLabel}>Website</Text>
            <Text style={[styles.detailLabel,{width:width-130}]}>nyanga.co.zw</Text>
          </View>
          <View style={{paddingBottom:50}}></View>
        </ScrollView>
      </Animated.View>
      <Animated.View style={[styles.itemCompanyContentWr,{transform: [{
          translateY: translationForCompanyImages
          }]
         }]}>
        <View>
          <View style={{padding:10}}>
            <TouchableOpacity onPress={closeCompanyImages}><Image source={icons8close32}></Image></TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#e1e1e1'}}>
          <Text style={{padding:10,color:'#000',fontSize:16, marginTop:20, fontWeight:'500'}}>@Images</Text>
          <Text style={{padding:10,color:'#000',fontSize:16, marginTop:10}}>Gallery Collection</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:5}}>
            <TouchableOpacity onPress={openImage} style={styles.imageCollectWr}>
              <Image source={img1} style={styles.imageCollectItem}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImage} style={styles.imageCollectWr}>
              <Image source={img5} style={styles.imageCollectItem}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImage} style={styles.imageCollectWr}>
              <Image source={img4} style={styles.imageCollectItem}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImage} style={styles.imageCollectWr}>
              <Image source={img3} style={styles.imageCollectItem}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImage} style={styles.imageCollectWr}>
              <Image source={img1} style={styles.imageCollectItem}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImage} style={styles.imageCollectWr}>
              <Image source={img4} style={styles.imageCollectItem}/>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      <Animated.View style={[styles.itemCompanyContentWr,{transform: [{
          translateY: translationForImageView
          }]
         }]}>
        <View style={{position:'relative',width:width,height:height}}>
          <View style={{padding:10,position:'absolute',zIndex:1,top:0,left:0,backgroundColor:'#0004',width:'100%'}}>
            <TouchableOpacity onPress={closeImage}><Image source={icons8close32}></Image></TouchableOpacity>
          </View>
          <Image source={img1} style={[styles.imageView,{width:width,height:height}]}/>
          <View style={{padding:10,position:'absolute',zIndex:1,bottom:20,left:0,backgroundColor:'#0004',width:'100%'}}>
            <View style={styles.flexRowCenter}>
              <TouchableOpacity>
                <Image source={icons8likeW48} style={{width:30,objectFit:'contain'}}></Image>
              </TouchableOpacity>
              <Text style={{color:'#fff'}}>45</Text>
            </View>
          </View>
        </View>    
      </Animated.View>
      <View style={[,styles.bottomMenuWr,{top:height-90,width:width,height:65,}]}>
        <TouchableOpacity onPress={openMapArea} style={[styles.bottomMenuBarBtn,{backgroundColor:activeBottomBar=='maparea'?primaryColorLight:'#fff'}]}>
          <MaterialCommunityIcons name="map-marker-radius" size={30} color={activeBottomBar=='maparea'?'#fff':'#999'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openSearchBox} style={[styles.bottomMenuBarBtn,{backgroundColor:activeBottomBar=='searchbox'?primaryColorLight:'#fff'}]}>
          <Fontisto name='search' size={30} color={activeBottomBar=='searchbox'?'#fff':'#999'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openSavedArea} style={[styles.bottomMenuBarBtn,{backgroundColor:activeBottomBar=='savedarea'?primaryColorLight:'#fff'}]}>
          <MaterialCommunityIcons name='book-arrow-down' size={30} color={activeBottomBar=='savedarea'?'#fff':'#999'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openSuggests} style={[styles.bottomMenuBarBtn,{backgroundColor:activeBottomBar=='suggestarea'?primaryColorLight:'#fff'}]}>
          <Octicons name='light-bulb' size={30} color={activeBottomBar=='suggestarea'?'#fff':'#999'}/>
        </TouchableOpacity>
      </View>

      <View style={[styles.margin100,{paddingHorizontal:20}]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height:310}}>
          <View style={styles.containerItemWrapper}>
            <TouchableOpacity style={styles.buttonEllipsis} onPress={openMenuItemFun}>
              <Image style={[styles.menu78icon,{width:30}]} source={icons8ellipsis50} resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReview}>
              <Image source={icons8reviews48} style={[styles.locIcon,{height:25}]} resizeMode='contain'/>
            </TouchableOpacity>
            <Image style={styles.imagePost} source={img1} resizeMode='cover'/>
            <TouchableOpacity onPress={openCompanyContent}>
              <Text style={styles.itemTitle}>Tropical Paradise Resort</Text>
            </TouchableOpacity>    
            <View style={styles.itemBottomHeader}>
              <TouchableOpacity onPress={openMapPage} style={styles.itemBottomHeader}>
                <FontAwesome6 name='location-dot' size={20} color={primaryColorLight}/>
                <Text style={{fontWeight:'600', marginLeft:3}}>Pacific Ocean</Text>
              </TouchableOpacity>
              <Text style={{fontWeight:'600', color:primaryColor,fontSize:15}}>$150</Text>
            </View>
          </View>
          <View style={styles.containerItemWrapper}>
            <TouchableOpacity style={styles.buttonEllipsis} onPress={openMenuItemFun}>
              <Image style={[styles.menu78icon,{width:30}]} source={icons8ellipsis50} resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReview}>
              <Image source={icons8reviews48} style={[styles.locIcon,{height:25}]} resizeMode='contain'/>
            </TouchableOpacity>
            <Image style={styles.imagePost} source={img3} resizeMode='cover'/>
            <TouchableOpacity onPress={openCompanyContent}>
              <Text style={styles.itemTitle}>Tropical Paradise Resort</Text>
            </TouchableOpacity>    
            <View style={styles.itemBottomHeader}>
              <TouchableOpacity style={styles.itemBottomHeader}>
                <FontAwesome6 name='location-dot' size={20} color={primaryColorLight}/>
                <Text style={{fontWeight:'600', marginLeft:3}}>Pacific Ocean</Text>
              </TouchableOpacity>
              <Text style={{fontWeight:'600', color:primaryColor,fontSize:15}}>$150</Text>
            </View>
          </View>
          <View style={styles.containerItemWrapper}>
            <TouchableOpacity style={styles.buttonEllipsis} onPress={openMenuItemFun}>
              <Image style={[styles.menu78icon,{width:30}]} source={icons8ellipsis50} resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReview}>
              <Image source={icons8reviews48} style={[styles.locIcon,{height:25}]} resizeMode='contain'/>
            </TouchableOpacity>
            <Image style={styles.imagePost} source={img3} resizeMode='cover'/>
            <TouchableOpacity onPress={openCompanyContent}>
              <Text style={styles.itemTitle}>Tropical Paradise Resort</Text>
            </TouchableOpacity>    
            <View style={styles.itemBottomHeader}>
              <TouchableOpacity style={styles.itemBottomHeader}>
                <FontAwesome6 name='location-dot' size={20} color={primaryColorLight}/>
                <Text style={{fontWeight:'600', marginLeft:3}}>Pacific Ocean</Text>
              </TouchableOpacity>
              <Text style={{fontWeight:'600', color:primaryColor,fontSize:15}}>$150</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Text style={[styles.suggestTitle,{paddingTop:10,paddingHorizontal:20}]}>Top Travel Groups</Text>
      <View style={{}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.groupItemsWraper}>
          <View style={styles.groupItem}>
            <Image source={img4} style={{width:60, height:100, objectFit:'cover',borderRadius:5}} />
            <View style={{marginLeft:10}}>
              <Text>Name name name</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome name='star' size={20} color={secondaryColor} />
                <Text style={[styles.smallBlack,{marginLeft:3}]}>4.7 (145)</Text>
              </View>
            </View>
          </View>
          <View style={styles.groupItem}>
            <Image source={img5} style={{width:60, height:100, objectFit:'cover',borderRadius:5}} />
            <View style={{marginLeft:10}}>
              <Text>Name name name</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome name='star' size={20} color={secondaryColor} />
                <Text style={[styles.smallBlack,{marginLeft:3}]}>4.7 (145)</Text>
              </View>
            </View>
          </View>
          <View style={styles.groupItem}>
            <Image source={img3} style={{width:60, height:100, objectFit:'cover',borderRadius:5}} />
            <View style={{marginLeft:10}}>
              <Text>Name name name</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome name='star' size={20} color={secondaryColor} />
                <Text style={[styles.smallBlack,{marginLeft:3}]}>4.7 (145)</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <FlatList
      contentContainerStyle={{paddingLeft: 20}}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={itemsData}
      keyExtractor={item => item._id}
      renderItem={({item}) => 
      <View style={[styles.container, {maxWidth: 500}]}>
      
        <Image
          style={styles.imagePost}
            source={item.image}
            resizeMode='cover'
        />
        <TouchableOpacity onPress={openLocationContent} style={styles.buttonItem}></TouchableOpacity>
        <View style={styles.imageContent}>
          <View style={[styles.itemTopHeader]}> 
            <View style={styles.flexTopHeader}> 
              <Pressable onPress={openCompanyContent}><Text style={styles.smallTextBold}>@Tamarind</Text></Pressable>
            </View>  
            <View>
              <Pressable onPress={openMenuItemFun}>
              <Image 
              style={[styles.menu78icon,{width:30}]}
              source={icons8ellipsis50}
              resizeMode='contain'
              />
              </Pressable>
            </View>
          </View>        
          <View style={[styles.itemBottomHeader]}>
            <View style={styles.sectionBottom}>
              <View style={[styles.flexWr,{width:'100%',justifyContent:'space-between'}]}>
                <Image
                  source={icons8location26}
                  style={[styles.locIcon,{height:25}]}
                  resizeMode='contain'
                />
                <Image
                  source={icons8reviews48}
                  style={[styles.locIcon,{height:25}]}
                  resizeMode='contain'
                />
              </View>              
            </View>
          </View>
        </View>
      </View>
      }
      /> */}
      <Animated.View style={[styles.itemCompanyContentWr,{transform: [{
          translateY: translationForMeta
          }]
         }]}>
        <View style={styles.searchAIWrapper}>
          <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:24,color:'#000',marginBottom:10,}}>Example question :</Text>
            <Text style={{fontSize:16,color:'#555'}}>Where in Harare can I stay for a luxurious holiday for a budget of 600 for 3 days?</Text>
          </View>
        </View>
        <View style={styles.searchAIWrapper}>
          <TextInput
            style={[styles.searchAIinput,{paddingRight:40}]}
            placeholder='Ask Travellbuddy AI or Search'
            placeholderTextColor={'#000'}
            onChange={e => setSearchedText(e.nativeEvent.text)}
            value={searchedText}
          />
          <View style={[styles.metaButton2,{position:'absolute',left:27}]}>
             <Image source={icons8meta50} style={{width:30,objectFit:'contain'}}/>
          </View>
          <TouchableOpacity onPress={makePrediction} style={[styles.metaButton2,{position:'absolute',right:27}]}>
             <FontAwesome name='search' size={25} color={'#444'}/>
          </TouchableOpacity>
        </View>
        <View style={{padding:20}}>
          <View style={{padding:10,borderRadius:5,marginTop:10,borderWidth:1,width:'100%',height:height-300}}> 
        
           { metaHistory.map((item,index) =>{
              <View key={index} style={{marginVertical:20,}}>
                <Text style={{backgroundColor:primaryColorLight,padding:10,color:'#fff'}}>{item.question}</Text>
                <Text style={{padding:10,color:'#fff'}}>{item.answer}</Text>
              </View>
           })
           }
           <Text style={{backgroundColor:primaryColorLight,padding:10,color:'#fff',marginBottom:10}}>{question}</Text>
           <Text style={{padding:10,color:'#999'}}>{answer}</Text>
           {loadMeta && <View style={{position:'absolute',
           top:0,left:0,width:width-50,borderRadius:5,height:'100%',zIndex:1,
           backgroundColor:'#fff', justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color={primaryColorLight} />
          </View>}
          </View>
          
        </View>
        <View style={{paddingHorizontal:20,flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={closeMetaSearch}>
            <Text style={{color:'#000'}}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={eraseData}>
            <Text style={{color:'#000'}}>Erase</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  searchAIWrapper:{
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    position:'relative',
    paddingHorizontal:20
  },
  searchAIinput:{
    width:'100%',
    height:50,
    borderRadius:5,
    borderWidth:1,
    paddingHorizontal:40,
    paddingRight:10,
  },
  groupItemsWraper: {
    height:140,
    backgroundColor:'#fff',
    paddingHorizontal:20
  },
  groupItem: {
    height:110,
    marginTop:10,
    padding:5, 
    backgroundColor:'#fff', 
    flexDirection:'row', 
    alignItems:'center',
    borderRadius:5,
    shadowColor: "#000000",
    margin:5,
    marginRight:10,
    marginTop:8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  containerItemWrapper:{
    position:'relative',
    backgroundColor:'#fff', 
    width:220,
    height:300, 
    padding:5,
    margin:5,
    marginHorizontal:10,
    borderRadius:10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  imagePost:{
    position:'relative',
    height:210, 
    width:210, 
    borderRadius:10,
  },
  itemTitle:{
    fontSize:16,
    color:'#333',
    fontWeight:'500',
    marginTop:10,
    height:45,
  },
  buttonEllipsis:{
    position:'absolute',
    top:10,
    right:20,
    zIndex:1,
  },
  buttonReview:{
    position:'absolute',
    top:180,
    right:20,
    zIndex:1,
  },
  itemBottomHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bottomMenuWr: {
    position:'absolute',
    left:0,
    zIndex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  bottomMenuBarBtn: {
    height:45, 
    width:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center' 
  },
  metaButton: {
    backgroundColor:'#fff', 
    height:35, width:35, 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:35,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  categoryWrapper: {
    flexDirection:'row',
    flex:1, 
    height:50
  },
  categoryTitle: {
    fontSize:23,
    fontWeight:'600', 
    color:'#000',
    marginBottom:5
  },
  categoryItem: {
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:10,
    flexGrow:0,
    height:40,
    marginRight:10,
    marginTop:5,
    marginLeft:5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  categoryItemText:{
    fontWeight:'600',
    marginLeft:4,
  },
  wrapper:{
    backgroundColor:'#fff',
    height:'100%'
  },
  imageCollectItem:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
  },
  imageView:{
    width:'100%',
    height:'100%',
    objectFit:'cover'
  },
  imageCollectWr:{
    flexGrow:1,
    width:100,
    maxWidth:150,
    height:150,
    margin:1,
  },
  flexRowStart:{
    flexDirection:'row',
  },
  flexRowCenter:{
    flexDirection:'row',
    alignItems:'center',
  },
  flexRowBetween:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  detailItemWr: {
    padding:3,
    paddingVertical:10,
    margin:10, 
    borderBottomWidth:0.25
  },
  detailLabel:{
    color:'#000', 
    fontSize:16, 
    width:90
  },
  imageCollection:{
    width:92,
    height:120,
    margin:2,
  },
  itemCompanyContentWr: {
    position:'absolute',
    top:0,
    left:0,
    zIndex:5,
    width:'100%',
    height:'100%',
    overflow:'scroll',
    backgroundColor:'#fff',
  },
  itemMenuContentWr:{
    position:'absolute',
    top:0,
    left:0,
    zIndex:5,
    width:'100%',
    height:'100%',
    overflow:'hidden',
    backgroundColor:primaryColorLight,
  },
  firstISWrapper:{
    position:'relative',
    width:'100%',
    height:400,
  },
  imageContentSize:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
  },
  imageContentHeader:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    backgroundColor:'#0004',
    flexDirection:'row',
    alignItems:'flex-end'
  },
  contentWr:{
    height:130,
    width:'100%',
    flexDirection:'row',
    padding:20,
    justifyContent:'space-between'
  },
  secondItemContent: {
    position:'relative',
    top:-30,
    height:350,
    backgroundColor:'#fff',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:20,
    paddingTop:40,
  },
  thirdItemContent: {
    position:'relative',
    top:-60,
    backgroundColor:primaryColorLight,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:30,
    height:100,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  bookNowButton:{
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5,
  },
  closeDetailsBtn:{

  },
  headerSearch: {
    position:'relative',
    top:0,
    left:0,
    zIndex:3,
    height:230,
    width:'100%',
    padding:20,
    paddingTop:0,
    backgroundColor:'#fff',
  },
  headerSectionFirst:{
    height:60,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  headerSection:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#f7f7f7',
    padding:20,
    height:60,
    borderRadius:10,
  },
  sectionTitle:{
    fontSize:20,
    fontWeight:'500',
    position:'relative',
    color:'#000',
    paddingHorizontal:20,
    paddingTop:20,
  },
  searchInput: {
    height:40,
    padding:10,
  },
  searchWrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
  },
  logoIcon: {
    width:120,
    height:30,
  },
  userIcon: {
    width:40,
    height:40,
    marginRight:20,
    borderRadius:40,
    backgroundColor:'#FFF'
  },
  locIcon: {
    width:30,
    height:30,
  },
  likedIcon:{
    width:24,
    height:22,
    backgroundColor:'brown',
    borderRadius:5,
    padding:5,
  },
  likedIconWr:{
    width:30,
    height:30,
    borderRadius:30,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'brown'
  },
  detailsIcon: {
    width:80,
    height:40,
    marginLeft:20,
    borderRadius:5,
    backgroundColor:'#eee'
  },
  menuSecWr:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  headerWrapper:{
    position:'absolute',
    top:0,
    left:0,
    zIndex:5,
    height:'100%',
    width:'100%',
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    color:'#FFF',
  },
  headerContent:{
    height:'100%',
    width:'80%',
    backgroundColor:'#fff',
    padding:20,
    paddingTop:60,
  },
  buttonHeader: {
    height:'100%',
    width:'20%',
    backgroundColor:"#00000055",
  },
  active: {
    backgroundColor:'green'    
  },
  menu78icon: {
    width:40,
    height:40,
  },
  searchIcon:{
    width:30,
    height:30,
  },
  imageIcon: {
    height:40, 
    width: 40, 
    borderRadius:40,
    zIndex:1,
  },
  menuIcon :  {
    width:36,
    height:36,
  },  
  smallText:{
    color: '#fff',
  },
  smallBlack:{
    color: '#000',
  },
  smallTextValue: {
    color:'#fff',
    fontSize:14,
  },
  smallTextBold: {
    fontWeight: 'bold',
    color:'#fff',
  },
  flexTopHeader :{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
  },
  flexWr:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5,
  },
  menuOption:{
    height:40,
    width:'100%',
    backgroundColor:'#f1f4f7',
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    borderRadius:3,
  },
  menuOptionText: {
    color:primaryColor,
  },
  menuOptionIcon: {
    width:25,
    height:25,
    objectFit:'contain',
    marginRight:5,
  },
  suggestionBarWrapper: {
    width:'100%',
    height:400,
    position:'absolute',
    top:255,
    left:0,
    zIndex:1,
    backgroundColor:'#fff',
    shadowColor:primaryColorLight,
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding:10,
    paddingHorizontal:20
  },
  closeSuggestion: {
    width:30,
    height:30,
  },
  suggestionHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    height:40,
    alignItems:'center',
    marginBottom:20
  },
  suggestTitle:{
    fontSize:24,
    fontWeight:'600',
    color:'#000'
  },
  suggestionContent:{
    position:'relative',
    flexDirection:'row',
    overflow:'scroll',
  },
  suggestItem:{ 
    marginRight:20,
    shadowColor:primaryColorLight,
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  suggestImage:{
    width:250,
    height:270,
    borderRadius:5,
    backgroundColor:'#ffd',
  },
  buttonSuggestion: {
    backgroundColor:'0001',
    width:180,
    height:180,
    position:'absolute',
    top:50,
    left:30,
    borderRadius:180,
  },
  notificationWrapper: {
    position:'absolute',
    zIndex:4,
    width:'100%',
    height:'100%',
    backgroundColor:'#0004',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  notificationContent: {
    width:'95%',
    height: '90%',
    backgroundColor: '#fff',
    position:'relative',
    padding:10,
    borderRadius:5,
  },
  itemMenuWrapper: {
    position:'absolute',
    width:'100%',
    height:'100%',
    top:0,
    left:0,
    zIndex:3,
    backgroundColor:'#0005',
  },
  topButton:{
    height:Dimensions.get('window').height - 450,
    width:'100%',
  },
  bottomMenuContent:{
    height:450,
    width:'100%',
    backgroundColor:'#fff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    paddingTop:30,
    paddingHorizontal:20,
  },
  sectionMenuContent:{
    backgroundColor:'#f1f1f1',
    padding:10,
    borderRadius:5,
    margin:6,
  },
  sectionMenuItem:{
    padding:5,
    paddingVertical:10,
    flexDirection:'row',
    alignItems:'center'
  },
  iconMenu: {
    width:30,
    height:30,
    objectFit:'contain',
    marginRight:5,
  }
})