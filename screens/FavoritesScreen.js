import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import FavoriteButton from '../components/FavoriteButton';
import {useSelector} from 'react-redux';


function FavoritesScreen () {

    return(
        <View style={styles.container}>
            <Text> Favorites Screen</Text>
        </View>
        /*<FlatList   
        data={favMeals}
        keyExtractor={item => item.id}
        numColumns={1}
        renderItem={renderItem}
        />
        */
    ) 
    };


const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});

export default FavoritesScreen;