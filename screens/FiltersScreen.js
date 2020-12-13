import React,{useState} from 'react';
import {Text,View,StyleSheet,Switch} from 'react-native';
import Colors from '../constants/colors/Colors';


function FiltersScreen () {
    const [isGlutenFree, setIsGlutenFree] = useState(false)  
    const [isLactoseFree, setIsLactoseFree] = useState(false)  
    const [isVegan, setIsVegan] = useState(false)  
    const [isVegeterian, setIsVegeterian] = useState(false)   
    return(
        <View style={styles.screen}>
            <Text> Gluten-Free</Text>
            <Switch
            value={isGlutenFree} 
            onValueChange={newValue => setIsGlutenFree(newValue)}
            thumbColor={Colors.primaryColor}
            trackColor={{true:Colors.primaryColor}}
            />
            <Text> Lactose-Free</Text>
            <Switch
            value={isLactoseFree} 
            onValueChange={newValue =>setIsLactoseFree (newValue)}
            thumbColor={Colors.primaryColor}
            trackColor={{true:Colors.primaryColor}}
            />
            <Text> Vegan</Text>
            <Switch
            value={isVegan} 
            onValueChange={newValue => setIsVegan(newValue)}
            thumbColor={Colors.primaryColor}
            trackColor={{true:Colors.primaryColor}}
            />
            <Text> Vegeterian</Text>
            <Switch
            value={isVegeterian} 
            onValueChange={newValue => setIsVegeterian(newValue)}
            thumbColor={Colors.primaryColor}
            trackColor={{true:Colors.primaryColor}}
            />
        </View>
    );
    
};

const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
});

export default FiltersScreen;