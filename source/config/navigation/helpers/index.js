import { Image } from "react-native";
import colors from "../../design/colors";

// const importFromAsset = (assetName, assetExt = "png") => {
//     const uri = `../../../assets/${assetName}.${assetExt}`;
//     return require(uri);
// };

export const defaultTabBarStyle = {
    height: 70,
    backgroundColor: colors.secondary,
    borderTopWidth: 0.5,
    borderTopColor: "#806e6e",
    paddingBottom: 12,
};

export const defalutTabNavigatorOptions = ({ route }) => ({
    tabBarHideOnKeyboard: true,
    tabBarIcon: ({ focused }) => {
        let image;

        if (route.name === "Library") {
            image = focused
                ? require("../../../assets/LibraryIconTabFocused.png")
                : require("../../../assets/LibraryIconTab.png");
        } else if (route.name === "Search") {
            image = focused
                ? require("../../../assets/SearchTabFocused.png")
                : require("../../../assets/SearchTab.png");
        } else if (route.name === "Listen") {
            image = focused
                ? require("../../../assets/PlayCircleTabFocused.png")
                : require("../../../assets/PlayCircleTab.png");
        } else {
            image = focused
                ? require("../../../assets/RadioTabFocused.png")
                : require("../../../assets/RadioTab.png");
        }

        return (
            <Image
                style={{ width: 25, height: 25, marginBottom: -10 }}
                source={image}
            />
        );
    },
    tabBarActiveTintColor: "#0077C0",
    tabBarInactiveTintColor: "#707070",
    tabBarStyle: defaultTabBarStyle,
    headerShown: false,
    unmountOnBlur: false,
});