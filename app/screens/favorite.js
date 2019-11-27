

import React ,{Component} from 'react';
import Header from '../header/header'

import YouTube ,{ YouTubeStandaloneAndroid } from 'react-native-youtube';
import {
  StyleSheet,
  View,
  Text,
 
} from 'react-native';





class FavoriteScreen  extends Component{

  state ={
    play :true ,
    fullscreen :false ,
    isReady : false ,
    status :'buffering'
  }

  playVideo (){
    YouTubeStandaloneAndroid.playVideo({
      apiKey: 'AIzaSyDKG0NWoZpW5LjAWNRkoHJZ-gr4VpLZXaU', // Your YouTube Developer API Key
      videoId: 'KVZ-P-ZI6W4', // YouTube video ID
      autoplay: true, // Autoplay the video
      startTime: 120, // Starting point of video (in seconds)
    })
      .then(() => console.log('Standalone Player Exited'))
      .catch(errorMessage => console.error(errorMessage));
  }

    fullScreenTrue (){
      if(this.state.fullscreen == false)
      {
        this.setState({fullscreen : true});
      }
      else{
        this.setState({fullscreen : false});

      }
    }

  render(){
     return (
       <View>
           <Header title ='المفضلة'/>

          
            <YouTube
             apiKey ='AIzaSyDKG0NWoZpW5LjAWNRkoHJZ-gr4VpLZXaU'
             videoId="KVZ-P-ZI6W4" // The YouTube video ID
             play = {this.state.play} // control playback of video with true/false
             fullscreen ={this.state.fullscreen}// control whether the video should play in fullscreen or inline
             loop // control whether the video should loop when ended
            //onReady={e => this.setState({ isReady: true })}
           
            //onChangeState={e => this.setState({ status: e.state })}
            onChangeState={e => this.setState({ status: e.state })}
           // onChangeQuality={e => this.setState({ quality: e.quality })}
            //  onError={e => this.setState({ error: e.error })}
           style={{ alignSelf: 'stretch', height: 300 }}
           
          
           />
           
        
       </View>
     );
   

   
  }

}

const styles = StyleSheet.create({
 
});

export default FavoriteScreen;
