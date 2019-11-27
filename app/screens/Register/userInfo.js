
import {Navigation} from 'react-native-navigation'
import React  ,{Component}from 'react';
import { Input  ,CheckBox } from 'react-native-elements'
 import   Icon1 from 'react-native-vector-icons/FontAwesome5';
 import Icon2 from 'react-native-vector-icons/AntDesign';

 import   Icon3 from 'react-native-vector-icons/Feather';
 import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import { bindActionCreators } from 'redux';

import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import StepIndicator from 'react-native-step-indicator';
import Welcome from '../../screens/welcomePage'
import UploadPhoto from './uploadPhoto'
import LoginScreen from '../../screens/loginScreen'

import store from '../../Redux/Store/Store';




import { StyleSheet, View, Text,ImageBackground ,Image ,Dimensions ,KeyboardAvoidingView ,Keyboard ,TouchableOpacity ,} from 'react-native';



const {width} = Dimensions.get('window');


Navigation.registerComponent('Guide.home' ,()=>HomeScreen)
Navigation.registerComponent('Guide.welcome',() => Welcome )
Navigation.registerComponent('Guide.login',() => (props) => (
  <Provider store={store}>
    <LoginScreen {...props} />
  </Provider>
), () => LoginScreen);



Navigation.registerComponent('Guide.sidemenu',() => (props) => (

    <HomeSideMenu {...props} />
 
), () => HomeSideMenu);
const labels = ["User Information","User Photo"];

const customStyles = {
  stepIndicatorSize: 25, // size of step
  currentStepIndicatorSize:30,  // size of current step
  separatorStrokeWidth: 2,  // l line eli ben kol two steps
  currentStepStrokeWidth: 3, // eli 3nd l current
  stepStrokeCurrentColor: '#fe7013', // lon l line eli 7wlenl step 
  stepStrokeWidth: 3,  //  3rd l line eli 7wlen l step
  stepStrokeFinishedColor: '#fe7013', //  l line a5er step
  stepStrokeUnFinishedColor: '#aaaaaa', 
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013', // l lable eli gwa l step
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#ffffff'
}
 



class UserInfoScreen  extends Component{

  constructor(props){
    super(props);

    this.state ={
        email :'',
        password :'' ,
        checked  : true  ,
        password : '' ,
        hidePass : true ,
        eyeIconName :'eye' ,
        currentPosition: 0    

    } ;   
}


onPageChange=(position)=>{
  this.setState({currentPosition: position});
    switch (position) {
      case 0:
       
       alert(position);
       case 1:
       
       alert(position);
   
      default:
       return null ;
    }
}


goTOWelcomePage(){
  Navigation.dismissAllModals();
     

       Navigation.showModal({
           component :{
               name : 'Guide.welcome'
           }
       });
}

submitClick = () =>{
       
  const email = this.state.email ;
  const password = this.state.password ;
  

  
  if(email != "" && password != "")
  {
  

   //Navigation.dismissAllModals();
   
  Navigation.showModal ({
  component :{
    name :'Guide.login'
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
                
                 <View  >
                           
              <ImageBackground source={require('../../images/background.png')} style={{width: '100%', height: '100%' }} >
                        
                        <Icon2
                          style ={styles.arrowStyle}
                          name ='arrowleft'
                          size ={30}
                          color ='white'
                          onPress ={this.goTOWelcomePage}/>

                    <Image source={require('../../images/Guide.png')} style ={styles.imagesStyle}></Image> 
                      <Text style={{marginTop:10 ,fontSize:30 , textAlign :'center' ,color:'white'  ,fontFamily: 'arial'}}> تسجيل جديد </Text>
                     
                      <Text  style={ {marginTop:3 , marginBottom :5 , fontSize:23 ,  textAlign :'center' ,color:'white'}}> مستخدم </Text>

                      <View style={{flex: 1}}>
    <ProgressSteps labelColor ="rgba(255,255,255 ,0.6)" activeLabelColor="#fff" activeStepNumColor="#fff" completedStepIconColor="green" activeStepIconBorderColor="rgba(255,255,255 ,0.8)" completedProgressBarColor="green">
        <ProgressStep label="user Information" nextBtnStyle={styles.btnStyle } nextBtnText='التالي' nextBtnTextStyle={{ color :'#009f4f'}}>
        <View  style ={{flex:1 ,alignItems :'center'}}>
           
            <Input
                         
                         containerStyle={styles.textInputStyle }
                         placeholder ='الاسم'
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
                         placeholder ='البريد الاكتروني'
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
                         placeholder ='رقم الجوال للتواصل '
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
                    



<Input
                         containerStyle={styles.textInputStyle }
                         name ='password'
                         placeholder =' تأكيد كلمة المرور '
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

                      

                        

          


          </View>

          
        </ProgressStep>
        <ProgressStep label="User Photo"  nextBtnStyle={styles.btnStyle2 } nextBtnText='التالي' nextBtnTextStyle={{ color :'#009f4f'}} previousBtnText='السابق' previousBtnStyle={styles.btnStyle1} previousBtnTextStyle={{color:'#009f4f'}} onSubmit ={this.submitClick}>
            <View style={{ alignItems: 'center' }}>
            <UploadPhoto />
            </View>
        </ProgressStep>
        
    </ProgressSteps>
</View>
                    
                    
                
                      
                       
                    
                    


                 
                      
                       <View style ={styles.footer }>
                        
                        <Text style ={{ marginTop:1 , marginBottom :2 ,  fontSize:20 , color:'white' ,marginRight :30 ,marginTop :10}}> الدخول بواسطة</Text>
                         <Icon1  name ='twitter-square'   color = 'white' size ={40} style ={{  marginHorizontal : 30 }}> 

                         </Icon1 >
                         <Icon2  name ='facebook-square'   color = 'white' size ={40} style ={{  marginHorizontal : 20 }}  > 

                         </Icon2 >
                       </View>

                              

                         
               </ImageBackground>  
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
   
    marginTop : '7%',
    resizeMode :'cover' ,
    alignSelf :'center'
    

  },
  textInputStyle :{

    width : width/1.1 ,
    height : width/9 ,
    borderWidth :1.5 ,
    marginHorizontal :20 ,
    marginVertical :5 ,
    borderRadius :10 ,
    borderColor :'rgba(255,255,255 ,0.4)' ,
    fontSize :20 ,
    backgroundColor: 'rgba(52, 52, 52, 0.5)' ,
   

  
  },
  textStyle :{
    marginTop:5, 
    marginBottom :30 , 
    fontSize:23 , 
     color:'white' ,

    

  },
  btnStyle:{
    width : width/1.5 ,
    height : width/9,
    borderWidth :1 ,
    borderRadius :10 ,
    borderColor :'rgba(255,255,255 ,0.8)' ,
    fontSize :20 ,
    justifyContent : 'center' ,
    alignItems :'center' ,
    backgroundColor: 'rgba(255,255,255 ,0.8)' ,
   
  

  } ,
  btnStyle1:{
    width : width/3.2,
    height : width/9,
    borderWidth :1 ,
    borderRadius :10 ,
    borderColor :'rgba(255,255,255 ,0.8)' ,
    fontSize :20 ,
    justifyContent : 'center' ,
    alignItems :'center' ,
    backgroundColor: 'rgba(255,255,255 ,0.8)' ,
   
  

  } ,
  btnStyle2:{
    width : width/3.2 ,
    height : width/9,
    borderWidth :1 ,
    borderRadius :10 ,
    borderColor :'rgba(255,255,255 ,0.8)' ,
    fontSize :20 ,
    justifyContent : 'center' ,
    alignItems :'center' ,
    backgroundColor: 'rgba(255,255,255 ,0.8)' ,
    
   
  

  } ,
  footer:{
    width : '90%' ,
    height : '7%' ,
    borderWidth :1 ,
    marginHorizontal :20 ,
    marginVertical :7 ,
    borderRadius :10 ,
    borderColor :'white' ,
    fontSize :20 ,
    flexDirection :'row-reverse' ,
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  
   

  } ,
   arrowStyle :{
     marginTop : 15 ,
     marginLeft : 20 

   },
  
  
});



export default UserInfoScreen;




