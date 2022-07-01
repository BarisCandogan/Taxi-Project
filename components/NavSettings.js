import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useWindowDimensions} from 'react-native';

const data = [
  {
    id: '123',
    title: 'get a car',
    image:
      'https://previews.123rf.com/images/igoun/igoun1810/igoun181000081/109842072-car-vector-icon-isolated-simple-front-car-logo-illustration-sign.jpg',
    screen: 'CarScreen',
  },
  {
    id: '456',
    title: 'get a motorcycle',
    image:
      'https://cdn.dribbble.com/users/4024564/screenshots/14507615/media/4ec9f9f9f044ed93355bfc6d9b34e600.png?compress=1&resize=400x300',
    screen: 'BikeScreen',
  },
];

const NavSettings = () => {
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={{width: width * 0.4, marginLeft: 10}}>
          <View style={styles.center}>
            <Image style={styles.container} source={{uri: item.image}} />
            <Text style={tw`font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-yellow-400  w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavSettings;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 70,
  },
  center: {
    padding: 9,
    paddingVertical: 30,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});
