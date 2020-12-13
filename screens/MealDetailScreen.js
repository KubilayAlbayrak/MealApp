import React , {useEffect,useState}from 'react';
import {Text,View,StyleSheet,Button,ImageBackground,ScroolView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { NavigationEvents } from 'react-navigation';
import CategoryMealScreen from './CategoryMealScreen';
import {loadAllMeals} from '../redux/modules/meals/thunkActions';
import {useSelector,useDispatch} from 'react-redux';


const MealDetailScreen = ({route,props}) => {


const allMeals = useSelector( state=> state.meals.allMeals)  
const dispatch = useDispatch();
    
useEffect(() => {
dispatch(loadAllMeals());
}, []);      
const{materials,definition,property2,property1,image,num,mealname} = route.params
const selectedMeals = allMeals.filter(meals => meals.mealname.includes(mealname) );


const renderItem = ({item}) => {
    return(   
<View style={styles.CategoryMealScreen}>
  <View style={styles.upper}>
<ImageBackground source={{uri:item.image}} style={styles.image}>
<View style={styles.uppertext}>
<Text style={styles.title}>
{item.title}
</Text>
</View>
</ImageBackground>
</View>
<View style={styles.buttomtext}>
    <Text>{item.num}{'m'}</Text>
    <Text>{item.property1}</Text>
    <Text>{item.property2}</Text>
</View>
<View style={{flexDirection:'column',justifyContent:'space-between',flex:2, borderRadius:10,}}>
    <View style={{paddingTop:10}}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'200' }}>Materials</Text>
        </View>
    {item.materials.map(material => (<View style={styles.ListItem}><Text>{material}</Text></View>))}
    </View>
    <View style={{alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'200'}}>Steps</Text>
        </View>
    <View>
    {item.definition.map(definition => (<View style={styles.ListItem}><Text>{definition}</Text></View>))}
    </View> 
</View>
</View>
);
};

return(

<FlatList
style={styles.container}
data={selectedMeals}
keyExtractor={item => item.id}
numColumns={1}
renderItem={renderItem}
/>
);
};


const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
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
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  },
  CategoryMealScreen:{
    flexDirection:'column',
    justifyContent:'space-around',
    flex:1,
  },
  upper:{
    flex:1,
    margin:15,
    height:150,
    borderRadius:20,
    overflow:'hidden'
  },
  buttomtext:{
    flex:0.2,
    flexDirection:'row',
    justifyContent:'space-around',
  }, 
  ListItem:{
      marginVertical:10,
      marginHorizontal:20,
      borderColor:'#ccc',
      borderWidth:1,
      padding:10,
      borderRadius:10,
      backgroundColor:'#ffebcd'
  }
});

export default MealDetailScreen;