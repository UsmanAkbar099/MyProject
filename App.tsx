import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstfrontendScreen from './FirstfrontendScreen';
import LoginScreen from './LoginScreen';
import Registration from './Registration';
import DashBoard from './DashBoard';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();


const App = () => {
    const [loaded, error] = useFonts({
        'Poppins-Bold': require('./assets/Fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
      });
      useEffect(() => {
        
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstfrontendScreen">
        <Stack.Screen name="FirstfrontendScreen" options={{headerShown:false}} component={FirstfrontendScreen} />
        <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Registration" options={{headerShown:false}} component={Registration} />
        <Stack.Screen name="DashBoard" options={{headerShown:false}} component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
