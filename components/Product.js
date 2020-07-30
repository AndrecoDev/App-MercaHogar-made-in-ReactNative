import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Product({ product, updateProd, deleteItem }) {
    // const [price, setPrice] = useState(0)

    return (
        <View style={styles.container} >
            <Text style={styles.product__name}>
                {product.name}
            </Text>
            <View style={styles.product__text}>
                <TextInput key={product.id}
                    keyboardType='numeric'
                    style={styles.product__price}
                    value={product.price}
                    onChangeText={(e) => updateProd(product.id, product.name, e)}

                />
                <Icon
                    name="remove"
                    size={30}
                    color="#ff0000"
                    onPress={() => deleteItem(product.id)}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 15,

    },
    product__name: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    product__price: {
        height: 40,
        width: 180,
        borderColor: '#5abc27',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        fontStyle: 'italic',
    },
    product__text: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,

    }
})
