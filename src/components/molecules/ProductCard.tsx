import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import DeleteButton from '../atoms/buttons/DeleteButton';
import EditButton from '../atoms/buttons/EditButton';

import ProductCategory from '../atoms/texts/ProductCategory';
import ProductName from '../atoms/texts/ProductName';
import ProductPrice from '../atoms/texts/ProductPrice';
import ProductTag from '../atoms/texts/ProductTag';

type ProductCardProps = {
  name: string;
  price: number;
  category: string;
  tags: string[];
};

const ProductCard = ({category, name, price, tags}: ProductCardProps) => {
  return (
    <View style={styles.productWrapper}>
      <View style={styles.productImage} />

      <View style={styles.productContent}>
        <View style={styles.productHeader}>
          <ProductName>{name}</ProductName>
          <ProductPrice>{`R$ ${price}`}</ProductPrice>
        </View>

        <View style={styles.productBody}>
          <ProductCategory>{category}</ProductCategory>
        </View>

        <View style={styles.productFooter}>
          <ScrollView horizontal style={styles.productTags}>
            {tags.map(tag => {
              return <ProductTag>{`#${tag}`}</ProductTag>;
            })}
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
