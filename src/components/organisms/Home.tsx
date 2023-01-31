import React from 'react';
import {StyleSheet, View} from 'react-native';

import AddButton from '../atoms/buttons/AddButton';
import {Header, ProductCard} from '../molecules';

const Home = () => {
  return (
    <>
      <Header />

      <View style={styles.wrapperCadastrar}>
        <AddButton
          label="Cadastrar"
          onPress={() => console.log('Hello World')}
        />
      </View>

      <ProductCard />
    </>
  );
};

const styles = StyleSheet.create({
  wrapperCadastrar: {
    width: '30%',
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default Home;
