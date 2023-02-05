import {
  Alert,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Heading1 from "../../../components/headings/Heading1";
import colors from "../../../config/design/colors";

import CreatePlaylistBox from "../../../components/ScreenComponents/LibraryScreenComponents/CreatePlaylistBox";
import PlaylistListItem from "../../../components/ScreenComponents/LibraryScreenComponents/PlaylistListItem";
import AppTextInput from "../../../components/AppTextInput";
import Heading3 from "../../../components/headings/Heading3";
import AppButton from "../../../components/AppButton";
import AppIcon from "../../../components/AppIcon";
import Divider from "../../../components/Divider";

export default function Playlist() {
  const [modalVisible, setModalVisible] = useState(false);
  const [havePlaylist, setHavePlaylist] = useState(false);

  return (
    <>
      <View style={{ backgroundColor: colors.dark, flex: 1, paddingLeft: 25 }}>
        <Heading1 style={{ marginTop: 10 }}>Playlist</Heading1>

        <AppTextInput
          textcolor={"#a3a3a3"}
          style={{ height: 40 }}
          fontsize={16}
          width="95%"
          icon="search"
          placeholder="Artists, Song, Lyrics,and More"
        />

        {havePlaylist ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 40 }}
          >
            <PlaylistListItem
              image={require("../../../assets/CoverMedium2.png")}
              title="J-Cole's Super hits"
            />
            <PlaylistListItem />
          </ScrollView>
        ) : (
          <CreatePlaylistBox onPress={() => setModalVisible(true)} />
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
          statusBarTranslucent
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerModalContainer}>
              <View style={styles.Modalheader}>
                <AppButton
                  fontweight="800"
                  onPress={() => setModalVisible(!modalVisible)}
                  title="Cancel"
                />
                <Heading3 style={styles.createPlaylistModalBtn}>
                  Create Playlist
                </Heading3>
                <AppButton
                  onPress={() => {
                    setHavePlaylist(true);
                    setModalVisible(!modalVisible);
                  }}
                  fontweight="800"
                  title="Done"
                />
              </View>
              <View style={styles.modalBody}>
                <View style={styles.imgCover}>
                  <ImageBackground
                    style={styles.imgCoverDefaultImg}
                    imageStyle={{ width: "100%", height: "100%" }}
                    source={require("../../../assets/MusicNoteGrey.png")}
                  >
                    <TouchableOpacity style={styles.cameraIconContainer}>
                      <AppIcon name="camera" iconColor="#626161" size={50} />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
                <View style={styles.sectionTwo}>
                  <TextInput
                    style={styles.playlistNameInp}
                    placeholder="Playlist Name"
                    placeholderTextColor="#A4A3A3"
                  />
                  <Divider
                    mTop={50}
                    style={{ width: "150%", marginLeft: 100 }}
                  />
                  <TextInput
                    style={styles.playlistDescriptionInp}
                    placeholder="Description"
                    placeholderTextColor="#A4A3A3"
                  />
                  <Divider
                    mTop={25}
                    style={{ width: "150%", marginLeft: 100 }}
                  />

                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: "100%",
                      marginTop: 26,
                      alignItems: "center",
                      marginLeft: -30,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#16ec6b",
                        width: 24,
                        height: 24,
                        borderRadius: 24 / 2,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AppIcon name="plus" iconColor={colors.dark} size={30} />
                    </View>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 14,
                        fontweight: "500",
                        paddingLeft: 5,
                      }}
                    >
                      Add Music
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: { backgroundColor: colors.black, flex: 1 },
  innerModalContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 20,
    backgroundColor: colors.dark,
    borderRadius: 10,
    marginHorizontal: 2,
    alignItems: "center",
  },
  Modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  createPlaylistModalBtn: { fontSize: 16, fontWeight: "800" },
  modalBody: {
    flex: 1,
    justifyContent: "center",
  },
  imgCover: {
    width: 250,
    height: 250,
    backgroundColor: colors.medium,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  imgCoverDefaultImg: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIconContainer: {
    backgroundColor: colors.white,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
  },
  playlistNameInp: {
    color: colors.white,
    width: "100%",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginLeft: 20,
  },
  playlistDescriptionInp: {
    color: colors.white,
    width: "100%",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 26.5,
  },
  sectionTwo: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    marginLeft: -20,
  },
});
