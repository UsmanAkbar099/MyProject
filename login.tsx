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
  const movingFigures = [
    useRef(new Animated.Value(1000)).current,
    useRef(new Animated.Value(1200)).current,
    useRef(new Animated.Value(1400)).current,
    useRef(new Animated.Value(1600)).current,
    
  ]; 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Animate all moving figures
    movingFigures.forEach((figure, index) => {
      Animated.timing(figure, {
        toValue: -250,
        duration: 3000 + index * 500, // Stagger the animation
        useNativeDriver: true,
      }).start();
    });
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
      {/* Moving Circles */}
      {movingFigures.map((figure, index) => (
        <Animated.View
          key={index}
          style={[
            styles.movingFigure,
            {
              transform: [{ translateY: figure }],
              width: 100 + index * 50,
              height: 100 + index * 50,
              borderRadius: 50 + index * 25,
              backgroundColor: `rgba(30, 144, 255, ${0.3 + index * 0.2})`,
            },
          ]}
        />
      ))}

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
  },
});
