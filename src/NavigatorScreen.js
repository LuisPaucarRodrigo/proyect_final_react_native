import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProximamenteScreen from './ProximamenteScreen';
import InicioScreen from './InicioScreen';
import BusquedaScreen from './BusquedaScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const NavigatorScreen = () => {
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      tabBarStyle: {
        backgroundColor: '#000',
      },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "gray",
    }}>
        
      <Tab.Screen name="Inicio" component={InicioScreen}
      options={{
        headerShown: false ,
        tabBarLabel: "Inicio",
        tabBarIcon:({color,size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size}/>
        )
      }}/>
      
      <Tab.Screen name="Proximamente" component={ProximamenteScreen}
      options={{
        headerShown: false ,
        tabBarLabel: 'Proximamente',
        tabBarIcon:({color,size})=> (
          <MaterialCommunityIcons name="youtube" color={color} size={size}/>
        )
      }}/>

      <Tab.Screen name="Busqueda" component={BusquedaScreen}
      options={{
        headerShown: false ,
        tabBarLabel: 'Busqueda',
        tabBarIcon:({color,size})=> (
          <MaterialCommunityIcons name="magnify" color={color} size={size}/>
        )
      }}/>

      {/* <Tab.Screen name="Usuario" component={ProfileScreen}
      options={{
        headerShown: false ,
        tabBarLabel: 'Usuario',
        tabBarIcon:({color,size})=> (
          <MaterialCommunityIcons name="account" color={color} size={size}/>
        )
      }}/> */}
    </Tab.Navigator>
  )
};

// const TabStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Navigator" component={NavigatorScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Peliculas" component={PeliculaScreen} options={{
//           headerShown: false,
//           headerBackTitleVisible: false,
//           gestureEnabled: false,
//         }} />
//     </Stack.Navigator>
//   );
// };

export default NavigatorScreen;