 import React from 'react';
 import {
   View
 } from 'react-native';

 import styles from './styles';

 import PlaceNavigator from '../menu/PlaceNavigator'

 
 const Categories = ({navigation}) => {
 
   return (
     
       <View style={styles.container}>
        <PlaceNavigator/>
       </View>
   
   );
 };
 
 
 
 export default Categories;
 