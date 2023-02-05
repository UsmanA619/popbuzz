import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import Heading2 from "../components/headings/Heading2";
import Divider from "../components/Divider";
import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";
import AlbumCoverMedium from "../components/AlbumCoverMedium";

export default function Library({ navigation }) {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppButton
          onPress={() => navigation.navigate("Edit")}
          variant="text"
          style={styles.btn}
          title="Edit"
        />
        <Heading2 style={{ marginTop: 130, fontSize: 20 }}>Library</Heading2>
        <Divider mTop={10} />
        <ListItem
          onPress={() =>
            navigation.navigate("Playlist", { previous_screen: "Library" })
          }
          title="Playlist"
          image={require("../assets/MusicNoteList.png")}
          mTop={10}
        />
        <Divider mTop={10} />
        <ListItem
          title="Artists"
          image={require("../assets/Mic.png")}
          mTop={10}
        />
        <Divider mTop={10} />
        <ListItem
          title="Songs"
          image={require("../assets/Music.png")}
          mTop={10}
        />
        <Divider mTop={10} />
        <ListItem
          title="Downloaded"
          image={require("../assets/Downloading.png")}
          mTop={10}
        />
        <Divider mTop={10.1} />
        <View>
          <Heading2 style={{ marginTop: 45, fontSize: 20, marginBottom: 17 }}>
            Recently Added
          </Heading2>
          <AlbumCoverMedium
            image={require("../assets/AlbumCover.png")}
            title="Unkown Album"
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 50,
    right: 22,
  },
});
