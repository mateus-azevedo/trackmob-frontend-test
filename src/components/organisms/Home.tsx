import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AddButton from '../atoms/buttons/AddButton';
import { Header, ProductCard } from '../molecules';

import productsJson from '../../mock/products.json';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />

      <View style={styles.wrapperCadastrar}>
        <AddButton
          label='Cadastrar'
          onPress={() => {
            console.log('Hello World');
          }}
        />
      </View>

      <FlatList
        data={productsJson}
        keyExtractor={(product) => product.id}
        renderItem={(product) => (
          <View style={styles.wrapperProductCard}>
            <ProductCard
              category={product.item.category}
              name={product.item.name}
              price={product.item.price}
              tags={product.item.tags}
            />
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapperCadastrar: {
    width: '30%',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  wrapperProductCard: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
});

export default Home;
