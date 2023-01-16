import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface DeleteButtonProps {
  onPress: () => void;
}

const DeleteButton = ({onPress}: DeleteButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <FontAwesomeIcon name="trash" size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'gray',
    paddingHorizontal: 4,
    borderRadius: 5,
  },
});

export default DeleteButton;
