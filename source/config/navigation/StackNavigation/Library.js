import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import Library from "../../../Screens/Library";
import Edit from "../../../Screens/sub_screens/library/Edit";
import Playlist from "../../../Screens/sub_screens/library/Playlist";
import colors from "../../design/colors";
import AppIcon from "../../../components/AppIcon";
import { useState } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { defaultTabBarStyle } from "../helpers";

const Stack = createStackNavigator();

const sort_options = [
  "Title",
  "Recently Added",
  "Newest First",
  "Oldest First",
];

export default function LibraryScreen({ navigation, route }) {
  const [selectedSortItem, setSelectedSortItem] = useState("Title");

  const tabHiddenRoutes = ["Edit", "Playlist"];

  React.useLayoutEffect(() => {

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: defaultTabBarStyle
      });
    }

  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }} initialRouteName="Main">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Library}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Edit"
        component={Edit}
      />
      <Stack.Screen
        name="Playlist"
        component={Playlist}
        options={({ route, navigation }) => ({
          headerStyle: {
            height: 60,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: colors.dark,
          },
          headerLeft: null,
          headerTitle: (props) => (
            <TouchableOpacity onPress={() => navigation.goBack()} {...props}>
              <Text style={styles.headerTitle}>
                <Image
                  style={styles.back_arrow}
                  source={require("../../../assets/BackArrow.png")}
                />
                {"  "}
                {route.params?.previous_screen}
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <SelectDropdown
              defaultButtonText="Sort"
              buttonTextAfterSelection={() => "Sort"}
              statusBarTranslucent
              data={sort_options}
              onSelect={(selectedItem) => setSelectedSortItem(selectedItem)}
              renderCustomizedRowChild={(item, index) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderBottomWidth:
                        sort_options.length === index + 1 ? 0 : 1,
                      borderColor: colors.secondary,
                    }}
                  >
                    {selectedSortItem == item ? (
                      <AppIcon
                        style={{ paddingBottom: 0 }}
                        size={30}
                        name="check"
                      />
                    ) : (
                      <View style={{ width: 30 }} />
                    )}

                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "400",
                        fontSize: 14,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                );
              }}
              buttonStyle={{ backgroundColor: "transparent" }}
              buttonTextStyle={{
                color: colors.primary,
                fontSize: 16,
                fontWeight: "800",
                textAlign: "right",
                marginRight: 10,
              }}
              dropdownStyle={{
                borderRadius: 8,
                marginRight: 10,
                overflow: "hidden",
                backgroundColor: "#3d3d3d",
              }}
              rowStyle={{
                height: 21,
                display: "flex",
                // alignItems: "flex-start",
                backgroundColor: "#3d3d3d",
                borderBottomWidth: 0,
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  back_arrow: {
    width: 7,
    height: 14,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginLeft: -5,
    color: colors.primary,
  },
  headerBtn: {
    marginRight: 10,
  },
});
