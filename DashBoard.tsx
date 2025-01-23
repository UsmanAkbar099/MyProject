import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const DashBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Learning Programming by 12PM', checked: false },
    { id: 2, label: 'Learn How to Cook by 1PM', checked: false },
    { id: 3, label: 'Learn How to Play by 2PM', checked: false },
    { id: 4, label: 'Have lunch at 4PM', checked: false },
    { id: 5, label: 'Going to travel 6PM', checked: false },
  ]);

  const toggleCheck = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image source={require('./assets/Ellipse 3.png')} style={styles.imageStyle} />
        <Text style={styles.welcomeText}>{"Welcome Jeegar Goyani"}</Text>
      </View>

      <View style={styles.circleContainer}>
        <View style={[styles.circle, { top: -5, left: -50 }]} />
        <View style={[styles.circle, { top: -85, left: 45 }]} />
      </View>

      <View style={styles.bottomFrame}>
        <Text style={styles.afternoonText}>{"Good Afternoon"}</Text>
        <Image source={require('./assets/clock.png')} style={styles.bottomImageStyle} />
        <Text style={styles.afternoonTexts}>{"Task List"}</Text>

        <View style={styles.additionalFrame}>
          <Image source={require('./assets/task_heading.png')} style={styles.bottomImageStyles} />
          <ScrollView>
            {tasks.map((task) => (
              <TouchableOpacity
                key={task.id}
                style={styles.checkBoxContainer}
                onPress={() => toggleCheck(task.id)}
              >
                <View style={[styles.checkbox, task.checked && styles.checkedCheckbox]} />
                <Text style={styles.checkBoxText}>{task.label}</Text>
              </TouchableOpacity>
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
    width: '25%',
    height: '28%',
    borderRadius: 75,
    marginBottom: 10,
    marginTop: '50%',
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
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
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333333',
    textAlign: 'right',
    marginBottom: 10,
  },
  afternoonTexts: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333333',
    textAlign: 'left',
    marginBottom: 10,
  },
  bottomImageStyle: {
    width: '45%',
    height: '25%',
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'contain',
  },
  bottomImageStyles: {
    width: '100%',
    marginBottom:10,
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
    width: '65%',
    height: '70%',
    borderRadius: 100,
    backgroundColor: 'rgba(162, 225, 232, 0.5)',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#333',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#32a2a8',
    borderColor: '#32a2a8',
  },
  checkBoxText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: '200',
    color: '#333',
  },
});

export default DashBoard;
