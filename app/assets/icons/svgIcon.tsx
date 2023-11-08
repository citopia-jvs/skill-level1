import React, { FC } from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export type SvgIconProps = Omit<XmlProps, "xml">;

export const SvgIcon: FC<XmlProps> = ({ color, width, height, ...props }) => {
  return (
    <SvgXml
      fill={color}
      color={color}
      width={width ?? "100%"}
      height={height ?? "100%"}
      {...props}
    />
  );
};
