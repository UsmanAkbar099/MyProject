import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from './src/counterSlice';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = ({navigation}:{navigation:any}) => {
  const handlePress = () => {
    navigation.navigate('FirstScreen'); 
  };
  const handlePressRedux = () => {
    navigation.navigate('ReduxCount'); 
  };
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Redux Example"}</Text>
      <Text style={styles.count}>{"Count:"} {count}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>{"Increment"}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>{"Decrement"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.navigateButton} onPress={handlePress}>
        <Text style={styles.navigateButtonText}>{"Go to First Screen"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigateButton} onPress={handlePressRedux}>
        <Text style={styles.navigateButtonText}>{"Go to Redux Example"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  count: {
    fontSize: 26,
    fontWeight:'bold',
    color: 'red',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  navigateButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  navigateButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default App;
