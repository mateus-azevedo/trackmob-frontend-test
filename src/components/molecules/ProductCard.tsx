import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import DeleteButton from '../atoms/buttons/DeleteButton';
import EditButton from '../atoms/buttons/EditButton';

import ProductCategory from '../atoms/texts/ProductCategory';
import ProductName from '../atoms/texts/ProductName';
import ProductPrice from '../atoms/texts/ProductPrice';
import ProductTag from '../atoms/texts/ProductTag';

const ProductCard = () => {
  return (
    <View style={styles.productWrapper}>
      <View style={styles.productImage} />

      <View style={styles.productContent}>
        <View style={styles.productHeader}>
          <ProductName>Meu produto 1</ProductName>
          <ProductPrice>R$ 100,00</ProductPrice>
        </View>

        <View style={styles.productBody}>
          <ProductCategory>Categoria</ProductCategory>
        </View>

        <View style={styles.productFooter}>
          <ScrollView horizontal style={styles.productTags}>
            <ProductTag>#tag1</ProductTag>
            <ProductTag>#tag2</ProductTag>
            <ProductTag>#tag3</ProductTag>
            <ProductTag>#tag4</ProductTag>
            <ProductTag>#tag5</ProductTag>
            <ProductTag>#tag6</ProductTag>
            <ProductTag>#tag7</ProductTag>
            {/* <ProductTag>#tag8</ProductTag> */}
            {/* <ProductTag>#tag9</ProductTag> */}
          </ScrollView>

          <View style={styles.buttonsWrapper}>
            <DeleteButton onPress={() => console.log('Delete item')} />

            <View style={styles.buttonLeftMargin}>
              <EditButton onPress={() => console.log('Edit item')} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
  },
  productImage: {
    width: '35%',
    backgroundColor: 'red',
  },
  productContent: {
    padding: 5,
    width: '65%',
  },
  productHeader: {
    marginBottom: 10,
  },
  productBody: {
    marginBottom: 10,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTags: {
    flexDirection: 'row',
    marginRight: 10,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  buttonLeftMargin: {
    marginLeft: 10,
  },
});

export default ProductCard;
