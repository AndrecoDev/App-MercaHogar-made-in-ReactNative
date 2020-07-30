import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result({ valor }) {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Total: $ 
                { valor()}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a73e8',
        padding: 25,
        margin: 0,
        alignItems: 'center',
        },
    texto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})