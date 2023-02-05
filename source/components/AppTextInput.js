import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/design/colors";

function AppTextInput({
  icon,
  placeholder,
  size = 44,
  style,
  width = "100%",
  textcolor = colors.white,
  fontsize = 16,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { height: size, width: width }, style]}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={"#a3a3a3"}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={textcolor}
        style={[styles.text, { color: colors.white, fontSize: fontsize }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    marginTop: -2,
  },
});

export default AppTextInput;
