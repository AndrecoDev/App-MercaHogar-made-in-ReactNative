import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
            Lista de Productos
            <Icon name="shopping-cart" size={40} color="#fff" />
        </Text>
    </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#5abc27',
        padding: 30,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        margin: 10,
        fontWeight: 'bold'
    },
    
})