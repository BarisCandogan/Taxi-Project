import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useWindowDimensions} from 'react-native';

const data = [
  {
    id: 'kawasaki',
    title: 'Bugatti',
    image:
      'https://cdn.otopark.com/wp-content/uploads/2018/08/maxresdefault-10.jpg',
    screen: 'MapScreen',
    price: '2.000.000$',
  },
  {
    id: '456',
    title: 'bmw',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TRXUvLs3-1q3cRHMQUNPHMqBfJxYT3G-eQ&usqp=CAU',
    screen: 'HomeDisplay',
    price: '150.000$',
  },
  {
    id: '456',
    title: 'Mclaren',
    image: 'https://cdn.motor1.com/images/mgl/2Y3bx/s1/mclaren-p1.jpg',
    screen: 'HomeDisplay',
    price: '400.000$',
  },
];

const Bike = () => {
  const {height, width} = useWindowDimensions();
  return data.map(item => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.color}>{item.title}</Text>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
};
export default Bike;

const styles = StyleSheet.create({
  color: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    textTransform: 'capitalize',
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 90,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 10,
  },
  row: {
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'beige',
  },
  column: {
    justifyContent: 'center',
    marginTop: 10,
  },
  price: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '800',
  },
});
