/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';


const App = () => {
  return (
    <View style={{flex: 1}}  >
      <View style={{flexDirection: 'row', padding: 20}}   >
        <TextInput style={{ flex:1, borderBottomWidth:1}} placeholder='Ingrese Nombre'/>
        <Button title='Enviar' color='#9191E9' />
      </View>  
    </View>
  );
};



export default App;
