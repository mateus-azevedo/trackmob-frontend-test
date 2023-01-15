import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface DeleteButtonProps {
  onPress: () => void;
}

const DeleteButton = ({onPress}: DeleteButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text>delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
});

export default DeleteButton;
