import { View, Text } from "react-native";

import { useAppSelector } from "~hooks/useAppSelector";

export const HomeScreen = () => {
  const userInfo = useAppSelector((state) => state.user);

  return (
    <View>
      <Text>Bonjour {userInfo.firstName}</Text>
    </View>
  );
};
