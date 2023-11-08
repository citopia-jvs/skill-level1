import { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FieldError } from "react-hook-form";

import { Text } from "~components/Text";

interface InputProps {
  value: string;
  placeholder: string;
  label: string;
  error?: FieldError;
  errorMessage?: string;
  onChange: () => void;
  onBlur?: () => void;
}
export const Input: FC<InputProps> = ({
  value,
  placeholder,
  label,
  error,
  errorMessage,
  onChange,
  onBlur,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={styles.input}
      />
      {error && <Text color="red">{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    gap: 8,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 9,
    borderRadius: 4,
  },
});
