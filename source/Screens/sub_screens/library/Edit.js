import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { DragSortableView } from "react-native-drag-sort";

import Screen from "../../../components/Screen";
import Heading1 from "../../../components/headings/Heading1";
import Divider from "../../../components/Divider";
import AppButton from "../../../components/AppButton";
import DragableList from "../../../components/ScreenComponents/LibraryScreenComponents/DragableList";

const library_sorting_options = [
  {
    id: 1,
    image: require("../../../assets/MusicNoteList.png"),
    name: "Playlist",
  },
  {
    id: 2,
    image: require("../../../assets/Mic.png"),
    name: "Artists",
  },
  {
    id: 3,
    image: require("../../../assets/Albums.png"),
    name: "Albums",
  },
  {
    id: 4,
    image: require("../../../assets/MusicNoteList.png"),
    name: "Songs",
  },
  {
    id: 5,
    image: require("../../../assets/Monitor.png"),
    name: "Tv & Movies",
  },
  {
    id: 6,
    image: require("../../../assets/MonitorMusic.png"),
    name: "Music",
  },
  {
    id: 7,
    image: require("../../../assets/Home.png"),
    name: "Home",
  },
  {
    id: 8,
    image: require("../../../assets/Music.png"),
    name: "Composers",
  },
];

export default function Edit({ navigation }) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  // const [libraryOptions, setLibraryOptions] = useState([]);

  const current_width = Dimensions.get("window").width;

  const handleUpdateListSorting = () => {
    // setLibraryOptions(libraryOptions);
    navigation.goBack();
  };

  return (
    <Screen pHorizontal={0}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppButton
          onPress={handleUpdateListSorting}
          title="Done"
          variant="text"
          style={styles.btn}
        />
        <Heading1 style={{ marginTop: 69, marginLeft: 26 }}>Library</Heading1>

        <Divider style={{ marginHorizontal: 23 }} mTop={8} />

        <DragSortableView
          dataSource={library_sorting_options}
          parentWidth={current_width}
          childrenWidth={current_width}
          childrenHeight={50}
          delayLongPress={1}
          // onDataChange={(data) => console.log(data)}
          keyExtractor={(item) => item.id}
          renderItem={(item, index) => {
            return (
              <DragableList
                style={{ marginHorizontal: 23 }}
                checkedState={{ isCheckboxChecked, setIsCheckboxChecked }}
                key={index}
                item={item}
              />
            );
          }}
        />
        <View style={{ height: 10 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 15,
    right: 11,
    marginRight: 23,
  },
});
