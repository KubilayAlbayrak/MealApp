import React,{useState,useEffect}from 'react';
import {Button,View,TouchableNativeFeedback} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function FavoriteButton  ()  {
const [favorited, setFavorited] = useState(false);



const favoritedHandler = () => {
    setFavorited(!favorited);

}

useEffect(() => {
}
,[])


if(favorited== false){

    return(
            <View>
            <TouchableNativeFeedback onPress={favoritedHandler} >
            <AntDesign name="staro" size={24} color="black" />
            </TouchableNativeFeedback>
        </View>
    )
        }
        else{


        return(
        <View>
            <TouchableNativeFeedback onPress={favoritedHandler} >
            <AntDesign name="star" size={24} color="black" />
            </TouchableNativeFeedback>  
            </View>
        )
        }
};

export default FavoriteButton;