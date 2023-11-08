import { StyleSheet, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { UPDATE_USER_INFO } from "~store/actions";
import { useAppSelector } from "~/hooks/useAppSelector";
import { useAppDispatch } from "~/hooks/useAppDispatch";
import { UserInfo } from "~services/user/types";
import { Layout } from "~components/Layout";
import { Input } from "~components/Input";
import { Text } from "~components/Text";

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
    <Layout>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="firstName"
          rules={validation["firstName"]}
          render={({ field: { onChange, value } }) => (
            <Input
              label="First Name"
              placeholder="First Name"
              value={value}
              onChange={onChange}
              onBlur={handleSubmit(updateUser)}
              error={errors.firstName}
              errorMessage={errors.firstName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          rules={validation["lastName"]}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Last Name"
              placeholder="Last Name"
              value={value}
              onChange={onChange}
              onBlur={handleSubmit(updateUser)}
              error={errors.lastName}
              errorMessage={errors.lastName?.message}
            />
          )}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 20,
  },
});
