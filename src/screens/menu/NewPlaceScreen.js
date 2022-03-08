import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { addPlace } from '../../store/places.actions'
import ImageSelector from '../../components/ImageSelector'

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('Ingrese su Comentario');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState(null);

    const handleTitleChange = (text) =>  setTitle(text)

    const handleSave = () => {
        //dispatch(addPlace(title, image, location))
        //navigation.navigate('Direcciones')
     console.warn("Me estoy consiguiendo una tarjeta de Credito para obtener la API")

    }

    const handleOnImage = (uri) => {
        setImage(uri)
    }

    const handleOnLocation = (position) => {
        setLocation(position)
    }

    const handleOnMapLocation = () => {
        navigation.navigate('Map', {
            location: location,
        });
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Envianos una Foto del Reclamo</Text>
                <ImageSelector onImage={handleOnImage}/>
               
                <TextInput 
                    style={styles.input}
                    onChangeText={handleTitleChange}
                    value={title}
                    />
                <Button title="Ingresa Tu Reclamo" color='#6FA353' onPress={() => handleSave()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 15
    },
    label: {
        fontSize: 18,
        marginVertical: 8,
        color: '#212121',
        fontWeight: 'bold'
    },
    input: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginVertical: 8,
        padding: 4
    }
})

export default NewPlaceScreen
