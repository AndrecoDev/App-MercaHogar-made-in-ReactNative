import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from './components/ProductList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    },
});
