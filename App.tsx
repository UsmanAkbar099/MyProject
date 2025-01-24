import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstfrontendScreen from './FirstfrontendScreen';
import ReduxCount from './ReduxCount';
import LoginScreen from './LoginScreen';
import Registration from './Registration';
import DashBoard from './DashBoard';
import Testing from './Testing';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/store';

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
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Testing">
        <Stack.Screen name="FirstScreen" component={FirstfrontendScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReduxCount" component={ReduxCount} options={{ headerShown: false }} />
        <Stack.Screen name="Testing" component={Testing} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
