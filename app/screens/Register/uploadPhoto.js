

import React ,{Component} from 'react';
//import HomeScreen from './app/screens/home'
import {Navigation} from 'react-native-navigation' ;
import ImagePicker from 'react-native-image-picker';

import {
  StyleSheet,
  View,
  Image ,
  TouchableOpacity ,
  Text
} from 'react-native';









class UploadPhoto  extends Component{
    
    state ={
        photo : null ,
    }

    handleImagePicker =()=>{
        const options = {  //options
            noData: true,
          };

          ImagePicker.launchImageLibrary(options , response => {
              console.log(response);
              
              
            if (response.uri) {
                this.setState({ photo: response });
              }

          });
    };

    handleCameraPicker =()=>{
        const options = {  //options
            noData: true,
          };

          ImagePicker.launchCamera(options , response => {
            
              
              
    if (response.uri) {
        JSON.stringify(response);
         this.setState({
          photo: response,
          fileData: response.data,
          fileUri: response.uri
        });
              }

          });
    };

  

  render(){
    const { photo } = this.state;
     return (
        <View style={styles.container}>
            {photo && <Image source ={{uri :photo.uri}} style ={{width :300 ,height :300}} />}

            <TouchableOpacity style ={styles.btnStyle} onPress ={this.handleImagePicker}>
             <Text style ={{color :'white' ,fontSize :25}} >upload photo </Text>
             </TouchableOpacity>
             <TouchableOpacity style ={styles.btnStyle} onPress ={this.handleCameraPicker}>
             <Text style ={{color :'white' ,fontSize :25}} > camera  </Text>
             </TouchableOpacity>
        </View>
     
      
     );
   

   
  }

}

const styles = StyleSheet.create({

    container :{
        flex: 1,
         alignItems: 'center', 
         justifyContent: 'center' 

    }
 
});

export default UploadPhoto;
