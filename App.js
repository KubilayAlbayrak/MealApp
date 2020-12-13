import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_400Regular,
} from '@expo-google-fonts/open-sans';
import DrawerNavigator from './navigation/MealsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/configureStore';
import {Provider} from 'react-redux';



export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {

  return (
    <Provider store={store}>
      <NavigationContainer>
    <DrawerNavigator />
    </NavigationContainer>
    </Provider>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'OpenSans_400Regular'
  }
});
