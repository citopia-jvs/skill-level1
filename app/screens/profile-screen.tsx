import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { UPDATE_USER_INFO } from "~store/actions";
import { useAppSelector } from "~/hooks/useAppSelector";
import { useAppDispatch } from "~/hooks/useAppDispatch";

export const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);

  const [userForm, setUserForm] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
  });

  const handleInputChange = (field: keyof typeof userForm, value: string) => {
    setUserForm({ ...userForm, [field]: value });
  };

  const handleSubmit = () => {
    dispatch({ type: UPDATE_USER_INFO, payload: { ...userForm, id: 2 } });
  };

  return (
    <View>
      <Text>First Name</Text>
      <TextInput
        value={userForm.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
        onBlur={handleSubmit}
        style={styles.input}
      />
      <Text>Last Name</Text>
      <TextInput
        value={userForm.lastName}
        onChangeText={(value) => handleInputChange("lastName", value)}
        onBlur={handleSubmit}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { borderWidth: 1, paddingVertical: 10 },
});
