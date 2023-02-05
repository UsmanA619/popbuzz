import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../../config/design/colors";
import AppIcon from "../../AppIcon";
import Divider from "../../Divider";

export default function PlaylistListItem({
  title = "Untitled Playlist",
  image,
}) {
  return (
    <>
      <TouchableOpacity style={styles.cover_container}>
        {image ? (
          <Image style={styles.cover} source={image} />
        ) : (
          <View style={styles.cover}>
            <Image
              style={styles.cover_img}
              source={require("../../../assets/MusicNoteList.png")}
            />
          </View>
        )}
        <View style={styles.cover_title_container}>
          <Text style={styles.cover_title}>{title}</Text>
          <AppIcon iconColor={colors.medium} name="chevron-right" size={50} />
        </View>
      </TouchableOpacity>
      <Divider
        mTop={18}
        style={{
          height: 1,
          colors: "#f6f6f6",
          opacity: 1,
          marginLeft: "30%",
          marginBottom: 21,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cover_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  cover: {
    width: 91,
    height: 88,
    borderRadius: 5,
    backgroundColor: colors.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  cover_img: {
    width: 42,
    height: 42,
  },
  cover_title_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  cover_title: {
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 10,
    color: colors.white,
  },
});
