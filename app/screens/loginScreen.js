
import {Navigation} from 'react-native-navigation'
import React  ,{Component}from 'react';
import { Input  ,CheckBox } from 'react-native-elements'
 import   Icon1 from 'react-native-vector-icons/FontAwesome5';
 import Icon2 from 'react-native-vector-icons/AntDesign';

 import   Icon3 from 'react-native-vector-icons/Feather';
 import HomeScreen from './home'

import { bindActionCreators } from 'redux';
import  { loginAction }from '../Redux/actions';
import {connect} from 'react-redux';

import store from '../Redux/Store/Store';
import {Provider} from 'react-redux';
import HomeSideMenu from '../menu/HomeSideMenu'
import Welcome from '../screens/welcomePage'




import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground ,
  Image ,
  Dimensions ,
  KeyboardAvoidingView ,
  Keyboard ,
  TextInput,
  TouchableWithoutFeedback,
//CheckBox ,

  TouchableOpacity ,
} from 'react-native';



const {width} = Dimensions.get('window');

Navigation.registerComponent('Guide.home' ,()=>HomeScreen)
Navigation.registerComponent('Guide.welcome',() => (props) => (
  <Provider store={store}>
    <Welcome {...props} />
  </Provider>
), () => Welcome);

Navigation.registerComponent('Guide.sidemenu',() => (props) => (
  <Provider store={store}>
    <HomeSideMenu {...props} />
  </Provider>
), () => HomeSideMenu);


class LoginScreen  extends Component{

  constructor(){
    super();
    this.state ={
        email :'',
        password :'' ,
        checked  : true  ,
        password : '' ,
        hidePass : true ,
        eyeIconName :'eye'

    } ;   
}

goTOWelcomePage(){
  Navigation.dismissAllModals();
     

       Navigation.showModal({
           component :{
               name : 'Guide.welcome'
           }
       });
}

loginClick = () =>{
       
  const email = this.state.email ;
  const password = this.state.password ;
  

  
  if(email != "" && password != "")
  {
   this.props.loginAction(email , password);

   
   Navigation.dismissAllModals();
     
  Navigation.setRoot ({
    root:{
      sideMenu :{
        right:{
          component :{
            id : 'rightSideDrawer' ,
            name :'Guide.sidemenu'
          }
        } , // end right
        center :{
          stack :{
            children :[{
              component :{
                name : 'Guide.home'
              }
            }] ,
            options :{
              topBar :{
                visible :false ,
              }
            }
          }
        }
    
      } // end side menu

    }
  
});

 Keyboard.dismiss();
   
 
 

  }
  else{
   alert('please enter your data ...');
  }
  

}

   

   showPassword =()=>{
    if(this.state.hidePass)
    {
      this.setState({hidePass :false ,eyeIconName :'eye-off'})
      

    }

    else{
      this.setState({hidePass :true ,eyeIconName :'eye'})

    }
   

  }
    render(){
      
        return(
         
          
              <KeyboardAvoidingView  behavior="position" enabled >
                
                 <View >
            <TouchableWithoutFeedback onPress ={Keyboard.dismiss()}>
            <ImageBackground source={require('../images/background.png')} style={{width: '100%', height: '100%' }} >
                        
                        <Icon2
                          style ={styles.arrowStyle}
                          name ='arrowleft'
                          size ={30}
                          color ='white'
                          onPress ={this.goTOWelcomePage}/>

                    <Image source={require('../images/Guide.png')} style ={styles.imagesStyle}></Image> 
                      <Text style={{marginTop:20 ,fontSize:30 , textAlign :'center' ,color:'white' ,fontFamily: 'Dubai-Regular' }}> تسجيل الدخول </Text>
                      <Text  style={ {marginTop:4 , marginBottom :30 , fontSize:23 ,  textAlign :'center' ,color:'white',fontFamily: 'Dubai-Regular'}}> مستخدم </Text>
                      <Input
                         
                         containerStyle={styles.textInputStyle }
                         placeholder ='اسم المستخدم'
                         onChangeText ={(email)=>this.setState({email})}
                         
                         placeholderTextColor='white'
                         inputStyle ={
                          {color:'white' }
                         }
                         inputContainerStyle ={
                           {borderBottomWidth :0}
                         }

                          
                        
                         leftIcon ={
                           <Icon1
                           name ='user'
                           size ={25}
                           color ='white'
                           
                           />
                         }
                         name ='userName'/>

                      <Input
                         containerStyle={styles.textInputStyle }
                         name ='password'
                         placeholder =' كلمة المرور '
                         onChangeText ={(password)=>this.setState({password})}
                         placeholderTextColor='white'
                         
                         inputStyle ={{
                           color:'white' ,
                           textAlign :'right'
                          }
                         }

                         inputContainerStyle ={
                          {borderBottomWidth :0}
                        }
                         
                         leftIcon ={
                          <Icon3
                          name = {this.state.eyeIconName}
                          size ={25}
                          color ='white'
                          onPress ={
                            this.showPassword
                          }
                         
                       
                          />
                         
                        }
                         secureTextEntry ={this.state.hidePass}
                        
                          />

                        

                     <View style={{ flexDirection:'row-reverse' ,marginLeft :20 ,marginTop :10}}>
                               <CheckBox
                                 checked = {this.state.checked}
                                 checkedColor ='white'
                                 checkedIcon ='check-square'
                                
                                 
                                  />
                               <Text style={styles.textStyle}> تذكرني</Text>
                       </View>
                       <TouchableOpacity style ={styles.btnStyle} onPress ={this.loginClick}>
                         <Text style ={{color :'rgba(0,128,0 ,0.7)	' ,fontSize :25,fontFamily: 'Dubai-Regular'}} >دخول </Text>
                       </TouchableOpacity>

                       <Text style ={{marginTop:1 , marginBottom :2 ,  fontSize:23 , color:'white' ,textAlign:'center'}}> نسيت كلمة المرور ؟</Text>

                       <View style ={styles.footer }>
                        
                        <Text style ={{ marginTop:1 , marginBottom :2 ,  fontSize:20 , color:'white' ,marginRight :30 ,marginTop :10}}> الدخول بواسطة</Text>
                         <Icon1  name ='twitter-square'   color = 'white' size ={40} style ={{  marginHorizontal : 30 }}> 

                         </Icon1 >
                         <Icon2  name ='facebook-square'   color = 'white' size ={40} style ={{  marginHorizontal : 20 }}  > 

                         </Icon2 >
                       </View>
                              

                         
               </ImageBackground> 
              </TouchableWithoutFeedback>               
           
               </View>

              </KeyboardAvoidingView>
                
      
            
        );
    }

}
  

const styles = StyleSheet.create({
  container :{
    flex :1 ,
 

  },
  imagesStyle :{
   alignSelf :'center' ,
    marginTop : '10%',
    resizeMode :'cover'
    

  },
  textInputStyle :{

    width : '90%' ,
    height : '7%' ,
    borderWidth :1.5 ,
    marginHorizontal :20 ,
    marginVertical :7 ,
    borderRadius :10 ,
    borderColor :'rgba(255, 255, 255, 0.35)' ,
    borderStyle :'solid' ,
    fontSize :20 ,
    backgroundColor: 'rgba(52, 52, 52, 0.5)' ,
   

  
  },
  textStyle :{
    marginTop:10, 
    marginBottom :30 , 
    fontSize:23 , 
     color:'white' ,
     fontFamily: 'Dubai-Regular'

    

  },
  btnStyle:{
    width : '90%' ,
    height : '7%' ,
    borderWidth :1 ,
    marginHorizontal :20 ,
    marginVertical :4 ,
    borderRadius :10 ,
    borderColor :'rgba(255,255,255 ,0.8)' ,
    fontSize :20 ,
    justifyContent : 'center' ,
    alignItems :'center' ,
    
     backgroundColor: 'rgba(255, 255, 255, 0.73)' ,
  

  } ,
  footer:{
    width : '90%' ,
    height : '7%' ,
    borderWidth :1 ,
    marginHorizontal :20 ,
    marginVertical :10 ,
    borderRadius :10 ,
    borderColor :'rgba(255, 255, 255, 0.35)' ,
    borderStyle :'solid' ,
    fontSize :20 ,
    flexDirection :'row-reverse' ,
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  
   

  } ,
   arrowStyle :{
     marginTop : 20 ,
     marginLeft : 20 

   },
  





  
});

const mapStateToProps =(state)=>{ // l state eli fe l authReducer

  return {
      user : state.auth.user,
      error : state.auth.error ,

  }
  

}

const mapDispatchToProps=dispatch =>bindActionCreators({
  loginAction
},dispatch)

export default connect(mapStateToProps , mapDispatchToProps)(LoginScreen);




