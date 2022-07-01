import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MapScreen from '../Screens/CarScreen';
import HomeDisplay from '../Screens/HomeDisplay';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BikeScreen from '../Screens/BikeScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeDisplay"
            component={HomeDisplay}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CarScreen"
            component={MapScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="BikeScreen"
            component={BikeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
