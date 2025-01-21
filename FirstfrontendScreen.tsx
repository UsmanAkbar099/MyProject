import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MyScreen = () => {

  // Handle button press
  const handlePress = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gets things with TODs</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet {'\n'}
        consectetur. Eget sit nec et {'\n'}
        euismod. Consequat urna {'\n'}
        quam felis interdum quisque. {'\n'}
        Malesuada adipiscing tristique {'\n'}
        ut eget sed.
      </Text>

      {/* Custom Button */}
      <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Two intersecting circles */}
      <View style={styles.circleContainer}>
        <View style={[styles.circle, {top: 30, left: -50}]} />  {/* Circle from the top-left */}
        <View style={[styles.circle, {top: -35, left: -10}]} />  {/* Circle from the left side */}

        {/* Adding an Image on top of the circles */}
        <Image 
          source={require('./assets/undraw_done_checking_re_6vyx 1.png')}  // Make sure the image is in the assets folder
          style={styles.imageStyle} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 250,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Poppins',
    lineHeight: 20.41,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 20.41,
    width: '90%',
    maxWidth: 400,
  },
  customButton: {
    position: 'absolute',
    width: 380,
    height: 60,
    top: 799,
    left: 23,
    backgroundColor: '#32a2a8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  circleContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    width: 300,
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#a2e1e8',
    position: 'absolute',
  },
  imageStyle: {
    
    position: 'absolute',
    top: '90%',  // Position the image within the container
    left: '30%',
    width: 254,  // Adjust image size
    height: 194,  // Adjust image size
    resizeMode: 'contain',  // Ensure the image fits within the space
  },
  
});

export default MyScreen;
