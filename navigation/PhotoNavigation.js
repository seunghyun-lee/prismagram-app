import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const PhotoTab = createMaterialTopTabNavigator(
    {
        SelectPhoto,
        TakePhoto
    },
    {
        tabBarPosition: "bottom"
    }
);

export default createStackNavigator({
    PhotoTab,
    UploadPhoto
});
