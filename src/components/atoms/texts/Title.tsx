import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface TitleProps {
  children: string;
}

const Title = ({children}: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Title;
