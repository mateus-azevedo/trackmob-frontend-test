import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ProductTagProps {
  children: string
}

const ProductTag = ({ children }: ProductTagProps) => {
  return <Text style={styles.productTag}>{children}</Text>;
};

const styles = StyleSheet.create({
  productTag: {
    fontSize: 15,
    fontStyle: 'italic'
  }
});

export default ProductTag;
