import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CoverArtMedium({ image, title, style, subTitle }) {
  return (
    <View style={[{ width: 142 }, style]}>
      <Image style={styles.image} resizeMode="cover" source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 142,
    borderWidth: 1,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
  },
  subTitle: { color: "white", fontSize: 16, fontWeight: "100" },
});
