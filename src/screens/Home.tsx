/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Tela Home</Text>

      <Button
        title="Navigate to EditProduct"
        onPress={() => {
          navigation.navigate('EditProduct');
        }}
      />
    </View>
  );
};

export default Home;
