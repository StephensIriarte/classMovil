import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


const PlaceItem = ({ title, image, address, onSelect }) => {
    return (
        <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#da627d',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#F0BAB8'
    },
    details: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#FFF',
        fontSize: 14
    }
});


export default PlaceItem;