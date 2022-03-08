import React from 'react'
import { Platform, Text, TouchableOpacity, StyleSheet } from 'react-native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// screens
import PlaceListScreen from '../../screens/menu/PlaceListScreen'
import PlaceDetailScreen from '../../screens/menu/PlaceDetailScreen'
import NewPlaceScreen from '../../screens/menu/NewPlaceScreen'
import PlaceAvisos from '../../screens/menu/PlaceAvisos'



const PlaceStack = createNativeStackNavigator()

const ShopStackNavigation = () => (
    <PlaceStack.Navigator
        initialRoute='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? '#115C7D' : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : '#115C7D',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Direcciones"
            component={PlaceListScreen}
            options={({navigation}) => (
                {
                    title: 'Comunidad Edificio',
                    headerRight: () => (

                    <TouchableOpacity  >
                        <TouchableOpacity onPress={() => navigation.navigate('Detalle')} style={styles.roundButton1} >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Gastos Comunes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Nuevo')} style={styles.roundButton2} >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Reclamos</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => navigation.navigate('Avisos')} style={styles.roundButton3} >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Avisos</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>        


                   

                    )
                }
            )} 
        />
        <PlaceStack.Screen
            name="Detalle"
            component={PlaceDetailScreen}
            options={{title: 'Gastos Comunes'}} 
        />
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}
            options={{title: 'Reclamos'}} 
        />
        <PlaceStack.Screen
            name="Avisos"
            component={PlaceAvisos}
            options={{title: 'Avisos'}} 
        />
    </PlaceStack.Navigator>
)


export default ShopStackNavigation


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundButton1: {
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'orange',
    },
    roundButton2: {
      marginTop: 20,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#F0BAB8',
    },
    roundButton3: {
        marginTop: 20,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#5BE87E',
      },



  });



