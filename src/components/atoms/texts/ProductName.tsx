import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface ProductNameProps {
  children: string;
}

const ProductName = ({children}: ProductNameProps) => {
  return <Text style={styles.productName}>{children}</Text>;
};

const styles = StyleSheet.create({
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProductName;
