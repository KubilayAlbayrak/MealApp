import { NavigationContainer } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet, Button,FlatList,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback, Pressable,ImageBackground} from 'react-native';
import CategoryMealScreen from './CategoryMealScreen';
import Colors from '../constants/colors/Colors';
import {loadAllCategories} from '../redux/modules/categories/thunkActions';
import {useSelector,useDispatch} from 'react-redux';
import { AppLoading } from 'expo';
import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_400Regular,
} from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native';


function CategoriesScreen  ({navigation})  {

const allCategories = useSelector( state=> state.categories.allCategories)  
const dispatch = useDispatch();
          
useEffect(() => {
dispatch(loadAllCategories());
}, []);  


let [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_400Regular,
});

if (!fontsLoaded) {
    return <AppLoading />;
} 
else {
  return(
    
    <FlatList
    style={styles.container}
    numColumns={2}
    keyExtractor={(item) => item.id}
    data={allCategories}
    renderItem={({ item}) => 
    <View style={styles.item}>
    <TouchableNativeFeedback
    onPress={() => navigation.navigate('CategoryMealScreen',{ category:item.id })}>
    <View style={{...styles.card, ...{backgroundColor:item.backgroundColor}}} > 
    <Text
    numberOfLines={2} 
    style={styles.title}
    >
    {item.title}
    </Text>
    </View>
    </TouchableNativeFeedback>
     </View>}
    />
);  
};
};

const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item:{
    flex:1,
    margin:15,
    height:150,
    borderRadius:10,
    overflow:'hidden',
  },
  card:{
    flex:1,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    elevation:3,
    padding:15,
    justifyContent:"flex-end",
    alignItems:'flex-end'
  },
  title:{
    fontFamily:'OpenSans_700Bold'
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  },
});

export default CategoriesScreen;

//<ImageBackground source={{uri:item.image}} style={styles.image}> 