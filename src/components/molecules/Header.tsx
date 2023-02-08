import React from 'react'
import { View, StyleSheet } from 'react-native'

import Title from '../atoms/texts/Title'
import Subtitle from '../atoms/texts/Subtitle'

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Title>Teste Trackmob Frontend</Title>
      <Subtitle>Meus Produtos</Subtitle>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FEFEFE'
  }
})

export default Header
