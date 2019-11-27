

import React ,{Component} from 'react';
//import LoginScreen from './app/screens/loginScreen'
import {Navigation} from 'react-native-navigation' ;

import   Icon1 from 'react-native-vector-icons/FontAwesome';
import   Icon2 from 'react-native-vector-icons/MaterialIcons';
import   Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions ,
  Image
} from 'react-native';

import RestaurantScreen from '../screens/restaurants';
import FavoriteScreen from '../screens/favorite' ;
import HomeScreen from '../screens/home'


Navigation.registerComponent('Guide.chat' ,() =>RestaurantScreen);
Navigation.registerComponent('Guide.fav' ,() =>FavoriteScreen);
Navigation.registerComponent('Guide.home' ,() =>HomeScreen);





const {width} =Dimensions.get('window');



class HomeSideMenu  extends Component{

    goToChat (){
        Navigation.dismissAllModals();
     
       
        Navigation.showModal ({
            component :{
                id :'chatId' ,
                name :'Guide.chat'
            }
        });

    }
    goToHome (){
        Navigation.dismissAllModals();
     
      
        Navigation.showModal ({
            component :{
                id : 'homeId' ,
                name :'Guide.home'
            }
        });

    }
    goToFavorite(){
        Navigation.dismissAllModals();
     
        Navigation.showModal ({
            component :{
                id : 'favId' ,
                name :'Guide.fav'
            }
        });

    }
  render(){
      return(
          <View style ={styles.container}>
              <View style ={styles.header}>
              <Image source ={require('../images/home.png') } style ={styles.imageHeader}/>
                 
                  <Text style ={styles.textHeader} > 
                     {this.props.user.name}
                   </Text>
              </View>
             

              <View style={styles.MenuItems}>
                  <Icon1 
                  style ={styles.Icons}
                  name ='home'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} onPress={this.goToHome}> الرئيسية</Text>
              </View>

              <View style={styles.MenuItems}>
                  <Icon2 
                  style ={styles.Icons}
                  name ='chat'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} onPress ={this.goToChat} > المحادثات</Text>
              </View>

              <View style={styles.MenuItems}>
                  <Icon2 
                  style ={styles.Icons}
                  name ='favorite'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} onPress={this.goToFavorite}> المفضلة</Text>
              </View>

              <View style={styles.MenuItems}>
                  <Icon2 
                  style ={styles.Icons}
                  name ='settings'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} > الاعدادات</Text>
              </View>

              <View style={styles.MenuItems}>
                  <Icon2 
                  style ={styles.Icons}
                  name ='share'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} > مشاركة التطبيق</Text>
              </View>

              <View style={styles.MenuItems}>
                  <Icon3 
                  style ={styles.logoutIcon}
                  name ='logout'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.logoutText} > تسجيل الخروج</Text>
              </View>
          </View>
      );
  }

}

const styles = StyleSheet.create({
    container :{
        flex :1 ,
        backgroundColor :'white'

    } ,
  
  header: {
    
    backgroundColor :'green' ,
    height : width/1.7,
    width : width ,
    justifyContent :'center' , // vertical
    //alignContent : 'center' , // nothing
   // alignItems :'center' , //horizental
  
    
  },
  imageHeader :{
      width : width/3 ,
      height :width /3 ,
      marginLeft :  width/4 ,
     

  } ,
  textHeader :{
      fontSize :25,
      color :'white' ,
     marginRight :  width/6, 
     textAlign :'center' ,
     marginTop : 15 ,
     
  } ,
  MenuItems :{
    flexDirection :'row-reverse' ,
    marginVertical :25
      
  } ,
  Icons :{
      marginRight : 20 ,
  } ,
  ItemsText :{
    color :'rgba(0,0,0,0.6)' ,
    fontSize :25 ,
    //marginTop :3 ,
    marginRight : 4
   

  } ,
  logoutIcon :{
    color  :'rgba(255,99,71 ,0.8) ',
   
    marginRight : 20 ,


  } ,
  logoutText :{
    color :'rgba(255,99,71,0.7) ' ,
    fontSize :25 ,
    marginRight : 4
      
  }


});

const mapStateToProps =(state)=>{ // l state eli fe l authReducer

    return {
        user : state.auth.user,
        error : state.auth.error ,
  
    }
    
  
  }
  

  
  export default connect(mapStateToProps )(HomeSideMenu);
  


