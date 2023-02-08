import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface EditButtonProps {
  onPress: () => void
}

const EditButton = ({ onPress }: EditButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <FeatherIcon name="edit" size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 1,
    borderRadius: 5
  }
});

export default EditButton;
