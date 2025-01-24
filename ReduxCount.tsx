import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from './src/counterSlice';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReduxCountScreen = ({navigation}:{navigation:any}) => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const handlePressRedux = () => {
    navigation.navigate('Testing'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Redux Example for showing Counts of last screen"}</Text>
      <Text style={styles.count}>{"Total Count:"} {count}</Text>
       <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => dispatch(increment())}
                >
                <Text style={styles.buttonText}>{"Increment"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigateButton} onPress={handlePressRedux}>
                      <Text style={styles.navigateButtonText}>{"GO Back to Testing Page"}</Text>
                    </TouchableOpacity>
           </View>
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
  navigateButton: {

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
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop:20,
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  count: {
    fontSize: 34,
    color: 'red',
    fontStyle:'italic',
  },
});

export default ReduxCountScreen;
