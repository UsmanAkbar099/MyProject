import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Alert } from 'react-native';

const Login = ({ navigation }: {navigation:any}) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState('');

  const handleSignin=()=>{
    navigation.navigate('Registration');
  }
  const handlePress = () => {
  
    if (!fullName || !email) {
      Alert.alert('Validation Error', 'Please fill in both fields');
      return;
    }

  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    if (!nameRegex.test(fullName)) {
      Alert.alert('Invalid Name Style', 'Please enter a valid Name ');
      return;
    }

    
    navigation.navigate('DashBoard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>

      <View style={styles.circleContainer}>
        <View style={[styles.circle, { top: -5, left: -50 }]} />
        <View style={[styles.circle, { top: -85, left:45 }]} />
        <Image
          source={require('./assets/undraw_back_to_school_inwc 1.png')}  
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.formContainer}>
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

        <Text style={styles.signInTexts}>Forget password ?</Text>

        <TouchableOpacity style={styles.customButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          Don't have an account? <TouchableOpacity  onPress={handleSignin}><Text style={styles.signUpLink}>Sign Up</Text></TouchableOpacity>
        </Text>
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
  formContainer: {
    marginTop: 480,  
    alignItems: 'center',
    width: '100%',
  },
  signInTexts: {
    color: '#a2e1e8',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:40,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  customButton: {
    width: 380,
    height: 60,
    backgroundColor: '#32a2a8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  signUpLink: {
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
    backgroundColor: 'rgba(162, 225, 232, 0.5)', 
    position: 'absolute',
  },
  imageStyle: {
    position: 'absolute',
    top: '110%',
    left: '70%',
    marginTop: 10,
    width: 184.44,
    height: 138,
    resizeMode: 'contain',
    transform: [{ translateX: -92 }],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: -300,
    textAlign: 'center',
    fontFamily: 'Poppins',
    lineHeight: 20.41,
  },
});

export default Login;
