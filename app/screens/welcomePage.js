

import React ,{Component} from 'react';
import {Navigation} from 'react-native-navigation' ;
import { StyleSheet ,View ,ImageBackground ,Dimensions ,Image ,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview' ;
import Icon from 'react-native-vector-icons/Entypo'
import store from '../Redux/Store/Store';
import {Provider} from 'react-redux';
import userInfo from '../screens/Register/userInfo';
import LoginScreen from '../screens/loginScreen';

Navigation.registerComponent('Guide.login',() => (props) => (
  <Provider store={store}>
    <LoginScreen {...props} />
  </Provider>
), () => LoginScreen);

Navigation.registerComponent('Guide.register' ,()=>userInfo)
const {width} = Dimensions.get('window');

class Welcome  extends Component{
  

   goToLoginPage(){
     //Navigation.dismissAllModals();
     
       Navigation.showModal({
           component :{
               name : 'Guide.login'
           }
       });
   }
  

   goToRegisterPage(){
    //Navigation.dismissAllModals();
    
      Navigation.showModal({
          component :{
              name : 'Guide.register'
          }
      });
  }
 

  render(){
   
     return (
       <View>
         <ImageBackground source={require('../images/background.png')} style={{width: '100%', height: '100%' }} >
         <Image source={require('../images/Guide.png')} style ={styles.imagesStyle}></Image> 
         <Text style={styles.WelcomeTextStyle}> مرحبا بك  </Text>
         <View style ={styles.container} >

         <TouchableOpacity  onPress={this.goToLoginPage} style ={styles.cardViewStyle} >

         <Image source ={require('../images/login.png')} style ={styles.cardViewImage } />


                 <Text  style={{textAlign :'center' ,color :'white' ,fontSize :21 , fontWeight :'400' ,marginTop : width/16} }> تسجيل الدخول</Text>


               </TouchableOpacity>

               <TouchableOpacity style ={styles.cardViewStyle} onPress={this.goToRegisterPage}>
            <Image source ={require('../images/keyhole.png')} style ={styles.cardViewImage }/>
               
                 <Text style={styles.cardViewTextStyle}> تسجيل جديد</Text>

               </TouchableOpacity>

         </View>

         </ImageBackground>

       </View>
     
      
     );
   

   
  }

}

const styles = StyleSheet.create({
    container :{
        flexDirection :'row-reverse' ,
        marginVertical :width/1.5
    },
    imagesStyle :{
       // width :width/1.1,
       // height :width/3,
        marginTop : width/4,
        //resizeMode :'cover' ,
       
        alignSelf :'center'
        
      },
      WelcomeTextStyle :{
         marginTop:20 ,
         fontSize:35 ,
         textAlign :'center' ,
         color:'white'  ,
        // fontFamily :'ArefRuqaa-Bold' ,

       
      },
      cardViewImage :{
      
        alignSelf :'center' ,
        marginTop : width/10 ,
      

      },
      cardViewStyle :{
        width : width/2.3 ,
        height :width/2.5 ,
        marginRight :10,
        marginLeft :10,
        backgroundColor : ' rgba(0, 0, 0, 0.34)' ,
        borderWidth : 2 ,
        borderColor :'rgba(255, 255, 255, 0.35)' ,
        borderRadius : 10 ,
        borderStyle :'solid' ,
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOpacity: 1.0,
        
        
        
       
       
      } ,
      cardViewTextStyle:{
        textAlign :'center' , 
         fontSize:21 , 
         color:'white' ,
         marginTop : 10 ,
         fontWeight :'400' ,
         
         
      }
 
});

export default Welcome;
