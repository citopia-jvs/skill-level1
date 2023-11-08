import { useEffect } from "react";
import {
  Keyboard,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "react-native-toast-notifications";
import isEqual from "lodash/isEqual";
import { useIsFocused } from "@react-navigation/native";

import { UPDATE_USER_INFO } from "~store/actions";
import { useAppSelector } from "~/hooks/useAppSelector";
import { useAppDispatch } from "~/hooks/useAppDispatch";
import { UserInfo } from "~services/user/types";
import { Layout } from "~components/Layout";
import { Input } from "~components/Input";

export const ProfileScreen = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);

  const userInfoForForm = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
  };

  const {
    control,
    watch,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    },
    mode: "onChange",
  });

  const watchedValues = watch();

  const hasChanges = () => {
    return !isEqual(watchedValues, userInfoForForm);
  };

  const validation = {
    firstName: {
      required: "Ce champ est obligatoire",
    },
    lastName: {
      required: "Ce champ est obligatoire",
    },
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      if (!isValid) {
        reset(userInfoForForm);
      } else if (isValid && hasChanges()) {
        updateUser(watchedValues);
      }
    }
  }, [isFocused]);

  const updateUser = (userForm: UserInfo) => {
    if (isValid && hasChanges()) {
      toast.show("UPDATED_USER_INFO");
      dispatch({ type: UPDATE_USER_INFO, payload: { ...userForm, id: 2 } });
    }
  };

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                error={errors.lastName}
                errorMessage={errors.lastName?.message}
              />
            )}
          />
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 20,
    flex: 1,
  },
});
