import { Image, StyleSheet, View, ScrollView } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import MainCard from "../components/MainCard";
import Heading2 from "../components/headings/Heading2";
import Heading3 from "../components/headings/Heading3";
import CoverArtMedium from "../components/CoverArtMedium";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <Screen>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: 20 }}>
          <View style={styles.header}>
            <Heading2>Listen Now</Heading2>
            <Image source={require("../assets/PersonCircle.png")} />
          </View>
          <MainCard />
          <View style={{ marginTop: 72 }}>
            <Heading3>New Songs Added</Heading3>
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <CoverArtMedium
                image={require("../assets/CoverMedium1.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium2.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
                style={{ marginLeft: 10 }}
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium1.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
                style={{ marginLeft: 10 }}
              />
            </View>
            <Divider mTop={21} />
            <View style={{ flexDirection: "row", marginTop: 57 }}>
              <CoverArtMedium
                image={require("../assets/CoverMedium1.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium2.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
                style={{ marginLeft: 10 }}
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium1.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
                style={{ marginLeft: 10 }}
              />
            </View>
            <Divider mTop={21} />
            <Heading3 style={{ marginTop: 21 }}>Albums We Love</Heading3>
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <CoverArtMedium
                image={require("../assets/CoverMedium1.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium2.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
                style={{ marginLeft: 10 }}
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium1.png")}
                title="Today's Hit"
                subTitle="Apple Music Hits"
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 125,
  },
});
