import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView ,{Marker} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import {Navigation} from 'react-native-navigation' ;


const GOOGLE_MAPS_APIKEY  =''; 





class DisplayMap  extends Component{

  static options(passProps) {
    return {
      topBar: {
       leftButtons: {
          id: 'buttonOne',
          icon: require('../images/arrowLeft.png'),
          color :'rgba(0,128,0 ,0.7)' ,
        }
      }
    };
  }





    constructor (props){
        super(props);  
        this.state ={
           //markers :[],
           latitude : null ,
           longitude : null ,
           error : null ,
            
        };
        // this.handlePress =this.handlePress.bind(this);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }
  navigationButtonPressed({ buttonId }) {
      Navigation.dismissModal(this.props.componentId)
   }
   

    componentDidMount (){
        
        Geolocation.getCurrentPosition((position) =>{
            this.setState({
                             latitude : position.coords.latitude ,
                             longitude : position.coords.longitude ,
                        })

        },
    
        );
    }

  

  render(){
     return (
      <View  style ={styles.container}>
          <MapView 
           style={styles.map}

           initialRegion={{
           latitude:this.state.latitude,
           longitude: this.state.latitude,
           latitudeDelta: 0.1,
           longitudeDelta: 0.1,}} // end initialRegion
          >

           <MapView.Marker
             coordinate={{
               latitude: this.state.latitude,
                longitude:  this.state.longitude,
                }}
                
                title = {'موقعك الحالي'}
                description ={'هنا يرقد حزلقوم '}
             /> 

          </MapView>
      </View>
     
      
     );
   

   
  }

}

const styles = StyleSheet.create({

    container: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      map: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
      },
 
});

export default DisplayMap;

