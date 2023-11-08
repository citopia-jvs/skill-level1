import React, { FC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { Text } from "~components/Text";
import { CrossSvg } from "~assets/icons/cross";

type ClassicToastProps = {
  title: string;
  description: string;
  onHide?: () => void;
  onPress?: () => void;
};

export const ClassicToast: FC<ClassicToastProps> = ({
  title,
  description,
  onHide,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.toastContainer}>
      <TouchableOpacity onPress={onHide} style={styles.crossIconContainer}>
        <CrossSvg fill="#fff" />
      </TouchableOpacity>

      <Text color="#fff" fontSize={16} fontWeight="600">
        {title}
      </Text>
      <Text color="#fff">{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    width: "98%",
    backgroundColor: "#048848",
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  crossIconContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1,
  },
});
