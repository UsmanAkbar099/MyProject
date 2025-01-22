import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

const Registration = ({ navigation } : {navigation:any}) => {
  
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp=()=>{
    navigation.navigate('LoginScreen');
  }
  const handlePress = () => {
    
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Please fill out all fields');
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
    } else {
      
      Alert.alert('Registration successful!');
      navigation.navigate('LoginScreen');
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Onboard! </Text>
      <Text style={styles.titles}>Let’s help to meet up your{'\n'} tasks. </Text>
      
      

    
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

    
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />


      <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

    
      <Text style={styles.alreadyText}>
        Already have an account? <TouchableOpacity onPress={handleSignUp}><Text style={styles.signInText}>Sign In</Text></TouchableOpacity>
      </Text>

      <View style={styles.circleContainer}>
        <View style={[styles.circle, { top: -5, left: -50 }]} />  
        <View style={[styles.circle, { top: -85, left: 40 }]} />  
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
    fontSize: 28,
    fontFamily: "Poppins-Regular",
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 250,
  },

  
  titles: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
    alignItems:'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'white',
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 15,
    marginBottom: 15,
    marginTop: 20,
  },

  customButton: {
    width: 380,
    height: 60,
    backgroundColor: '#32a2a8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 70,

  },

  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  alreadyText: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },

  signInText: {
    color: '#a2e1e8',
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
    backgroundColor: 'rgba(162, 225, 232, 0.5)', // Adjusted to semi-transparent
    position: 'absolute',
  },
});

export default Registration;
