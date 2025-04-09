import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Conta from './screens/Conta';
import Multas from './screens/Multas';
import DetalhesMulta from './screens/DetalhesMulta';
import NovaMulta from './screens/NovaMulta';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="Multas" component={Multas} />
        <Stack.Screen name="DetalhesMulta" component={DetalhesMulta} />
        <Stack.Screen name="NovaMulta" component={NovaMulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}