

import React ,{Component} from 'react';
//import HomeScreen from './app/screens/home'
import {Navigation} from 'react-native-navigation' ;
import UploadPhoto from './app/screens/Register/uploadPhoto'

import { StyleSheet} from 'react-native';

import LoginScreen from './app/screens/loginScreen';

import store from './app/Redux/Store/Store';
import {Provider} from 'react-redux';
import HomeSideMenu from './app/menu/HomeSideMenu'
import SplashScreen from 'react-native-splash-screen'
import Welcome from './app/screens/welcomePage'




class App  extends Component{
  

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  

  render(){
   
     return (
      <Provider store={store}>
         <Welcome /> 
      </Provider>
     
      
     );
   

   
  }

}

const styles = StyleSheet.create({
 
});

export default App;
