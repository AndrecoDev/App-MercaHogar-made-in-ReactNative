import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ToastAndroid } from 'react-native';
import Product from './Product';
import AddProduct from './AddProduct';
import Result from './Result';

export default function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Apio', price: 0 },
        { id: 2, name: 'Habichuela', price: 0 },
        { id: 3, name: 'Naranja', price: 0 },
        { id: 4, name: 'Cebolla Larga', price: 0 },
        { id: 5, name: 'Cebolla Cabezona', price: 0 },
        { id: 6, name: 'Ajo Malla', price: 0 },
        { id: 7, name: 'Ahuyama Baby', price: 0 },
        { id: 8, name: 'Aguacate', price: 0 },
        { id: 9, name: 'Tomate Chonto', price: 0 },
        { id: 10, name: 'Papa', price: 0 },
        { id: 11, name: 'Platano', price: 0 },
        { id: 12, name: 'Banano', price: 0 },
        { id: 13, name: 'Tomate de Arbol', price: 0 },
        { id: 14, name: 'Limón', price: 0 },
        { id: 15, name: 'Papaya', price: 0 },
        { id: 16, name: 'Piña', price: 0 },
        { id: 17, name: 'Manzana Verde', price: 0 },
        { id: 18, name: 'Mora', price: 0 },
        { id: 19, name: 'Mango', price: 0 },
        { id: 20, name: 'Huevos', price: 0 },
        { id: 21, name: 'Pollo', price: 0 },
        { id: 22, name: 'Harina Pan', price: 0 },
        { id: 23, name: 'Panela', price: 0 },
        { id: 24, name: 'Azucar Morena', price: 0 },
        { id: 25, name: 'Frijol Cargamanto', price: 0 },
        { id: 26, name: 'Lenteja', price: 0 },
        { id: 27, name: 'Arveja', price: 0 },
        { id: 28, name: 'Garbanzo', price: 0 },
        { id: 29, name: 'Arroz', price: 0 },
        { id: 30, name: 'Sal Marina Refisada', price: 0 },
        { id: 31, name: 'Avena Hojuelas', price: 0 },
        { id: 32, name: 'Galatina', price: 0 },
        { id: 33, name: 'Detergente Top', price: 0 },
        { id: 34, name: 'Lava loza Liquido', price: 0 },
        { id: 35, name: 'Suavizante Dersa', price: 0 },
        { id: 36, name: 'Azul Klear Pisos', price: 0 },
    ])
    const idGen = Math.random();

    const showToast = (comment) => {
        ToastAndroid.show(comment, ToastAndroid.SHORT);
      };

    const addProduct = (name, price) => {
        setProducts(prev => {
            return [{id: idGen, name: name, price: price}, ...prev];
        });
        showToast("Producto Agregado")
    }

    const updateProduct = (id, name, price) => {
        const fruit = {id:id, name: name, price: price};
        console.log(fruit.price)
        // const productsCopy = [ ...products ]
        // const indextarge = productsCopy.findIndex(f => f.id === 1)
        // productsCopy[indextarge] = fruit;
        // setProducts(productsCopy)

        const productsCopy = products.map(fruitItem => 
            fruitItem.id === fruit.id ? 
                {...products, ...fruit} : fruitItem );
        setProducts(productsCopy)
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(item =>  item.id !== id ))
        showToast("Producto Eliminado")
    }

    const Total = () => {
        let total = 0;
        products.forEach(value =>{
            total += Number(value.price)
        });
        return total;
    }
    
    return (
        <View>
            <AddProduct addProd={addProduct}/>
            <FlatList style={styles.flat}
                data={products}
                renderItem={({ item }) => <Product product={item}  updateProd={updateProduct} deleteItem={deleteProduct} />}
            />
            <Result valor={Total}  />
        </View>
    )
}
const styles = StyleSheet.create({
    flat: {
        height: 470,
    }
})