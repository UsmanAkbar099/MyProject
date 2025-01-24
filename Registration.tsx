import React, { useState } from 'react';
import { Alert,ActivityIndicator ,View, Image, Text, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';
import { auth } from './assets/services/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Registration = ({ navigation }: { navigation: any }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [fullNameError, setFullNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); 

  const handleSignUp = () => {
    navigation.navigate('LoginScreen');
  };

  const handlePress = async () => {
    let valid = true;

    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    if (!nameRegex.test(fullName)) {
      setFullNameError('Please enter a valid Full Name like Ali Khan');
      valid = false;
    } else {
      setFullNameError('');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address like abn@domain.com');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (valid) {
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigation.navigate('LoginScreen');
        }, 2000); 
      } catch (error) {
        console.error(error);
        const errorMessage = (error as Error).message || 'An unknown error occurred.';
        Alert.alert('Registration Failed', errorMessage);
      }finally{
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { top: -5, left: -50 }]} />
        <View style={[styles.circle, { top: -85, left: 45 }]} />
      </View>

      <Text style={styles.title}>{"Welcome to Onboard!"}</Text>
      <View style={styles.centeredTextContainer}>
        <Text style={styles.titles}>{"Let’s help to meet up your \n tasks."}</Text>
      </View>

      <TextInput
        style={[styles.input, fullNameError ? { borderColor: 'red', borderWidth: 1 } : {}]}
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={(text) => {
          setFullName(text);
          setFullNameError('');
        }}
      />
      {fullNameError ? <Text style={styles.errorText}>{fullNameError}</Text> : null}

      <TextInput
        style={[styles.input, emailError ? { borderColor: 'red', borderWidth: 1 } : {}]}
        placeholder="Enter Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError('');
        }}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={[styles.input, passwordError ? { borderColor: 'red', borderWidth: 1 } : {}]}
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError('');
        }}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TextInput
        style={[styles.input, confirmPasswordError ? { borderColor: 'red', borderWidth: 1 } : {}]}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
          setConfirmPasswordError('');
        }}
        secureTextEntry
      />
      {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

      <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        { loading ?(
          <ActivityIndicator size="large" color="white" />
                    ) : (<Text style={styles.buttonText}>{"Register"}</Text>
        )}
        
      </TouchableOpacity>

      <Text style={styles.alreadyText}>
        {"Already have an account? "}
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signInText}>{"Sign In"}</Text>
        </TouchableOpacity>
      </Text>

      {showPopup && (
        <Modal transparent animationType="slide">
          <View style={styles.popupContainer}>
            <View style={styles.popup}>
              <Image
                source={require('./assets/Tick.jpg')}
                style={styles.imageStyle}
              />
              <Text style={styles.popupText}>{"Welcome!"}</Text>
              <Text style={[styles.popupText, { fontSize: 14 }]}>
                {"You have successfully registered."}
              </Text>
            </View>
          </View>
        </Modal>
      )}
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
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
    marginTop: '65%',
    textAlign: 'center',
  },
  centeredTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titles: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    fontFamily: 'Poppins-Regular',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 15,
    marginBottom: 15,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -8,
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
    marginBottom: 10,
    marginTop: '20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  alreadyText: {
    fontSize: 16,
    color: 'black',
    marginTop: 1,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  signInText: {
    color: '#a2e1e8',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
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
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: '80%',
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#32a2a8',
  },
});

export default Registration;
