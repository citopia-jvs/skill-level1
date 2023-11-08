import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { UPDATE_USER_INFO } from "~store/actions";
import { useAppSelector } from "~/hooks/useAppSelector";
import { useAppDispatch } from "~/hooks/useAppDispatch";
import { UserInfo } from "~services/user/types";

export const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    },
    mode: "onChange",
  });

  const validation = {
    firstName: {
      required: "Ce champ est obligatoire",
    },
    lastName: {
      required: "Ce champ est obligatoire",
    },
  };

  const updateUser = (userForm: UserInfo) => {
    if (isValid) {
      dispatch({ type: UPDATE_USER_INFO, payload: { ...userForm, id: 2 } });
    }
  };

  return (
    <View>
      <Controller
        control={control}
        name="firstName"
        rules={validation["firstName"]}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text>First Name</Text>

            <TextInput
              placeholder="First Name"
              value={value}
              onChangeText={onChange}
              onBlur={handleSubmit(updateUser)}
              style={styles.input}
            />
          </View>
        )}
      />
      {errors.firstName && <Text>{errors.firstName.message}</Text>}

      <Controller
        control={control}
        name="lastName"
        rules={validation["lastName"]}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text>Last Name</Text>

            <TextInput
              placeholder="Last Name"
              value={value}
              onChangeText={onChange}
              onBlur={handleSubmit(updateUser)}
              style={styles.input}
            />
          </View>
        )}
      />
      {errors.lastName && <Text>{errors.lastName.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: { borderWidth: 1, paddingVertical: 10 },
});
