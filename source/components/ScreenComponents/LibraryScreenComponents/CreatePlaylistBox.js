import { Text, View } from "react-native";
import React from "react";

import AppButton from "../../../components/AppButton";
import Heading2 from "../../../components/headings/Heading2";
import colors from "../../../config/design/colors";

export default function CreatePlaylistBox({ onPress = () => null }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -25,
      }}
    >
      <View>
        <Heading2 style={{ textAlign: "center" }}>
          Looking for your playlists?
        </Heading2>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: colors.white,
            opacity: 0.8,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Playlists you create will apper here.
        </Text>
        <AppButton
          onPress={onPress}
          style={{
            height: 41,
            marginTop: 12,
            width: 285,
            marginLeft: 6,
          }}
          pVertical={10}
          fontsize={16}
          variant="contained"
          title="New Playlist"
        />
      </View>
    </View>
  );
}
