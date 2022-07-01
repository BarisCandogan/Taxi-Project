import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavSettings from '../components/NavSettings';

const HomeDisplay = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 flex-row items-center justify-between `}>
        <Image
          style={{
            width: 80,
            height: 90,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41fyKIkc7z1Kzvj7zdezbgh-Pt_PIbhHD0Q&usqp=CAU',
          }}
        />
        <Text style={styles.text}>Eagle Motors</Text>
      </View>
      <View style={tw`p-5`}>
        <NavSettings />
      </View>
    </SafeAreaView>
  );
};

export default HomeDisplay;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: 'Times New Roman',
  },
});
