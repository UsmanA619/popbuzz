import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import Heading3 from "./headings/Heading3";
import colors from "../config/design/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  title,
  description,
  image,
  IconComponent,
  mTop = 0,
  mBottom = 0,
  pTop = 0,
  pBottom = 0,
  onPress = () => console.log("working"),
}) {
  return (
    <TouchableHighlight
      style={{
        marginTop: mTop,
        marginBottom: mBottom,
        paddingTop: pTop,
        paddingBottom: pBottom,
        borderRadius: 5
      }}
      underlayColor={colors.underLay}
      onPress={onPress}
    >
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailContainer}>
          <Heading3 style={styles.title} numberOfLines={1}>
            {title}
          </Heading3>
          {description && (
            <Heading3 style={styles.description} numberOfLines={2}>
              {description}
            </Heading3>
          )}
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          color={colors.medium}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 2,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
  },
  description: {
    color: colors.medium,
  },
  title: {
    marginTop: -2,
  },
});

export default ListItem;
