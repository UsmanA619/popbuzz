import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppIcon({ style, name = "", size = 40, iconColor = "#fff" }) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default AppIcon;
