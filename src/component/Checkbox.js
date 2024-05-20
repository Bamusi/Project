import React, {useRef} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Animated, Image} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

import icons8tick50PL from '../../assets/icons8tick50PL.png'
import icons8tick24 from '../../assets/icons8tick24.png'
const primaryColorLight = '#c4733d'

const Checkbox = ({
  text,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 30;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress();
        }}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
          checkboxStyle,
        ]}>
        <Animated.View style={{width: animatedWidth}}>
          <Image source={icons8tick24} name="checkmark" style={{width:22,height:22}} />
        </Animated.View>
      </TouchableOpacity>
      <Text style={[styles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: primaryColorLight,
    borderWidth: 1,
    borderRadius: 25,
    height: 25,
    width: 25,
  },
  checkboxSelected: {
    backgroundColor: primaryColorLight,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Checkbox;