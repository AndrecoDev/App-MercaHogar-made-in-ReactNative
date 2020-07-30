import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddProduct({ addProd }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState();

  return (
    <View style={styles.container}>
      <Icon
        name="plus-circle"
        size={35}
        color="#5abc27"
        onPress={() => { setModalOpen(true) }}
      />
      
      {
        modalOpen === true ? (<View style={styles.product} >
          <Text style={styles.product__text}>Producto:</Text>
          <TextInput
            style={styles.product__textImput}
            // value={name}
            onChangeText={(nameProd)=>{setName(nameProd)}}
          />
          <Text style={styles.product__text}>Precio:</Text>
          <TextInput
            style={styles.product__textImput}
            onChangeText={(priceProd)=>{setPrice(priceProd)}}
            keyboardType='numeric'
          />
          <Button
            title="Agregar"
            color="#5abc27"
            onPress={()=> addProd(name, price)}
            />
          <Button
            onPress={() => {setModalOpen(false)}}
            title="Cerrar"
            color="#83e21a"
            
          />
        </View>) : null
      }
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 10,
    alignItems: 'center'
  },
  product: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 250,

    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  },
  product__text: {
    color: '#5abc27',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  product__textImput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5abc27',
    color: '#5abc27',
    margin: 5,
    padding: 3
  },
})