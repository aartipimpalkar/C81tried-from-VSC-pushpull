import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import Profile from '../screens/Profile'
const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
   return(

         <DrawerNavigator>
           <Drawer.Screen name="Home" component={TabNavigator}/>
           <Drawer.Screen name="Profile" component={Profile}/>
         </DrawerNavigator>

        
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DrawerNavigator