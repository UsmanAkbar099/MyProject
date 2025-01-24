import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Alert, ActivityIndicator } from 'react-native';
import { auth } from './assets/services/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }: { navigation: any }) => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); 

  const handleSignin = () => {
    navigation.navigate('Registration');
  };

  const handlePress = async () => {
    let valid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address like abn@domain.com');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      setLoading(true); 
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        navigation.navigate('DashBoard');
      } catch (error) {
        console.error(error);
        const errorMessage = 'An error occurred. Due to invalid email or Password';
        Alert.alert('Login Failed', errorMessage);
      } finally {
        setLoading(false);
      }
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
          style={[styles.input, emailError ? { borderColor: 'red', borderWidth: 2 } : {}]}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          style={[styles.input, passwordError ? { borderColor: 'red', borderWidth: 2 } : {}]}
          placeholder="Enter Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError('');
          }}
          secureTextEntry
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <Text style={styles.signInTexts}>{"Forget password ?"}</Text>
        <TouchableOpacity style={styles.customButton} onPress={handlePress}>
          {loading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Text style={styles.buttonText}>{"Login"}</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          {"Don't have an account?"}
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
