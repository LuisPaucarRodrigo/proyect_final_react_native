import { StyleSheet } from 'react-native';
import React from 'react';
import LoginScreen from './src/LoginScreen.js';
import SplashScreen from './src/SplashScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigatorScreen from './src/NavigatorScreen.js';
import PeliculaScreen from './src/PeliculaScreen.js';
import RegisterScreen from './src/RegisterScreen.js';

// import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer style={styles.content}>
        <Stack.Navigator initialRouteName="Login"  >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false,headerLeft: null }} />
          <Stack.Screen name="Navigator" component={NavigatorScreen} options={{ headerShown: false,headerLeft: null }} />
          <Stack.Screen name="Peliculas" component={PeliculaScreen} options={{ headerShown: false,headerLeft: null }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false,headerLeft: null }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;