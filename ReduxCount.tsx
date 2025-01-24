import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './src/counterSlice';
import { View, Text, StyleSheet } from 'react-native';

const ReduxCountScreen = () => {
  const count = useSelector(selectCount);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Redux Example for showing Counts of last screen"}</Text>
      <Text style={styles.count}>{"Total Count:"} {count}</Text>
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
