import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Button,TouchableNativeFeedback} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors/Colors';
import FavoriteButton from '../components/FavoriteButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons,FontAwesome } from '@expo/vector-icons'; 
import {createDrawerNavigator} from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import DrawerButton from '../components/DrawerButton';
import { FontAwesome5} from '@expo/vector-icons'; 
import {useSelector,useDispatch} from 'react-redux';




const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();



function DrawerNavigator () {


  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Meals" component={TabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersScreen} options={{
              headerLeft: () => (<DrawerButton />
                ),
          }} />
    </Drawer.Navigator>
  )
};


function TabNavigator () {
  return (
    <Tab.Navigator 
    shifting={true}
    >
    <Tab.Screen 
      name="Meals"
      component={MealsNavigator}    
      options={{ 
      tabBarLabel:'Meals', 
      tabBarColor:Colors.primaryColor,
      tabBarIcon: ({color}) => (<MaterialIcons name="restaurant-menu" size={24} color={color} /> ),
        }}
    />
    <Tab.Screen 
    name="Favorites" 
    component={FavoritesScreen} 
    options={{
    tabBarLabel:'Favorites' ,
    tabBarColor:'#ffd700',
    tabBarIcon: ({color}) => (<FontAwesome name="star" size={24} color={color} />),
    }} 
    />
    </Tab.Navigator>
  );
};

const MealsNavigator = () => {

  
return(
        <Stack.Navigator>
            <Stack.Screen 
            name="CategoriesScreen" 
            component={CategoriesScreen} 
            options={{title:'Meal Categories',headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: '#fff', headerLeft: () => <DrawerButton /> }}
            />
            <Stack.Screen 
            name="CategoryMealScreen" 
            component={CategoryMealScreen}
            options={({ route }) => ({ title: route.params.name , category:route.params.category})}
            />
            <Stack.Screen 
            name="FavoritesScreen" 
            component={FavoritesScreen}
            />
            <Stack.Screen 
            name="FiltersScreen" 
            component={FiltersScreen} 
            options={{
              headerLeft: () => (<DrawerButton />
                ),
          }}
            />
            <Stack.Screen 
            name="MealDetailScreen"
            component={MealDetailScreen}
            options={{
                headerRight: () => (
                    <FavoriteButton
                    />
                  ),
            }}
              />
        </Stack.Navigator>
    );
};


export default DrawerNavigator;