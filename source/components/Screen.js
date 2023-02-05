import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";

import colors from "../config/design/colors";

function Screen({
  backgroundColor = colors.dark,
  children,
  pHorizontal = 23,
  style,
}) {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        { backgroundColor: backgroundColor, paddingHorizontal: pHorizontal },
      ]}
    >
      <View style={[styles.fullScreen, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    Flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  fullScreen: {
    height: "100%",
    width: "100%",
  },
});

export default Screen;
