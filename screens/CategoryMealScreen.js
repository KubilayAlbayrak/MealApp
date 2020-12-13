import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,Button,FlatList, SectionList,VirtualizedList,ImageBackground, Image,TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Colors from '../constants/colors/Colors';
import FavoriteButton from '../components/FavoriteButton';
import {loadAllMeals} from '../redux/modules/meals/thunkActions';
import {useSelector,useDispatch} from 'react-redux';


const CategoryMealScreen = ({navigation,route}) => {


const {category}=route.params
const allMeals = useSelector( state=> state.meals.allMeals)  
const dispatch = useDispatch();
            
useEffect(() => {
dispatch(loadAllMeals());
}, []);    

const displayedMeals=allMeals.filter(meals => meals.categories.includes(category))

const renderItem = ({item}) => {
    return(   
<View style={styles.CategoryMealScreen}>
  <View style={styles.upper}>
<TouchableOpacity onPress={() => navigation.navigate('MealDetailScreen',{materials:item.materials, definition:item.definition, image:item.image, num:item.num, property1:item.property1,property2:item.property2,mealname:item.mealname,mealid:item.mealid})}>
<ImageBackground source={{uri:item.image}} style={styles.image}>
<View style={styles.uppertext}>
<Text style={styles.title}>
{item.title}
</Text>
</View>
</ImageBackground>
</TouchableOpacity>
</View>
<View style={styles.buttomtext}>
    <Text>{item.num}{'m'}</Text>
    <Text>{item.property1}</Text>
    <Text>{item.property2}</Text>
</View>
</View>
);
};

return (
<FlatList
style={styles.container}
data={displayedMeals}
keyExtractor={item => item.id}
numColumns={1}
renderItem={renderItem}
/>
);
};


const styles=StyleSheet.create({
container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  CategoryMealScreen:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
  },
  upper:{
    flex:8,
    margin:15,
    height:150,
    borderRadius:20,
    overflow:'hidden',
    backgroundColor:'#ccc'
  },
  buttomtext:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
  }, 
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  },
  uppertext:{
    position:'relative',
    marginTop:0,
    flexDirection:'row',
    justifyContent:'center',
  },
  title:{
    fontWeight:'bold',
    position:'absolute',
    color:'white',
    fontSize:16,
  }
});

export default CategoryMealScreen;
