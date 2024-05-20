
// import userIcon from '../../assets/userIcon.png'
// import {View, StyleSheet, Text, Image} from 'react-native';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import {Avatar, Title} from 'react-native-paper';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';

// const DrawerList = [
//   {icon: 'home-outline', label: 'Home', navigateTo: 'Home'},
//   {icon: 'account-multiple', label: 'Profile', navigateTo: 'Profile'},
// ];
// const DrawerLayout = ({icon, label, navigateTo}) => {
//   const navigation = useNavigation();
//   // console.log(userData);
//   return (
//     <DrawerItem
//     //   icon={() => <Image source={userIcon}/>}
//       label={label}
//       onPress={() => {
//         navigation.navigate(navigateTo);
//       }}
//     />
//   );
// };

// const DrawerItems = props => {
//     return DrawerList.map((el, i) => {
//       return (
//         <DrawerLayout
//           key={i}
//         //   icon={el.icon}
//           label={el.label}
//           navigateTo={el.navigateTo}
//         />
//       );
//     });
//   };
// function DrawerContent(props) {
//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <TouchableOpacity activeOpacity={0.8}>
//             <View style={styles.userInfoSection}>
//               <View style={{flexDirection: 'row', marginTop: 15}}>
//                 <Image
//                   source={userIcon}
//                   size={50}
//                   style={{marginTop: 5}}
//                 />
//                 <View style={{marginLeft: 10, flexDirection: 'column'}}>
//                   <Title style={styles.title}>Adarsh</Title>
//                   <Text style={styles.caption} numberOfLines={1}>
//                     adarshthakur210@gmail.com
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <View style={styles.drawerSection}>
//             <DrawerItems />
//           </View>
//         </View>
//       </DrawerContentScrollView>
//       <View style={styles.bottomDrawerSection}>
//         <DrawerItem
//         //   icon={({color, size}) => (
//         //     <Icon name="exit-to-app" color={color} size={size} />
//         //   )}
//           label="Sign Out"
//         />
//       </View>
//     </View>
//   );
// }
// export default DrawerContent;

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 13,
//     lineHeight: 14,
//     // color: '#6e6e6e',
//     width: '100%',
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//     borderBottomWidth: 0,
//     borderBottomColor: '#dedede',
//     borderBottomWidth: 1,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#dedede',
//     borderTopWidth: 1,
//     borderBottomColor: '#dedede',
//     borderBottomWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });