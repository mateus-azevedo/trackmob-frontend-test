import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ProductCategoryProps {
  children: string
}

const ProductCategory = ({ children }: ProductCategoryProps) => {
  return <Text style={styles.productCategory}>{children}</Text>;
};

const styles = StyleSheet.create({
  productCategory: {
    fontSize: 15
  }
});

export default ProductCategory;
