
import {ScrollView,TouchableOpacity,Dimensions, Image, PermissionsAndroid, Platform, Pressable, SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'

//import Mapbox, {UserLocationRenderMode} from '@rnmapbox/maps'
import MapboxGL, { Logger, UserLocationRenderMode} from '@react-native-mapbox-gl/maps'
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {storesData} from './store'
import Geolocation from '@react-native-community/geolocation';
import { APIKEY as token } from '../../../utils/key';

MapboxGL.setAccessToken(token);
// Geolocation.setRNConfiguration({
//   skipPermissionRequests:false,
//   authorizationLevel:'auto',
// })
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

const store = storesData[0];

const Maps = (props)=> {
  const [routeDirections, setRouteDirections] = useState(null)
  const [coords, setCoords] = useState([31.069962,-17.815120])
  console.log(store);
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

  useEffect(() => {
    getPermissionLocation()
    console.log('coords :'+ coords)
  },[]);

  const makeRouterFeature = (coordinates) => {
    let routerFeature = {
      type:'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates,
          },
        },
      ],
    };
    return routerFeature
  }

  const createRouterLine = async (coords) => {
    console.log(store);
    const startCoords = `${coords[0]}, ${coords[1]}`
    const endCoords = `${store.longitude}, ${store.latitude}`
    const geometries = 'geojson';
    const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${startCoords};${endCoords}?alternatives=true&geometries=${geometries}&steps=true&banner_instructions=true&overview=full&voice_instructions=true&access_token=${token}`;

    try {
      let response = await fetch(url);
      let json = await response.json();
      const data = json.routes.map((data) => {
        console.log(data);
        console.log('here 1');
        // setDistance((data.distance / 1000).toFixed(2));
        // setDuration((data.duration / 3600).toFixed(2));
      });

      let coordinates = json['routes'][0]['geometry']['coordinates'];
      console.log('here 2');
      // let destinationCoordinates =
      //   json['routes'][0]['geometry']['coordinates'].slice(-1)[0];
      // setDestinationCoords(destinationCoordinates);
      if (coordinates.length) {
        const routerFeature = makeRouterFeature([...coordinates]);
        setRouteDirections(routerFeature);
      }
      // setLoading(false);
    } catch (e) {
      // setLoading(false);
      console.log(e);
    }
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [locationData, setLocationData] = useState(null);
  const onMarkerPress = () => {
     setModalVisible(true);
  };

  const closeModal = () => {
     setModalVisible(false);
  }
  const [location,setLocation] = useState([31.069962,-17.815120]);
  const [hasLocationPermission,sethasLocationPermission] = useState(false);

  const changeLocation = () => {
      setLocation([31.0999872,-17.775794])
  }

  const navigation = useNavigation();
  const goToHome = () => {
    navigation.push('Home', {
      point1:-22.232,
      point2:89.002
    })
  }

  // const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${-17.815120}&lon=${31.069962}`;
  // useEffect(()=>{
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     setLocationData(data); 
  //     console.log(locationData)
  //   })
  //   .catch(error => console.error('Error fetching reverse data', error));
  //   console.log(locationData);
  // },[])

  const [hasLocationPermissions,sethasLocationPermissions] = useState(false)

  const requestLocationPermission = async  () => 
  {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        sethasLocationPermissions(true)
        console.log("You can use the location")
      } else {
        console.log("location permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(()=>{
      requestLocationPermission()
  },[])

  // useEffect(()=> {
  //   MapboxGL.locationManager.start()
  // },[])

  return ( 
    <View style={styles.container}>
        <Pressable onPress={goToHome} style={styles.buttonBackWr}>
          <Ionicons name="chevron-back" size={30} color={primaryColorLight}/>
        </Pressable>
        <View  style={styles.container}>
            <MapboxGL.MapView
            style={styles.container}
            zoomEnabled={true}
            styleURL='mapbox://styles/mapbox/streets-v12'
            rotateEnabled={true}
            onDidFinishLoadingMap={async ()=> {
              await createRouterLine(coords);
            }}
            // userTrackingMode={this.state.userSelectedUserTrackingMode}
            >
               <MapboxGL.Camera
                  zoomLevel={15}
                  animationMode={'flyTo'}
                  centerCoordinate={location}
                  animationDuration={4000}
                  // pitch={60}
               >   
               </MapboxGL.Camera>
               {routeDirections && (
                 <MapboxGL.ShapeSource
                    id='line1'
                    shape={routeDirections}
                 >
                    <MapboxGL.LineLayer
                      id="routerLine01"
                      style={{
                        lineColor:'#3980cc',
                        lineWidth: 4}
                      }
                    >
                       
                       
                      
                    </MapboxGL.LineLayer>
                 </MapboxGL.ShapeSource>
               )}
               {/* <MapboxGL.UserLocation 
                  visible={hasLocationPermissions}
                  animated={true}
                  androidRenderMode='gps'
                  showsUserHeadingIndicator={true}
                  minDisplacement={1}
                /> */}
                <MapboxGL.PointAnnotation
                  id='marker1'
                  coordinate={coords}
                  onSelected={onMarkerPress}
                >
          
                  <FontAwesome6 name="location-dot" size={20} color={'#277fcc'}/>
                
                </MapboxGL.PointAnnotation>
                <MapboxGL.PointAnnotation
                  id='marker'
                  coordinate={[store.longitude,store.latitude]}
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
    </View>
    )
  
}
//"@react-native-mapbox-gl/maps": "^8.6.0-beta.0",
export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonBackWr:{
    position:'absolute',
    top:10,
    left:10,
    zIndex:2,
    height:40,
    width:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff8',
  },
  buttonCahngeWr:{
    position:'absolute',
    top:10,
    left:60,
    zIndex:2,
    height:40,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff8',
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