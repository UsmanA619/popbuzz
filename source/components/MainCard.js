import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/design/colors";

export default function MainCard({
  tagline = "80 million songs to play or download. All ad-free",
  subtagline1 = "Try it free",
  subtagline2 = "1 month free trial, then US$4.99/month.",
}) {
  return (
    <LinearGradient
      colors={[
        "rgba(0, 119, 192, 0.65)",
        "rgba(0, 119, 192, 0.65)",
        "rgba(0, 119, 192, 0.1198)",
        "rgba(0, 119, 192, 0.15)",
      ]}
      locations={[0.1, 0.1, 0.5, 0.8]}
      style={styles.mainCard}
    >
      <View style={styles.mainCard_start}>
        <Text style={styles.mainCard_tagLine}>{tagline}</Text>
        <View style={styles.Music}>
          <Image
            style={styles.Music_logo}
            source={require("../assets/Apple.png")}
          />
          <Text style={styles.Music_text}>Music</Text>
        </View>
      </View>
      <View style={styles.mainCard_end}>
        <Text style={styles.mainCard_endLine}>
          {subtagline1} <Image source={require("../assets/VectorRight.png")} />
        </Text>
        <Text style={{ color: colors.white }}>{subtagline2}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainCard: {
    marginTop: 40,
    height: 374,
    borderRadius: 16,
    alignItems: "center",
    paddingTop: 61,
    justifyContent: "space-between",
  },
  mainCard_start: {
    width: "100%",
    alignItems: "center",
  },
  mainCard_tagLine: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "400",
    color: colors.white,
    paddingTop: 5,
    textAlign: "center",
    width: "65%",
  },
  Music: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 32,
  },
  Music_text: {
    fontSize: 64,
    marginTop: -15,
    marginLeft: -15,
    fontWeight: "400",
    color: colors.white,
  },
  Music_logo: {
    width: 64,
    height: 64,
  },
  mainCard_end: {
    paddingVertical: 14,
    alignItems: "center",
  },
  mainCard_endLine: {
    fontSize: 14,
    paddingBottom: 8,
    color: colors.white,
  },
});
