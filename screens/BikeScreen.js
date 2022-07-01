import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Bike from '../components/Bike';
const BikeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full bg-gray-400 `}>
      <View>
        <View>
          <Bike />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BikeScreen;

const styles = StyleSheet.create({});
