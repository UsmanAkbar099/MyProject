import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';

const DashBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Learning Programming by 12PM', checked: false },
    { id: 2, label: 'Learn How to Cook by 1PM', checked: false },
    { id: 3, label: 'Learn How to Play by 2PM', checked: false },
    { id: 4, label: 'Have lunch at 4PM', checked: false },
    { id: 5, label: 'Going to travel 6PM', checked: false },
  ]);

  const toggleCheck = ({id}:{id:number}) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.topFrame}>
        <Image 
          source={require('./assets/Ellipse 3.png')} // Replace with your image path
          style={styles.imageStyle} 
        />
        <Text style={styles.welcomeText}>Welcome Jeegar Goyani</Text>
      </View>

      
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { top: -5, left: -50 }]} /> 
        <View style={[styles.circle, { top: -85, left: 40 }]} /> 
      </View>

    
      <View style={styles.bottomFrame}>
        <Text style={styles.afternoonText}>Good Afternoon</Text>
        <Image 
          source={require('./assets/clock.png')} // Replace with your image path
          style={styles.bottomImageStyle} 
        />
        <Text style={styles.afternoonTexts}>Task List</Text>

        
        <View style={styles.additionalFrame}>
        <Image 
          source={require('./assets/task_heading.png')}
          style={styles.bottomImageStyles} 
        />
          <ScrollView>
            {tasks.map((task) => (
              <CheckBox
                key={task.id}
                title={task.label}
                checked={task.checked}
                onPress={() => toggleCheck({ id: task.id })}
                containerStyle={styles.checkBoxContainer}
                textStyle={styles.checkBoxText}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F3',
    position: 'relative',
  },
  topFrame: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '40%',
    backgroundColor: '#50C2C9',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 10,
    marginTop: 190,
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bottomFrame: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60%',
    backgroundColor: '#F0F4F3',
    zIndex: 1,
    padding: 20,
  },
  afternoonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'right',
    marginBottom: 10,
  },
  afternoonTexts: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    marginBottom: 10,
  },
  bottomImageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'contain',
  },
  bottomImageStyles: {
    width:350,
  },
  circleContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    width: 300,
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
   circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(162, 225, 232, 0.5)', // Adjusted to semi-transparent
    position: 'absolute',
  },
  additionalFrame: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    height: '45%',
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginVertical: -30, 
  marginTop:24,
},
  
  checkBoxText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
});

export default DashBoard;
