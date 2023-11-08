import { FC } from "react";
import { View, StyleSheet } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => (
  <View style={styles.layoutContainer}>{children}</View>
);

const styles = StyleSheet.create({
  layoutContainer: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    flex: 1,
  },
});
