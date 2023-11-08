import { FC } from "react";
import { Text as TextRN, StyleSheet } from "react-native";

interface TextProps {
  children: React.ReactNode;
  fontSize?: number;
  color?: string;
}

export const Text: FC<TextProps> = ({ children, fontSize, color }) => {
  const styles = dynamicStyles({ fontSize, color });

  return <TextRN style={styles.text}>{children}</TextRN>;
};

const dynamicStyles = ({
  fontSize,
  color,
}: Pick<TextProps, "fontSize" | "color">) =>
  StyleSheet.create({
    text: {
      fontSize: fontSize || 14,
      color: color || "#000",
    },
  });
