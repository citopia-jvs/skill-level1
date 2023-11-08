import { useAppSelector } from "~hooks/useAppSelector";
import { Layout } from "~components/Layout";
import { Text } from "~components/Text";

export const HomeScreen = () => {
  const userInfo = useAppSelector((state) => state.user);

  return (
    <Layout>
      <Text fontSize={24}>Bonjour {userInfo.firstName}</Text>
    </Layout>
  );
};
