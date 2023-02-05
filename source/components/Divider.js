import { StyleSheet, View } from "react-native";
import React from "react";

export default function Divider({ style, mTop = 0 }) {
  return <View style={[styles.divider, style, { marginTop: mTop }]} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundColor: "#B79D9D",
    opacity: 0.6,
    width: "100%",
  },
});
