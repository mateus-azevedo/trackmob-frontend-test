import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface ProductPriceProps {
  children: string
}

const ProductPrice = ({ children }: ProductPriceProps) => {
  return <Text style={styles.productPrice}>{children}</Text>
}

const styles = StyleSheet.create({
  productPrice: {
    fontSize: 15
  }
})

export default ProductPrice
