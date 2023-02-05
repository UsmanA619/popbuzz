import { StyleSheet, Text } from "react-native";
import React from "react";

import colors from "../../config/design/colors";

export default function Heading3({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "normal",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
  },
});
