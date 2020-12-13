import React,{useState}from 'react';
import {Button,View,TouchableNativeFeedback} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Drawer } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import { useNavigation } from '@react-navigation/native';


function DrawerButton () {
    const navigation = useNavigation();  
    const onDrawer = () => {
        navigation.openDrawer();
      }
    
    return(
        <TouchableNativeFeedback  onPress={onDrawer}>
            <SimpleLineIcons name="menu" size={24} color="black" />
        </TouchableNativeFeedback>
    )
}

export default DrawerButton;