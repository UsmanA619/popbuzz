import * as React from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated } from "react-native";

import Home from "../../Screens/Home";
import Search from "../../Screens/Search";
import LibraryScreen from "./StackNavigation/Library";
import Radio from "../../Screens/Radio";
import { defalutTabNavigatorOptions } from "./helpers";

const FadeInView = (props) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0.9,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View // Special animatable View
      style={{
        flex: 1,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// Todo: Use This To Make Animation better
// const FadeHomeScreen = (props) => (
//   <FadeInView>
//     <Home {...props} />
//   </FadeInView>
// );

// const FadeLibraryScreen = (props) => (
//   <FadeInView>
//     <LibraryScreen {...props} />
//   </FadeInView>
// );

// const FadeSearchScreen = (props) => (
//   <FadeInView>
//     <Search {...props} />
//   </FadeInView>
// );

// const FadeRadioScreen = (props) => (
//   <FadeInView>
//     <Radio {...props} />
//   </FadeInView>
// );
// Todo: Use This To Make Animation better

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={defalutTabNavigatorOptions}
      >
        <Tab.Screen name="Listen" component={Home} />
        <Tab.Screen name="Radio" component={Radio} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
