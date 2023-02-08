import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SubtitleProps {
  children: string
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 15
  }
});

export default Subtitle;
