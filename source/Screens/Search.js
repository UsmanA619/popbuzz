import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import colors from "../config/design/colors";
import Heading2 from "../components/headings/Heading2";
import AppTextInput from "../components/AppTextInput";
import MainCard from "../components/MainCard";
import CoverArtMedium from "../components/CoverArtMedium";
import Heading3 from "../components/headings/Heading3";

export default function Search() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 20 }}>
          <View>
            <Heading2 style={{ color: colors.white, marginTop: 98 }}>
              Search
            </Heading2>
            <AppTextInput
              icon="search"
              placeholder="Artistis, Song, Lyrics,and More"
            />
            <MainCard
              tagline="Get your entire music library on all your device"
              subtagline1="Get 1 month of free music"
            />
          </View>
          <View>
            <Heading3
              style={{
                marginTop: 50,
                marginBottom: 15,
                paddingLeft: 2,
              }}
            >
              New Songs Added
            </Heading3>
            <View
              style={{
                paddingHorizontal: 23,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CoverArtMedium
                image={require("../assets/CoverMedium1.png")}
                title="Todays Hit"
                subTitle="Apple Music Hits"
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium2.png")}
                title="Todays Hit"
                subTitle="Apple Music Hits"
              />
            </View>
            <View
              style={{
                paddingHorizontal: 23,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <CoverArtMedium
                image={require("../assets/CoverMedium3.png")}
                title="Todays Hit"
                subTitle="Apple Music Hits"
              />
              <CoverArtMedium
                image={require("../assets/CoverMedium4.png")}
                title="Todays Hit"
                subTitle="Apple Music Hits"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
