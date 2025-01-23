import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

const Login = ({ navigation }: { navigation: any }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [fullNameError, setFullNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const handleSignin = () => {
    navigation.navigate('Registration');
  };

  const handlePress = () => {
    let valid = true;

    
    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    if (!nameRegex.test(fullName)) {
      setFullNameError('Please enter a valid Name Style');
      valid = false;
    } else {
      setFullNameError('');
    }

    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    
    if (valid) {
      navigation.navigate('DashBoard');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Welcome back"}</Text>

      <View style={styles.circleContainer}>
        <View style={[styles.circle, { top: -5, left: -50 }]} />
        <View style={[styles.circle, { top: -85, left: 45 }]} />
        <Image
          source={require('./assets/undraw_back_to_school_inwc 1.png')}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.input,
            fullNameError ? { borderColor: 'red', borderWidth: 1 } : {},
          ]}
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
            setFullNameError('');
          }}
        />
        {fullNameError ? <Text style={styles.errorText}>{fullNameError}</Text> : null}

        <TextInput
          style={[
            styles.input,
            emailError ? { borderColor: 'red', borderWidth: 1 } : {},
          ]}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
          keyboardType="email-address"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <Text style={styles.signInTexts}>{"Forget password ?"}</Text>

        <TouchableOpacity style={styles.customButton} onPress={handlePress}>
          <Text style={styles.buttonText}>{"Login"}</Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          {"Don't have an account?"}{' '}
          <TouchableOpacity onPress={handleSignin}>
            <Text style={styles.signUpLink}>{"Sign Up"}</Text>
          </TouchableOpacity>
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
    marginTop: '130%',
    alignItems: 'center',
    width: '100%',
  },
  signInTexts: {
    color: '#a2e1e8',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
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
    fontFamily: 'Poppins-Regular',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    fontFamily: 'Poppins-Regular',
  },
  customButton: {
    width: '95%',
    height: 60,
    backgroundColor: '#32a2a8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '25%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  signUpText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  signUpLink: {
    color: '#a2e1e8',
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
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
    width: '65%',
    height: '70%',
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
    marginTop: '53%',
    marginBottom: -300,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});

export default Login;
