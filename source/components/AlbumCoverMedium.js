import { Image, Text, View } from "react-native";
import React from "react";
import colors from "../config/design/colors";

export default function AlbumCoverMedium({ image, title }) {
  return (
    <View style={{ width: 156, marginLeft: 2 }}>
      <Image style={{ width: "100%", borderRadius: 5 }} source={image} />
      <Text
        style={{
          color: colors.white,
          fontSize: 14,
          fontWeight: "600",
          paddingTop: 5,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
