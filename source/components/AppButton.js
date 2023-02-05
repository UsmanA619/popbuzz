import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/design/colors";

export default function AppButton({
  pVertical = 5,
  style,
  fontsize = 15,
  fontweight = "600",
  title,
  variant = "text",
  onPress = () => null,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text
        style={[
          styles.btn_txt,
          variant === "outlined"
            ? styles.outlined
            : variant === "contained"
            ? styles.contained
            : styles.text,
          {
            paddingVertical: pVertical,
            fontSize: fontsize,
            fontWeight: fontweight,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 30,
  },
  btn_txt: {
    textAlign: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    color: colors.primary,
  },
  contained: {
    color: colors.white,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  outlined: {
    color: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
