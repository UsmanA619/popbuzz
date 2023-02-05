import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import colors from "../../../config/design/colors";

export default function DragableList({ checkedState, item, style }) {
  return (
    <View
      style={[
        {
          padding: 10,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          // borderWidth: 2,
          // borderColor: 'white',
          width: Dimensions.get("window").width - 35,
        },
        style,
      ]}
    >
      <Checkbox
        disabled={false}
        onValueChange={() =>
          checkedState.setIsCheckboxChecked(!checkedState.isCheckboxChecked)
        }
        value={checkedState.isCheckboxChecked}
        style={{
          marginRight: 10,
          width: 22,
          height: 22,
          borderRadius: 24 / 2,
          fontSize: 16,
          marginTop: -1,
        }}
        color={checkedState.isCheckboxChecked ? "#32AAF4" : "#736c6c"}
      />
      <Image style={{ width: 22, height: 22 }} source={item.image} />
      <Text
        style={{
          color: colors.white,
          fontSize: 20,
          fontWeight: "600",
          flex: 1,
          marginHorizontal: 10,
          marginTop: -3,
          // borderWidth: 2
        }}
      >
        {item.name}
      </Text>
      <Image
        style={{ width: 24, height: 24 }}
        source={require("../../../assets/Hamburger.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
