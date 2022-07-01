import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import Map from '../components/Car';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    title: 'Bugatti',
    image:
      'https://cdn.otopark.com/wp-content/uploads/2018/08/maxresdefault-10.jpg',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Koenigsegg',
    image:
      'https://cdn.dribbble.com/users/4024564/screenshots/14507615/media/4ec9f9f9f044ed93355bfc6d9b34e600.png?compress=1&resize=400x300',
    screen: 'HomeDisplay',
  },
  {
    id: '456',
    title: 'Mclaren',
    image:
      'https://cdn.dribbble.com/users/4024564/screenshots/14507615/media/4ec9f9f9f044ed93355bfc6d9b34e600.png?compress=1&resize=400x300',
    screen: 'HomeDisplay',
  },
];

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`h-full bg-gray-400`}>
      <View>
        <View>
          <Map />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
