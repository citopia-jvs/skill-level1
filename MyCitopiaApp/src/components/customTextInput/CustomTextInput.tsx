import React from 'react';
import styles from './customTextInput.styles';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import {type} from '../../../node_modules/axios/index.d';

type CustomTextInputProps = {
  label?: string;
  errorMessage?: string;
} & TextInputProps;

const CustomTextInput = ({
  errorMessage,
  label,
  ...props
}: CustomTextInputProps) => {
  return (
    <View style={[styles.container]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...props} style={styles.input} />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomTextInput;
