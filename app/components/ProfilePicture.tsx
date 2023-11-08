import { FC } from "React";
import { View, Image, StyleSheet } from "react-native";

interface ProfilePictureProps {
  uri: string;
  width?: number;
  height?: number;
  withBorder?: boolean;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({
  uri,
  width = 32,
  height = 32,
  withBorder,
}) => {
  const styles = dynamicStyles({ withBorder, width, height });
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
    </View>
  );
};

const dynamicStyles = ({
  withBorder,
  width,
  height,
}: Pick<ProfilePictureProps, "withBorder" | "width" | "height">) =>
  StyleSheet.create({
    imageContainer: {
      borderWidth: withBorder ? 1 : 0,
      borderColor: "#4F4F4F",
      padding: 2,
      borderRadius: 50,
    },
    image: {
      aspectRatio: 1,
      width,
      height,
      borderRadius: 50,
    },
  });
