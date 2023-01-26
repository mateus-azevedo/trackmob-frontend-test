import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface AddButtonProps {
  label?: string;
  onPress: () => void;
}

const AddButton = ({label = 'Button', onPress}: AddButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Text style={styles.addIcon}>+</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    marginRight: 5,
  },
  label: {
    fontSize: 20,
  },
});

export default AddButton;
