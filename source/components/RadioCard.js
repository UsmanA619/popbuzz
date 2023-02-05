import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/design/colors";

export default function RadioCard({
  description,
  image,
  subTitle,
  tagline,
  title,
}) {
  return (
    <View style={styles.radioCard}>
      <TouchableOpacity style={styles.radioCard_forYou}>
        <Image source={require("../assets/ForYou.png")} />
      </TouchableOpacity>
      <View style={styles.radioCard_popBuzz_music}>
        <Image source={require("../assets/AppleSmall.png")} />
        <Text style={styles.radioCard_popBuzz_musictxt}>Music</Text>
      </View>
      <Text style={styles.radioCard_tagline}>{tagline}</Text>
      <View style={styles.radioCard_innerCard}>
        <Image style={styles.radioCard_innerCard_img} source={image} />
        <View style={styles.radioCard_innerCard_bottom}>
          <View style={{ width: 195 }}>
            <Text style={styles.radioCard_innerCard_bottom_txt}>{title}</Text>
            <Text style={styles.radioCard_innerCard_bottom_centertxt}>
              {subTitle}
            </Text>
            <Text style={styles.radioCard_innerCard_bottom_txt}>
              {description}
            </Text>
          </View>
          <TouchableOpacity style={styles.radioCard_innerCard_bottom_playbtn}>
            <Image source={require("../assets/RadioPlay.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  radioCard: {
    height: 370,
    position: "relative",
    marginTop: 5,
  },
  radioCard_forYou: {
    position: "absolute",
    top: 16,
    right: 24,
    backgroundColor: "#3D3D3D",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  radioCard_popBuzz_music: { display: "flex", flexDirection: "row" },
  radioCard_popBuzz_musictxt: {
    fontWeight: "600",
    fontSize: 20,
    color: colors.white,
    marginLeft: 5,
  },
  radioCard_tagline: {
    fontWeight: "300",
    fontSize: 14,
    color: colors.white,
    marginTop: 2,
  },
  radioCard_innerCard: {
    height: 350,
    borderRadius: 8,
    marginTop: 10,
    overflow: "hidden",
  },
  radioCard_innerCard_img: { width: "100%", height: 246 },
  radioCard_innerCard_bottom: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 10,
    position: "relative",
  },
  radioCard_innerCard_bottom_txt: {
    color: "#EFEFEF",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "300",
  },
  radioCard_innerCard_bottom_centertxt: {
    color: "#EFEFEF",
    fontSize: 14,
    lineHeight: 18,
  },
  radioCard_innerCard_bottom_playbtn: {
    position: "absolute",
    right: 23,
    bottom: 26,
  },
});
