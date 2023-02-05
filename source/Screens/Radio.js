import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Screen from "../components/Screen";
import colors from "../config/design/colors";
import Heading2 from "../components/headings/Heading2";
import Divider from "../components/Divider";
import RadioCard from "../components/RadioCard";

export default function Radio() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 69,
            backgroundColor: "#32AAF4",
            marginTop: 20,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={require("../assets/AppleSmall.png")} />
            <Text
              style={{ fontWeight: "600", fontSize: 20, color: colors.white }}
            >
              Music
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              color: colors.white,
              marginTop: -5,
            }}
          >
            Try it now and get 1 month free
          </Text>
        </View>
        <View style={{marginBottom: 50}}>
          <Heading2>Radio</Heading2>

          <Divider mTop={20} />

          <RadioCard
            tagline="The new music that matters"
            image={require("../assets/RadioCardCover.png")}
            title="Live 3-5AM"
            subTitle="Today's Chill"
            description="Songs that reduces the sound of chill on a daily basis"
          />

          <Divider mTop={80} />

          <RadioCard
            tagline="The new music that matters"
            image={require("../assets/RadioCardCover1.png")}
            title="Live 3-5AM"
            subTitle="Today's Chill"
            description="Songs that reduces the sound of chill on a daily basis"
          />

          <Divider mTop={80} />

          <RadioCard
            tagline="The new music that matters"
            image={require("../assets/RadioCardCover2.png")}
            title="Live 3-5AM"
            subTitle="Today's Chill"
            description="Songs that reduces the sound of chill on a daily basis"
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
