import { FC } from "react";
import { Text as TextRN, TextStyle, StyleSheet } from "react-native";

interface TextProps extends TextStyle {
  children: React.ReactNode;
  fontSize?: number;
  color?: string;
}

export const Text: FC<TextProps> = ({
  children,
  fontSize,
  fontWeight,
  color,
}) => {
  const styles = dynamicStyles({ fontSize, fontWeight, color });

  return <TextRN style={styles.text}>{children}</TextRN>;
};

const dynamicStyles = ({
  fontSize,
  fontWeight,
  color,
}: Pick<TextProps, "fontSize" | "color" | "fontWeight">) =>
  StyleSheet.create({
    text: {
      fontSize: fontSize || 14,
      fontWeight: fontWeight || "400",
      color: color || "#000",
    },
  });
