import React, { useState } from "react";
import Axios from "axios";
import { Image, ActivityIndicator, Alert } from "react-native";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import styles from "../../styles";
import constants from "../../constants";

const View = styled.View`
    flex: 1;
`;

const Container = styled.View`
    padding: 20px;
    flex-direction: row;
`;

const Form =styled.View`
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
`;

const STextInput = styled.TextInput`
    margin-bottom: 10px;    
    border: 0px solid ${styles.lightGreyColor};
    border-bottom-width: 1px;
    padding-bottom: 10px;
    width: ${constants.width - 150}px;
`;

const Button = styled.TouchableOpacity`
    background-color: ${props => props.theme.blueColor};
    padding: 10px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    color: white;
    font-weight: 600;
`;

export default ({ navigation }) => {
    const [loading, setIsLoading] = useState(false);
    const [fileUrl, setFileUrl] = useState("");
    const photo = navigation.getParam("photo");
    const captionInput = useInput("");
    const locationInput = useInput("");
    const handleSubmit = async () => {
        if (captionInput.value === "" || locationInput.value === "") {
            Alert.alert("All fields are required");
        }
        const formData = new FormData();
        const name = photo.filename;
        const [, type] = name.split(".");
        formData.append("file", {
            name,
            type: type.toLowerCase(),
            uri: photo.uri
        });
        try {
            const {
                data: { location }
            } = await Axios.post("http://localhost:4000/api/upload", formData, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            });
            setFileUrl(location);
        } catch (e) {
            Alert.alert("Can't upload", "Try later");
        }
    };
    return (
        <View>
            <Container>
                <Image
                    source={{ uri: photo.uri }}
                    style={{ height: 80, width: 80, marginTop: 30 }}
                />
                <Form>
                    <STextInput 
                        onChangeText={captionInput.onChange}
                        value={captionInput.value}
                        placeholder="Caption"
                        multiline={true}
                        placeholderTextColor={styles.darkGreyColor}
                    />
                    <STextInput 
                        onChangeText={locationInput.onChange}
                        value={locationInput.value}
                        placeholder="Location"
                        multiline={true}
                        placeholderTextColor={styles.darkGreyColor}
                    />
                    <Button onPress={handleSubmit}>
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text>upload</Text>
                        )}
                    </Button>
                </Form>
            </Container>    
        </View>
    );
};