import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Text = styled.Text``;

const Touchable = styled.TouchableOpacity``;

export default ({ navigation }) => (
    <View>
        <Text>Auth Home</Text>
        <Touchable onPress={() => navigation.navigate("Login")}>
            <Text>Go to Login</Text>
        </Touchable>
        <Touchable onPress={() => navigation.navigate("Signup")}>
            <Text>Go to Signup</Text>
        </Touchable>
    </View>
);

