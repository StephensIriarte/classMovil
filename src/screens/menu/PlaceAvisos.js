import React from 'react'
import { View, Text, StyleSheet, FlatList,  Button} from 'react-native'
import { dataAvisos } from '../../utils/data/avisos';

const PlaceAvisos = () => {


    return (
       
            <View style={styles.container}>
                <FlatList
                    data={dataAvisos}
                    keyExtractor={item => item.id}

                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 3, marginTop:20  }} >
                              
                                 <View style={{ flexDirection: 'column' }}>   
                                     
                                 <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 0.5 }}>  
                                        </View>  
                                        <View style={{ flex: 3, backgroundColor: '#ffffff', padding: 1 }} >
                                            <Text style={styles.tableRow}> Nombre: </Text>
                                        </View>
                                        <View style={{ flex: 6, backgroundColor: '#ffffff', padding: 1 }}>
                                                <Text style={styles.textotro}>{item.nombre}</Text>
                                        </View>
                                        <View style={{ flex: 0.5 }}></View>
                                     </View> 
                                     
                                     
                                     <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 0.5 }}>  
                                        </View>  
                                        <View style={{ flex: 3, backgroundColor: '#ffffff', padding: 1 }} >
                                            <Text style={styles.tableRow}> Direccion: </Text>
                                        </View>
                                        <View style={{ flex: 6, backgroundColor: '#ffffff', padding: 1 }}>
                                                <Text style={styles.textotro}>{item.direccion}</Text>
                                        </View>
                                        <View style={{ flex: 0.5 }}></View>
                                     </View> 

                                     <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 0.5 }}>  
                                        </View>  
                                        <View style={{ flex: 3, backgroundColor: '#ffffff', padding: 1 }} >
                                            <Text style={styles.tableRow}> Torre: </Text>
                                        </View>
                                        <View style={{ flex: 6, backgroundColor: '#ffffff', padding: 1 }}>
                                                <Text style={styles.textotro}>{item.torre}</Text>
                                        </View>
                                        <View style={{ flex: 0.5 }}></View>
                                     </View> 

                          
                                     <View style={{ flex: 3, marginTop:20  }} >
                              
                                        <View style={{ flexDirection: 'column' }}>    
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{ flex: 0.5 }}>  
                                                    </View>  
                                                    <View style={{ flex: 3, backgroundColor: '#ffffff', padding: 1 }} >
                                                        <Text style={styles.textpago}> Aviso: </Text>
                                                    </View>
                                                    <View style={{ flex: 6, backgroundColor: '#ffffff', padding: 1 }}>
                                                            <Text style={styles.textpago}>{item.aviso}</Text>
                                                    </View>
                                                    <View style={{ flex: 0.5 }}></View>
                                                </View> 
                                    </View>
                                    </View>         
                                                     
                                    
                                 </View>
                            </View> 





                        );
                    }}
                />
            </View>
    
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textnombre: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#008080',
      },
      textotro: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#080A09',
      },
      textpago: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#1A59A3',
      },
      buttonContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableRow: {
        color: 'black',
        padding: 2,
        fontSize: 16,
    },

})

export default PlaceAvisos
