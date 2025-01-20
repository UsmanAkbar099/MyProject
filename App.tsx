import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  View,
} from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Fade-in animation for container
  const buttonScale = useRef(new Animated.Value(1)).current; // Button scale animation
  const movingFigure = useRef(new Animated.Value(1000)).current; // Movement animation

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

  
    Animated.timing(movingFigure, {
      toValue: -200,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLoginPress = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      alert(`Username: ${username}\nPassword: ${password}`);
    });
  };

  return (
    <View style={styles.container}>
      
      <Animated.View
        style={[
          styles.movingFigure,
          { transform: [{ translateY: movingFigure }] },
        ]}
      />
      
      {/* Login Form */}
      <Animated.View style={[styles.innerContainer, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Welcome</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>CHECK LOGIN</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  innerContainer: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E90FF',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#1E90FF',
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  movingFigure: {
    position: 'absolute',
    bottom: 0,
    width: 200,
    height: 200,
    backgroundColor: '#1E90FF',
    borderRadius: 100,
    opacity: 0.5,
  },
});
