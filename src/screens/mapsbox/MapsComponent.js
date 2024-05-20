import {ScrollView,TouchableOpacity,Dimensions, Image, PermissionsAndroid, Platform, Pressable, SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import icons8leftarrow24 from '../../../assets/icons8leftarrow24.png'

//import Mapbox, {UserLocationRenderMode} from '@rnmapbox/maps'
import MapboxGL, { Logger } from '@react-native-mapbox-gl/maps'
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Geolocation from '@react-native-community/geolocation';
const token = 'pk.eyJ1Ijoiam9zZXBoYmFtdXNpMTUiLCJhIjoiY2x1NzFqdjRiMDFsdjJvcnhhYXdsaWhrYSJ9.BsHW9N3-SfQKQkJVDBBVGQ'
//const token = 'pk.eyJ1IjoibmFtbG9uZ21vYmlsZSIsImEiOiJjazRsYmsyY2cwZnRuM2pvajluMDJvbjlzIn0.HYVfIvcuXzWqGyv5KQX'
MapboxGL.setAccessToken(token);
// const IS_ANDROID = Platform.OS === 'android';

Logger.setLogCallback(log => {
   const {message} = log;
   if (
    message.match("Request failed due to a permanent error: Canceled") ||
    message.match("Request failed due to a permanent error: Socket Closed")
   ) {
    return true;
   } else {
    return false;
   }
});

const primaryColor = '#9e592b'
const primaryColorLight = '#c4733d'
const primaryColorDark = '#73401e'
const primaryColor2 = '#E25141'
const secondaryColor = '#E8b974'
const secondaryColor2 = '#37BCE5'
const tertiaryColor = '#E3CDBA'

const MapsComponent = (props)=>  {
  const [modalVisible, setModalVisible] = useState(false);
  const [locationData, setLocationData] = useState(null);
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${-17.815120}&lon=${31.069962}`;
  const [coords, setCoords] = useState([31.074031666666663,-17.817165])
  const getPermissionLocation = async () => {
    try {
      const geo = Geolocation.getCurrentPosition(
      location => {
        setCoords([location.coords.longitude, location.coords.latitude]);
        console.log(location.coords.longitude)
        console.log(location.coords.latitude)
      },
      err => console.log(err),
      {enableHighAccuracy: true},
      )
    } catch (error) {
      console.log('Error getting location ', error);
    }
  }

  useEffect(()=> {
    getPermissionLocation();
  },[])

  const onMarkerPress = () => {
     setModalVisible(true);
  };

  const closeModal = () => {
     setModalVisible(false);
  }

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setLocationData(data); 
      console.log(locationData)
    })
    .catch(error => console.error('Error fetching reverse data', error));
    console.log(locationData);
  },[])

  const [location,setLocation] = useState([31.069962,-17.815120]);
  const [hasLocationPermission,sethasLocationPermission] = useState(false);
  //-122.084990, 37.426929
  //-17.775794,31.0999872
  //-122.084199, 37.426520
  const changeLocation = () => {
      setLocation([31.0999872,-17.775794])
  }

//     const requestLocationPermission = async  () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

//       )
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         sethasLocationPermission(true)
//         console.log("You can use the location")
//         alert("You can use the location");
//       } else {
//         console.log("location permission denied")
//         alert("Location permission denied");
//       }
//     } catch (err) {
//       console.warn(err)
//     }
//     }

//   useEffect(()=>{
//       requestLocationPermission()
//   },[])
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.push('Home', {
      point1:-22.232,
      point2:89.002
    })
  }
  return ( 
    <SafeAreaView style={styles.container}>
        <View style={styles.button}>
          <Pressable 
             onPress={goToHome}
          >
            <Image
               source={icons8leftarrow24}
               style={styles.locIcon}
            />
          </Pressable>
          
          <Button
            onPress={changeLocation}
          >
            <Text>Change Location</Text>
          </Button>
        </View>
        <View  style={styles.container}>
            <MapboxGL.MapView
            // ref = {c=> (this._map=c)}
            // zoomLevel = {20}
            // centerCoordinate={location}
            showUserLocation={true}
            style={styles.container}
            zoomLevel={16}
            animationMode={'flyTo'}
            animationDuration={0}
            ref={c => (this.camera = c)}
            centerCoordinate={coords}
            rotateEnabled={true}
            styleURL='mapbox://styles/mapbox/streets-v12'
            // userTrackingMode={this.state.userSelectedUserTrackingMode}
            >
               <MapboxGL.Camera
                  zoomLevel={16}
                  animationMode={'flyTo'}
                  // animationDuration= {0}
                  ref={c=>(this.camera=c)}
                  centerCoordinate={coords}
                  animationDuration={6000}
                  // pitch={60}
               >
                  
               </MapboxGL.Camera>

               {/* <MapboxGL.UserLocation 
               visible={hasLocationPermission} minDisplacement={10}
                // minDisplacement={1}
                // renderMode={UserLocationRenderMode.Normal}
                //onUpdate={() => console.log("location changed")}
               >

               </MapboxGL.UserLocation> */}
               <MapboxGL.PointAnnotation
                 id='marker'
                 coordinate={coords}
                 onSelected={onMarkerPress}
               >
                <View style={styles.markerContainer} >
                  <FontAwesome6 name="location-dot" size={20} color={primaryColorLight}/>
                </View>
               </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
            <Modal visible={modalVisible} animationType='none' transparent>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <ScrollView>
                    <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                      <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                    <Text>City: {locationData?.address.city}</Text>
                    <Text>Country: {locationData?.address.country}</Text>
                  </ScrollView>
                </View>
              </View>
            </Modal>
        </View>
    </SafeAreaView>
    )
  
}
export default MapsComponent;
const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  button:{
    height:60,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:20,
  },
  locIcon: {
    width:30,
    height:30,
  },
  markerContainer:{
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:20,
  },
  modalContainer:{
    flex:1,
    backgroundColor:'#0005',
    justifyContent:'center',
    alignItems:'center',

  },
  modalContent:{
    position:'relative',
    backgroundColor:'#fff',
    minHeight:100,
    borderRadius:15,
    marginHorizontal:20,
    padding:20,
    elevation:5,
    width: Dimensions.get('window').width - 40,
  },
  closeButton:{
    position:'absolute',
    bottom:-10,
    right:20,
    zIndex:1,
  },
  closeButtonText:{
    color:'#000',
    fontSize:16,
    padding:10
  }
})