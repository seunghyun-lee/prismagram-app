import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notification from "../screens/Notifications";
import Profile from "../screens/Profile";

const TabNavigation = createBottomTabNavigator({
    Home,
    Search,
    Add: {
        screen: View,
        navigationOptions: {
            tabBarOnPress: () => {
                console.log("Add");
            }
        }
    },
    Notification,
    Profile
});

export default createAppContainer(TabNavigation);