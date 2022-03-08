import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Platform } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';


const ImageSelector = ({ onImage }) => {
    const [pickerResponse, setPickerResponse] = useState();
    const IS_IOS = Platform.OS === 'ios';

    const handleTakePicture = async () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        }

        let granted;

        if(IS_IOS) {
            granted = await request(PERMISSIONS.IOS.CAMERA);
        } else {
            granted = await request(PERMISSIONS.ANDROID.CAMERA);
        }

        if(granted === RESULTS.GRANTED) {
            launchCamera(options, (res) => {
                if(!res.didCancel && !res.error) {
                    setPickerResponse(res.assets[0]);
                    onImage && onImage(res.assets[0].uri);
                }
            })
        } else {
            console.warn('Permission denied')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickerResponse ? (<Text>No hay una imagen seleccionada</Text>) : (
                    <Image style={styles.image} source={{ uri: pickerResponse.uri }} />
                )}
            </View>
            <Button title="tomar foto" color='#6FA353' onPress={handleTakePicture} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#da627d',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImageSelector;