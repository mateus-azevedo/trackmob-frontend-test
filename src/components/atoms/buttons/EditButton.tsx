import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface EditButtonProps {
  onPress: () => void;
}

const EditButton = ({onPress}: EditButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text>edit</Text>
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

export default EditButton;
