import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!firstName || !lastName || !gender || !email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }


    Alert.alert(
      'Signup Details',
      `First Name: ${firstName}\nLast Name: ${lastName}\nGender: ${gender}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Screen</Text>

      {/* First Name */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

    
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>{"Gender:"}</Text>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

    
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  pickerLabel: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 16,
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default Signup;
