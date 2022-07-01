import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const data = [
  {
    id: '1',
    title: 'kawasaki',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5p-q-nggv0Evtuy8BKfEMJDgW5sDFXlOBQ&usqp=CAU',
    screen: 'MapScreen',
    price: '100.000$',
  },
  {
    id: '456',
    title: 'ducati',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLao90Z84LCkBWMyKvfioYemMsueZk8h6cWVguTTxTaU_BA1w3sESRoK8XMGXeXEBCTN4&usqp=CAU',
    screen: 'HomeDisplay',
    price: '40.000$',
  },
  {
    id: '456',
    title: 'Vespa',
    image:
      'https://www.adventureistanbul.com/wp-content/uploads/2021/10/2021-Vespa-Primaveira-Pic-Nic.jpeg',
    screen: 'HomeDisplay',
    price: '15.000$',
  },
];

const Bike = () => {
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
